import {
  Mail,
  Phone,
  Database,
  Code2,
  Briefcase,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-400 font-semibold mb-4 tracking-widest uppercase">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-400">Dhrupa Patel</span>
          </h1>

          <p className="text-lg text-gray-300 leading-8 mb-8 max-w-2xl">
            MCA student and Full Stack Developer Intern with experience in
            Node.js, Express.js, PostgreSQL, React.js, and Next.js.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://github.com/dhrupa30"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-lg"
            >
              <span>🐙</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dhrupa-patel-a13435358/"
              target="_blank"
              className="border border-gray-500 hover:border-blue-400 transition px-6 py-3 rounded-2xl flex items-center gap-2"
            >
              <span>💼</span>
              LinkedIn
            </a>

          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-full shadow-2xl">

            <div className="bg-gray-900 rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <Code2 size={120} className="text-blue-400" />
            </div>

          </div>
        </div>

      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            I am passionate about backend and full stack development.
            During my internship at SeaNeB Technologies Pvt. Ltd.,
            I worked on a live NGO Management Platform where multiple NGOs
            can register and manage their activities online.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">

            <Code2 className="text-blue-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Frontend
            </h3>

            <p className="text-gray-300 leading-8">
              React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">

            <Database className="text-blue-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Backend
            </h3>

            <p className="text-gray-300 leading-8">
              Node.js, Express.js, REST APIs, PostgreSQL
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">

            <Briefcase className="text-blue-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Tools
            </h3>

            <p className="text-gray-300 leading-8">
              Git, GitHub, MongoDB, MySQL, Postman
            </p>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/10 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold mb-5">
              NGO Management Platform
            </h3>

            <p className="text-gray-300 leading-8">
              Developed backend APIs using Node.js, Express.js, and PostgreSQL
              for NGO registration and management.
            </p>

          </div>

          <div className="bg-white/10 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold mb-5">
              Blog Website
            </h3>

            <p className="text-gray-300 leading-8">
              Full-stack MERN blog application with authentication and blog management.
            </p>

          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Experience
          </h2>

          <h3 className="text-3xl font-semibold mb-3">
            Full Stack Developer Intern
          </h3>

          <p className="text-blue-300 mb-5 text-lg">
            SeaNeB Technologies Pvt. Ltd. | 4 Months Internship
          </p>

          <p className="text-gray-300 leading-9 text-lg">
            Worked on backend development using Node.js, Express.js,
            and PostgreSQL in an Agile Scrum environment.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 border-t border-white/10">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <div className="bg-white/10 px-8 py-5 rounded-2xl flex items-center gap-3 justify-center">
              <Mail className="text-blue-400" />
              <span>dhrupapatel885@gmail.com</span>
            </div>

            <div className="bg-white/10 px-8 py-5 rounded-2xl flex items-center gap-3 justify-center">
              <Phone className="text-blue-400" />
              <span>+91 7862966986</span>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}