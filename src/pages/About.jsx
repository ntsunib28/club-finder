// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">About Campus Club Finder</h1>

      <p className="mb-4 text-lg">
        Campus Club Finder is a web application designed to help university students discover and join student clubs on campus.
        Whether you're into robotics, books, gaming, sustainability, or photography — this app makes it easy to learn more about each club,
        see upcoming events, and become a part of a community that shares your passion.
      </p>

      <p className="mb-4 text-lg">
        You can view detailed information about each club, join clubs directly from the app, and your selections are saved using
        your browser's local storage — so you won't lose them even if you refresh or close the tab.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🛠️ Tech Stack Used</h2>
      <ul className="list-disc list-inside text-lg">
        <li><strong>Vite</strong> – For fast project scaffolding and development build</li>
        <li><strong>React</strong> – For building UI components using functional components and hooks</li>
        <li><strong>React Router</strong> – For navigating between different pages (SPA routing)</li>
        <li><strong>Tailwind CSS</strong> – For utility-first responsive styling</li>
        <li><strong>LocalStorage</strong> – For persisting user-selected clubs without a backend</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">👨‍💻 Why We Built This</h2>
      <p className="text-lg">
        This app was built as part of a student assignment to practice modern web development using React and Tailwind CSS.
        It focuses on interactivity, component-based architecture, and persistent state — all while maintaining a clean and responsive design.
      </p>
    </div>
  );
};

export default About;
