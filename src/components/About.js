import React from "react";

export default function About() {
  const educationData = [
    {
      title: "Bachelor of Technology [B.Tech]",
      institution: "Galgotia College Of Engineering And Technology",
      details: "7.5 CGPA",
    },
    {
      title: "Intermediate [12th] [PCM]",
      institution: "Hindustan Aeronautics Limited School Korwa",
      details: "84.6%",
    },
  ];

  // Certificates data
  const certificateData = [
    {
      title: "React JS",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/4c88cd8dd04b",
    },
    {
      title: "Earn Infosys certification React.Js developer",
      issuer: "Infosys",
      link: "#", // Replace with actual link if available
    },
    {
      title: "Infosys Certified Frontend Web Development Professional",
      issuer: "Infosys",
      link: "#", // Replace with actual link if available
    },
  ];
  const skills = [
    "React.js",
    "JavaScript",
    "Redux",
    "Node.js",
    "MongoDB",
    "Git",
    "HTML",
    "CSS",
    "VS Code",
    "Jira",
    "Figma",
    "Postman",
    "GitLab",
    "GitHub",
  ];
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-4">About Vijay Kumar</h2>
    <p className="text-lg leading-relaxed mb-4">
      Senior Software Engineer at Infosys, Gurugram, India since June 2021. Highly skilled and motivated senior software engineer with 3 years of experience in front-end development, possessing strong knowledge of JavaScript, React, Redux, Node.js, and MongoDB.
    </p>
    <h3 className="text-2xl font-bold mb-2">Strengths</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Self-Motivated</li>
      <li>Quick Learner</li>
      <li>Hard Worker</li>
      <li>Leadership</li>
      <li>Collaboration</li>
    </ul>
    <h3 className="text-2xl font-bold mb-2">Skills</h3>
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 shadow-md">
            <p className="text-xl font-bold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Projects Work Experience</h3>

        <div className="mb-6">
          <h4 className="text-xl font-bold mb-1">Telecommunications Sector, Developer (12/2023 – present)</h4>
          <p>Create a user-friendly Responsive design that aligns with company branding guidelines. Use responsive design principles to ensure the page looks good and functions well on various devices and screen sizes.</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold mb-1">Financial Banking Sector, Developer (08/2022 – 11/2023)</h4>
          <p>The project focused on mapping bank customer data details in various ways, utilizing mapping, pagination, filtering, responsive design using styled-component libraries, media queries, and sorting features when bankers logged in. It involved maintaining a complex and scalable technology infrastructure and leading the product team to implement new features while strategically planning for future products.</p>
          <p><strong>Testing and Quality:</strong> Write unit tests, conduct sanity testing, and ensure code quality.</p>
          <p><strong>Agile Collaboration:</strong> Maintain Agile workflow with Jira updates, business requirement alignment, and timely delivery.</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold mb-1">Financial Banking Sector, Developer (05/2022 – 08/2022)</h4>
          <p>The project involved creating a loan page for bank customers to apply for loans. Responsibilities included determining project requirements for application development, including capabilities, specialized scripts, and maintaining application integrity, security, and efficiency.</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-1">Financial Banking Sector, Developer (09/2021 – 04/2022)</h4>
          <p>Solved bugs, added functionality, and created a page for gathering user details. Worked on web application development from scratch by converting mock-ups into reusable web components.</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        {educationData.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-bold">{edu.title}</h4>
            <p className="">{edu.institution}</p>
            <p className="">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Certificates</h3>
        {certificateData.map((cert, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-bold">{cert.title}</h4>
            <p className="">{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
