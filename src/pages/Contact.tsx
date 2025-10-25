export default function Contact() {
    return (
      <section
        id="contact"
        className="py-20 bg-bohoBeige text-center dark:bg-bohoDarkGreen transition-colors duration-500"
      >
        <h2 className="text-4xl font-bold text-bohoGreen dark:text-bohoBeige mb-6">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          I’d love to hear from you! Whether it’s about teaching, food, or new ideas.
        </p>
        <a
          href="mailto:vinayaka@example.com"
          className="px-6 py-3 bg-bohoGreen text-bohoBeige rounded-xl font-medium hover:bg-bohoDarkGreen transition"
        >
          Send Email
        </a>
      </section>
    );
  }
  