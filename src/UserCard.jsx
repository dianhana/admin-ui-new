import React, { useState } from "react";

function UserCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full
                    transition-all duration-300 
                    hover:scale-105 hover:border hover:bg-red-100 
                    flex flex-col">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>

      <p className="text-gray-600 mb-4 text-center">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className={`mt-auto p-2 rounded-md text-white transition
          ${
            clicked
              ? "bg-special-red2 hover:bg-red-600"
              : "bg-gray-500 hover:bg-gray-400"
          }`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;