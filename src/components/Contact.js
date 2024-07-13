import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
      <p>
        Name: Vijay Kumar<br />
        Role: Senior Software Engineer<br />
        Gender: Male<br />
        Email: vijaykumargu1055@gmail.com<br />
        Phone: +91 7985208853<br />
        LinkedIn: <a href="https://www.linkedin.com/in/vijay-kumar-7ab4a1276" className="text-blue-500 hover:underline">LinkedIn Profile</a><br />
        Nationality: Indian<br />
        HackerRank Certificate: <a href="https://www.hackerrank.com/certificates/4c88cd8dd04b" className="text-blue-500 hover:underline">HackerRank Certificate</a><br />
        GitHub: <a href="https://github.com/Vijay-Victoria" className="text-blue-500 hover:underline">GitHub Profile</a><br />
      </p>
      <h3 className="text-2xl font-bold mb-2">Objective</h3>
      <p className="mb-4">
        To learn and grow at every given opportunity and thereby prove to be an asset to whichever organization I am associated with.
      </p>
      <h3 className="text-2xl font-bold mb-2">Professional Experience</h3>
      <h4 className="text-xl font-bold mb-1">Infosys, Senior System Engineer (06/2021 – present | Gurugram, India)</h4>
      <p>Highly skilled and motivated senior software engineer with 3 years of experience in front-end development...</p>
    </div>
  );
}
