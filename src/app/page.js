import { Mail, Phone, Database, Code2, Briefcase } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative scroll-smooth">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_35%)]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          DP.
        </h1>

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition duration-300"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center min-h-screen">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full mb-8 backdrop-blur-lg shadow-lg animate-pulse">

            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>

            AVAILABLE FOR HIRING

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tight">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Dhrupa
            </span>

            <br />

            Patel

          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
            Full Stack & Backend Developer
          </h2>

          <p className="text-lg text-gray-400 leading-9 max-w-2xl mb-10">
            MCA student and Full Stack Developer Intern with experience in
            Node.js, Express.js, PostgreSQL, React.js, and Next.js.
            Passionate about building scalable backend systems and modern web applications.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://github.com/dhrupa30"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              🚀 View GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dhrupa-patel-a13435358/"
              target="_blank"
              className="border border-white/20 bg-white/5 backdrop-blur-lg px-7 py-4 rounded-2xl font-semibold hover:border-cyan-400 hover:scale-105 transition duration-300"
            >
              💼 Connect LinkedIn
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-[2px] shadow-[0_0_100px_rgba(59,130,246,0.6)] animate-pulse">

            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">

              <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {"</>"}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-8 py-24"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-2 transition duration-300">

          <h2 className="text-5xl font-bold mb-10 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-10">
            During my internship at SeaNeB Technologies Pvt. Ltd.,
            I worked on a live NGO Management Platform where multiple NGOs
            can register and manage their activities online.
            I developed REST APIs, handled PostgreSQL database operations,
            authentication systems, and collaborated in an Agile Scrum environment.
          </p>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 max-w-7xl mx-auto px-8 py-24"
      >

        <h2 className="text-5xl font-bold text-center mb-20 text-cyan-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Frontend
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Backend
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              Node.js, Express.js, PostgreSQL, REST APIs
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Tools
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              Git, GitHub, MongoDB, MySQL, Postman
            </p>

          </div>

        </div>

      </section>

      {/* Projects */}
      {/* Projects */}
<section
  id="projects"
  className="relative z-10 max-w-7xl mx-auto px-8 py-24"
>

  <h2 className="text-5xl font-bold text-center mb-20 text-cyan-400">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* NGO */}
    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-6">
        NGO Management Platform
      </h3>

      <p className="text-gray-300 leading-9 text-lg">
        Developed backend APIs using Node.js, Express.js, and PostgreSQL
        for NGO registration, authentication, campaign management,
        and database operations.
      </p>

    </div>

    {/* Blog */}
    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-6">
        Blog Website
      </h3>

      <p className="text-gray-300 leading-9 text-lg">
        Full-stack MERN blog application with JWT authentication,
        blog management, secure login, and CRUD operations.
      </p>

    </div>

    {/* Grihalakshmi */}
    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-6">
        Grihalakshmi-Mart
      </h3>

      <p className="text-gray-300 leading-9 text-lg">
        MERN Stack e-commerce platform for women-led businesses with
        authentication, cart management, order processing,
        and product listings.
      </p>

    </div>

    {/* Book Manager */}
    <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/20 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-3 hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-6">
        Advanced Book Manager
      </h3>

      <p className="text-gray-300 leading-9 text-lg">
        Python-based desktop application with advanced search,
        metadata handling, tagging system,
        and reading status tracking.
      </p>

    </div>

  </div>

</section>

      {/* Experience */}
      <section
        id="experience"
        className="relative z-10 max-w-6xl mx-auto px-8 py-24"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg hover:-translate-y-2 transition duration-300">

          <h2 className="text-5xl font-bold mb-10 text-cyan-400">
            Experience
          </h2>

          <h3 className="text-3xl font-bold mb-4">
            Full Stack Developer Intern
          </h3>

          <p className="text-cyan-300 text-xl mb-8">
            SeaNeB Technologies Pvt. Ltd. | 4 Months Internship
          </p>

          <p className="text-gray-300 text-lg leading-10">
            Worked on backend development using Node.js, Express.js,
            and PostgreSQL in an Agile Scrum environment.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 max-w-6xl mx-auto px-8 py-24"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-lg text-center hover:-translate-y-2 transition duration-300">

          <h2 className="text-5xl font-bold mb-10 text-cyan-400">
            Contact
          </h2>

          <div className="space-y-6 text-xl text-gray-300">

            <p>
              📧 dhrupapatel885@gmail.com
            </p>

            <p>
              📱 +91 7862966986
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}