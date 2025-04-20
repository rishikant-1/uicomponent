import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden text-gray-800">
      <div className="absolute -top-35 -left-20 w-96 h-96 bg-indigo-300 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-60 -right-30 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Build UI Faster with{" "}
          <span className="text-indigo-600">Tailwind CSS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Ui-Zone helps you craft beautiful, responsive components with speed.
          Focus on design, not boilerplate.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-gray-800 px-6 py-3 rounded-lg text-indigo-600 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-10">
            Why Developers Love Ui-Zone
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Feature
              title="Lightning Fast Setup"
              desc="Start building immediately with pre-configured tools and styles."
            />
            <Feature
              title="Tailwind Utility First"
              desc="Write cleaner markup with powerful utility classes for every element."
            />
            <Feature
              title="Fully Responsive"
              desc="Beautifully adaptive UI components for every screen size."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500">
        © {new Date().getFullYear()} Ui-Zone. Crafted with ❤️ and Tailwind CSS.
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-gray-950 rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-xl font-semibold text-indigo-100 mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

export default Home;
