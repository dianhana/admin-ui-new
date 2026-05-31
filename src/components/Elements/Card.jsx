import React from "react";

function Card(props) {
  const { title, desc, link, children } = props;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-700 text-2xl">{title}</h3>

        {link && (
          <span className="text-xs text-gray-500">
            View All
          </span>
        )}
      </div>

      <div className="flex-1 bg-white rounded-lg px-6 py-4 shadow-md min-h-[150px]">
        {desc}

        {children}
      </div>
    </div>
  );
}

export default Card;