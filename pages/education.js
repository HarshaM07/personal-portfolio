// pages/education.js
import Layout from "../components/layout";

const education = [
  {
    degree: "BACHELOR OF ENGINEERING - Computer Science and Engineering",
    institution: "Vidya Vikas Institute of Engineering and Technology",
    year: "2020-2023",
    grade: "65% - 7.30 CGPA",
  },
  {
    degree: "DIPLOMA IN COMPUTER SCIENCE",
    institution: "D Banumaiah's Polytechnic Mysore",
    year: "2017-2020",
    grade: "81%",
  },
];

export default function Education() {
  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
            <p>{edu.grade}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
