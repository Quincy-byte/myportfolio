export default function Projects() {
  return (
    <section className="py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
        <p className="text-sm mb-2">A fully responsive portfolio built with React and Tailwind CSS.</p>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Todo App</h2>
        <p className="text-sm mb-2">A simple Todo application with React state management.</p>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>
      </div>

      {/* New E-commerce Project Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">E-commerce Website</h2>
        <p className="text-sm mb-4">
          A functional e-commerce project with product pages and cart features.
        </p>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>

        <br />
        <a
          href="https://github.com/Quincy-byte/E-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm underline mt-3 inline-block"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}
