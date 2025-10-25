type ProjectProps = {
    title: string;
    description: string;
    link?: string;
  };
  
  export default function ProjectCard({ title, description, link }: ProjectProps) {
    return (
      <div className="bg-bohoBeige dark:bg-bohoDarkGreen shadow-md rounded-2xl p-6 transform transition hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-bohoGreen dark:text-bohoBeige mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bohoGreen dark:text-bohoBeige hover:underline font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    );
  }
  