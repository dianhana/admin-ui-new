import React from "react";

function Card({ title, link = false, desc }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-02 text-2xl">
          {title}
        </h3>

        {link && (
          <span className="text-xs text-gray-02">
            View All
          </span>
        )}
      </div>

      <div className="bg-white rounded-lg p-5 shadow-md min-h-[150px]">
        {desc}
      </div>
    </div>
  );
}

export default Card;