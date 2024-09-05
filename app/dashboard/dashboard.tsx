"use client";

import { SignOutBtn } from "../components/SignOutBtn";
import { getAccountLinkStatus } from "@/lib/auth/getAccountLinkStatusServerAction";
import { getUserName } from "@/lib/auth/getUserNameServerAction";
import { getUserRole } from "@/lib/auth/getUserRoleServerAction";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { unlinkGoogleAccount } from "@/lib/auth/unlinkGoogleAccountServerAction";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const DashboardPage: React.FC = () => {
  const [isAccountLinked, setIsAccountLinked] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const { update } = useSession();
  const [activeSection, setActiveSection] = useState('account');
  useEffect(() => {
    const userInfo = async () => {
      const name = await getUserName();
      if (name) {
        setUsername(name);
      }

      const role = await getUserRole();
      if (role) {
        setRole(role);
      }
    };
    const accountLinkStatus = async () => {
      try {
        const accountLinkStatus = await getAccountLinkStatus();
        setIsAccountLinked(accountLinkStatus);
      } catch (error) {
        console.error("Failed to get account link status:", error);
      }
    };
    userInfo();
    accountLinkStatus();
  }, []);

  return (
        <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Dashboard Container */}
      <div className="flex w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white">
          <h3 className="p-4 text-xl font-bold border-b border-gray-700">Dashboard</h3>
          <ul className="space-y-2 p-4">
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === 'account' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveSection('account')}
              >
                Account
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === 'email-settings' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveSection('email-settings')}
              >
                Email Settings
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === 'other' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveSection('subscription')}
              >
                Subscription
              </button>
            </li>
            <li>
              <SignOutBtn className="w-full text-left p-2 rounded text-gray-300 hover:bg-gray-700" />
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeSection === 'account' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Account</h3>
              <p>Role: {role}</p>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Username:</span>
                <span className="text-gray-600">{username}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter name"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => update({ name: username })}
                >
                  Update Name
                </button>
              </div>
              <button
                className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={
                  isAccountLinked
                    ? async () => {
                        await unlinkGoogleAccount().then(() => {
                          setIsAccountLinked(false);
                        });
                      }
                    : async () => {
                        await handleGoogleSignIn().then(() => {
                          setIsAccountLinked(true);
                        });
                    }
                }
              >
                {isAccountLinked
                  ? 'Disconnect Google Account'
                  : 'Connect Google Account'}
              </button>
            </div>
          )}

          {activeSection === 'email-settings' && (
            <div>
              <h3 className="text-2xl font-bold">Email Settings</h3>
              <p className="mt-4">Manage your email settings here...</p>
              {/* Add email settings content here */}
            </div>
          )}

          {activeSection === 'subscription' && (
            <div>
              <h3 className="text-2xl font-bold">Other Settings</h3>
              <p className="mt-4">Manage other settings here...</p>
              {/* Add other settings content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 