import React from 'react';

function Button(props) {
  const { children, type = "submit", variant = "primary" } = props;

  const baseClasses =
    "h-12 rounded-md text-sm w-full font-medium transition";

  const variantClasses = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700",
  };

  const finalClasses = `${baseClasses} ${
    variantClasses[variant] || variantClasses.primary
  }`;

  return (
    <button className={finalClasses} type={type}>
      {children}
    </button>
  );
}

export default Button;