import React,{ useContext } from 'react';
import Logo from '../Elements/Logo';
import { ThemeContext } from '../../context/themeContext';


function AuthLayout(props) {
    const { children } = props;
  return (
    <>
        <main 
        className={"min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name}"}
          >
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