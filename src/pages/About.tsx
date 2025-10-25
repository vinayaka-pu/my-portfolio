import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-bohoBeige text-center dark:bg-bohoDarkGreen transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-bohoGreen dark:text-bohoBeige mb-6">
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
        I’m Vinayaka, a motivated learner with a background in IT and a love for creativity.
        I enjoy exploring teaching, cooking, and design. My goal is to build a balanced life
        where work and passion meet.
      </p>
    </motion.section>
  );
}
