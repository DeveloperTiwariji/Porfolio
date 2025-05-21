export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-purple-500">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQGtGiTxetZBhw/profile-displayphoto-shrink_400_400/B56ZZjh4VfGQAg-/0/1745426549415?e=1750896000&v=beta&t=ClqjaxUlA3FOq_xsEQYafFGNbmd3IzsSpEwS1qeDFVI" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-600 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Developer & DevOps Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Satyam Tiwari, a passionate DevOps Engineer and frontend developer and I Love to 
              creating beautiful, functional, and user-centered digital experiences and also making a automation tools for DevOps.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in building responsive DevOps and web applications using modern technologies like React, Tailwind CSS, Mongoose, Node JS, Express, MongoDB, PostMan
              and JavaScript. I'm dedicated to writing clean, efficient code and creating intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  {/* <span className="text-purple-600 dark:text-purple-300 font-bold">5+</span> */}
                </div>
                {/* <span className="ml-2 text-gray-700 dark:text-gray-300">Years Experience</span> */}
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-300 font-bold">3+</span>
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Projects Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  {/* <span className="text-purple-600 dark:text-purple-300 font-bold">3+</span> */}
                </div>
                {/* <span className="ml-2 text-gray-700 dark:text-gray-300">Happy Clients</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
