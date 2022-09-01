import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const USERS_SUGGESTED = [];
    const createRandomUser = () => {
      return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        company: faker.company.name(),
      };
    };

    Array.from({ length: 5 }).forEach(() => {
      USERS_SUGGESTED.push(createRandomUser());
    });
    console.log(USERS_SUGGESTED);
    setSuggestions(USERS_SUGGESTED);
  }, []);

  return (
    <div className="ml-4 mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>

          <button className="text-xs font-bold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
