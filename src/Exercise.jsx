import React from "react";
import UserCard from "./UserCard";
import users from "./data";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#e73d1c]">
        Post Card
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-2xl mx-auto">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;