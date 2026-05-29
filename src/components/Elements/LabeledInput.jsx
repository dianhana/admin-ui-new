import React from 'react';

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2 text-gray-700">
        {label}
      </label>

      <input
        id={id}
        {...rest}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </>
  );
}

export default LabeledInput;