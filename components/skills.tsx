export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },    {name: "Node.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Postman", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Git", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Java", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Java Core", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Docker", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Jenkins", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <div className="mt-2 h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                </div>
                <span className="text-purple-600 dark:text-purple-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.slice(0, 6).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mb-3 p-3">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}