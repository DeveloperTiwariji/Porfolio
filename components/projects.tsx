"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "DevTinder",
      category: "web",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A fully responsive web app that lets developers discover, filter, and connect with other devs, featuring profile swiping and request management.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "QuickCart",
      category: "web",
      image: "https://placehold.co/400x300?text=Shopping+Cart",
      description:
        "An e-commerce app with real-time cart updates, product filtering, and a sleek responsive layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio",
      category: "web",
      image: "https://placehold.co/200x200?text=User",
      description:
        "A personal portfolio website template for developers with smooth animations and project showcases.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "TaskForge",
      category: "web",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A productivity app for managing tasks with deadlines, filters, and a beautiful UI.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-2 h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {["all", "web", "app", "3d"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`mx-2 my-2 px-4 py-2 rounded-md ${
                activeFilter === filter
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              } transition-colors`}
            >
              {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="p-3 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="p-3 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
