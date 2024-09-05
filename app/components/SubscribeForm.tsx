'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  clientType: string;
}

interface FormError {
  firstName?: boolean;
  lastName?: boolean;
  emailAddress?: boolean;
  clientType?: boolean;
}

const SubscriptionForm: React.FC = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    clientType: ''
  });
  const [formError, setFormError] = useState<FormError>({});
  const [formStatus, setFormStatus] = useState<'success' | 'failure' | ''>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormError({
      ...formError,
      [name]: !value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.emailAddress || !formData.clientType) {
      setFormError({
        firstName: !formData.firstName,
        lastName: !formData.lastName,
        emailAddress: !formData.emailAddress,
        clientType: !formData.clientType,
      });
      setFormStatus('failure');
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    setFormStep(2);
  };

  return (
    <div className="flex bg-gray-900 p-36 justify-center">
      <div className="w-1/2 pr-36 pt-20">
        <h2 className="text-6xl font-semibold mb-2 text-white">Sail with us</h2>
        <p className="text-lg text-white mt-8">
          Sign up to learn more about Infsail. You’ll receive regular performance updates and daily market updates.
        </p>
      </div>
      <div className="w-1/3">
        {formStep === 1 && (
          <form className="relative" onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={`mt-1 block w-full py-5 px-3 border text-lg text-white placeholder-white bg-gray-900 ${formError.firstName ? 'border-red-500' : 'border-gray-500'} `}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {formError.firstName && <strong className="text-red-500 text-xs absolute -bottom-4 left-0">Please enter your first name.</strong>}
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={`mt-1 block w-full py-5 px-3 border text-lg text-white placeholder-white bg-gray-900 ${formError.lastName ? 'border-red-500' : 'border-gray-500'} `}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {formError.lastName && <strong className="text-red-500 text-xs absolute -bottom-4 left-0">Please enter your last name.</strong>}
            </div>

            <div className="mb-4 relative">
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                className={`mt-1 block w-full py-5 px-3 border text-lg text-white placeholder-white bg-gray-900 ${formError.emailAddress ? 'border-red-500' : 'border-gray-500'} `}
                value={formData.emailAddress}
                onChange={handleChange}
                required
                pattern="^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
              />
              {formError.emailAddress && (
                <>
                  <strong className="text-red-500 text-xs absolute -bottom-4 left-0">Please enter your email address.</strong>
                  {!formError.emailAddress && <strong className="text-red-500 text-xs absolute -bottom-4 left-0">Please enter a valid email address.</strong>}
                </>
              )}
            </div>

            <div className="mb-4 relative">
              <select
                name="clientType"
                className={`mt-1 block w-full py-5 px-3 border text-lg text-white bg-gray-900 ${formError.clientType ? 'border-red-500' : 'border-gray-500'} `}
                value={formData.clientType}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Select your role</option>
                <option value="Financial Professional">Financial Professional</option>
                <option value="Individual Investor">Individual Investor</option>
              </select>
              {formError.clientType && <strong className="text-red-500 text-xs absolute -bottom-4 left-0">Please select what best describes you.</strong>}
            </div>

            <div className="pt-10 flex justify-center">
              <input
                type="submit"
                className={`py-3 px-6 text-white text-md font-semibold   ${!formData.firstName || !formData.lastName || !formData.emailAddress || !formData.clientType ? 'bg-gray-700 ' : 'bg-blue-800 cursor-pointer'}`}
                value="Subscribe Now"
                disabled={!formData.firstName || !formData.lastName || !formData.emailAddress || !formData.clientType}
              />
            </div>
          </form>
        )}

        {formStep === 2 && (
          <div className="text-center">
            {formStatus === 'success' ? (
              <div className="text-green-500">
                <p>Thank you for subscribing. Innovation is on its way to your inbox!</p>
              </div>
            ) : (
              <div className="text-red-500">
                <p>There was a problem with your submission. Please review your responses and try again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>



  );
};

export default SubscriptionForm;

