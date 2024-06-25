// pages/skills.js
import Layout from "../components/layout";

const skills = [
  "Java",
  "Python",
  "C",
  "HTML/CSS",
  "JavaScript",
  "Vue.js",
  "MySQL",
  "Spring Boot",
  "Ansible",
  "Linux",
  "Git",
];

export default function Skills() {
  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
