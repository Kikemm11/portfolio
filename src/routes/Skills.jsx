import Navbar from '../components/Navbar';
import linuxLogo from '../assets/linux-logo.png';
import bashLogo from '../assets/bash-logo.png';
import pythonLogo from '../assets/python-logo.png';
import cppLogo from '../assets/cpp-logo.png';
import jsLogo from '../assets/js-logo.png';
import dartLogo from '../assets/dart-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import postgresLogo from '../assets/postgres-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';
import sqliteLogo from '../assets/sqlite-logo.png';
import flaskLogo from '../assets/flask-logo.png';
import djangoLogo from '../assets/django-logo.png';
import trytonLogo from '../assets/tryton-logo.png';
import odooLogo from '../assets/odoo-logo.png';
import reactLogo from '../assets/react-logo.png';
import flutterLogo from '../assets/flutter-logo.png';
import dockerLogo from '../assets/docker-logo.png';
import gitLogo from '../assets/git-logo.png';


function Skills() {
  const skills = [
    { name: 'Linux', logo: linuxLogo },
    { name: 'Bash', logo: bashLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Dart', logo: dartLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Postgres', logo: postgresLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'SQLite', logo: sqliteLogo },
    { name: 'Flask', logo: flaskLogo },
    { name: 'Django', logo: djangoLogo },
    { name: 'Tryton', logo: trytonLogo },
    { name: 'Odoo', logo: odooLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Flutter', logo: flutterLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'Git', logo: gitLogo },
  ];

  return (
    <div className="max-w-9xl p-2 text-center  min-h-screen">
      <Navbar />

      {/* Title */}
      <h1 className="text-6xl font-poppins text-white mt-16 mb-8">
        Skill Set
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-white/80 hover:bg-gray-600 rounded-xl shadow-lg p-6 transition-colors duration-300"
          >
            {/* Logo Image */}
            <div className="w-16 h-16 mr-4">
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
            </div>
            {/* Skill Name */}
            <p className="text-2xl font-medium text-gray-800 ml-40">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
