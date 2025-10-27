// import { motion } from 'framer-motion';

// export default function Home() {
//   return (
//     <motion.section
//       id="home"
//       className="min-h-screen flex flex-col justify-center items-center bg-bohoBeige dark:bg-bohoDarkGreen pt-16 transition-colors duration-500"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <h1 className="text-5xl font-bold text-bohoGreen dark:text-bohoBeige mb-4 text-center">
//         Hi, I’m Vinayaka 👋
//       </h1>
//       <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl">
//         I’m a creative professional passionate about teaching and cooking —
//         exploring technology and art to make learning and food more meaningful.
//       </p>

//       <div className="mt-8 flex flex-col sm:flex-row gap-4">
//         <a
//           href="#projects"
//           className="px-6 py-3 bg-bohoGreen text-bohoBeige rounded-xl font-medium hover:bg-bohoDarkGreen transition"
//         >
//           View My Work
//         </a>
//         <a
//           href="/resume.pdf"
//           download
//           className="px-6 py-3 bg-bohoGreen text-bohoBeige rounded-xl font-medium hover:bg-bohoDarkGreen transition"
//         >
//           Download Resume
//         </a>
//       </div>
//     </motion.section>
//   );
// }

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-bohoBeige dark:bg-bohoDarkGreen pt-16 transition-colors duration-500 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-30"
        style={{ backgroundImage: "url('/your-image.png')" }}
      ></div>

      {/* Content */}
      <h1 className="text-5xl font-bold text-bohoGreen dark:text-bohoBeige mb-4 text-center relative">
        Hi, I’m Vinayaka 👋
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl relative">
        I’m a creative professional passionate about teaching and cooking —
        exploring technology and art to make learning and food more meaningful.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 relative">
        <a
          href="#projects"
          className="px-6 py-3 bg-bohoGreen text-bohoBeige rounded-xl font-medium hover:bg-bohoDarkGreen transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-bohoGreen text-bohoBeige rounded-xl font-medium hover:bg-bohoDarkGreen transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}
