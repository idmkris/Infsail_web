// components/ClientLayout.tsx
'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from '../(home)/Footer';
import SubscriptionForm from './SubscribeForm';

type ClientLayoutProps = {
  children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();

  const showSubscriptionForm = ["/", "/performance", "/about"].includes(pathname);

  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
      {showSubscriptionForm && (
        <aside>
          <SubscriptionForm />
        </aside>
      )}
      <Footer />
    </>
  );
};

export default ClientLayout;
