import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Skills</h1>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <p className="text-xl font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
