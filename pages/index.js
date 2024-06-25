// pages/index.js
import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Tobacco Plant Region Extraction",
    description: "Using CNN and Watershed Algorithm. Extract potential tobacco plant areas from UAV photos...",
    duration: "08/2022 - 04/2023"
  },
  {
    title: "Covid Bed Booking Management System",
    description: "Check availability of beds in hospitals during the COVID-19 pandemic...",
    duration: "08/2021 - 01/2022"
  },
  {
    title: "Quiz Application",
    description: "Desktop application offering a multiple-choice question (MCQ) examination mode...",
    duration: "04/2023 - 12/2023"
  },
  {
    title: "Bookstore Management System",
    description: "Spring boot project to store and display available books...",
    duration: "2023"
  }
];

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Harsha M</h1>
        <p className="mb-8">Welcome to my portfolio. I am a Computer Science Engineer specializing in frontend development and automation. Here you can find my projects, skills, and contact information.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </section>
    </Layout>
  );
}
