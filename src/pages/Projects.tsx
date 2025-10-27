import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A personal website built with React, TypeScript, and Tailwind CSS to showcase my work.",
      link: "https://github.com/vinayaka-pu/my-portfolio",
    },
    {
      title: "Recipe Hub",
      description:
        "A web app where users can browse and share homemade recipes with cultural influences.",
      link: "https://github.com/vinayaka/recipe-hub",
    },
    {
      title: "Learning Dashboard",
      description:
        "An interactive dashboard to track teaching materials and student progress.",
      link: "https://github.com/vinayaka/learning-dashboard",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-bohoBeige dark:bg-bohoDarkGreen text-center transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-bohoGreen dark:text-bohoBeige mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </motion.section>
  );
}
