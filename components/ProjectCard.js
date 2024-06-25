// components/ProjectCard.js
const ProjectCard = ({ project }) => (
  <div className="border border-gray-300 p-4 rounded-md mb-4 shadow-md">
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="mt-2">{project.description}</p>
    <p className="text-gray-500 text-sm mt-1">
      <em>{project.duration}</em>
    </p>
  </div>
);

export default ProjectCard;
