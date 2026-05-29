import React from 'react';
import Logo from '../Elements/Logo';


function AuthLayout(props) {
    const { children } = props;
  return (
    <>
        <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        {/* container start */}
        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md">
        <Logo />
            {children}
        </div>
        {/* container end */}
        </main>
    </>
  );
}

export default AuthLayout