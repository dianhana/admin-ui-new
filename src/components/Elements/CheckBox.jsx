import React from 'react';

function CheckBox() {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="accent-teal-500"
        name="status"
        id="status"
      />

      <label htmlFor="status" className="text-sm text-gray-600 ml-2">
        Keep me signed in
      </label>
    </div>
  );
}

export default CheckBox;