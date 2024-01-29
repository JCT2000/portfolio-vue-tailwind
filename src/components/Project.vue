<template>
    <div
      class="w-full h-full xs:min-h-screen flex items-center justify-center py-4 "
    >
      <div class="container mt-20 sm:mt-10  px-0  lg:px-10 ">
        <h1 class="text-2xl font-bold mb-2 text-center md:text-left">My Projects</h1>
        <p class="text-md text-gray-600 mb-4 text-center md:text-left">Check out some of the projects I've worked on. Click on a project to learn more.</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-8 px-12 sm:px-0">
          <div
            v-for="project in projects"
            :key="project.id"
            class="max-w-md bg-gray-200 p-4 shadow-md md:shadow-lg overflow-hidden rounded-md transition-transform hover:scale-105"
          >
            <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover object-top" />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
              <p class="text-gray-600">{{ project.description }}</p>
  
              <div class="flex mt-4">
                <div v-for="tool in project.tools" :key="tool" class="mr-2 flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <p class="text-xs text-gray-600">{{ tool }}</p>
                </div>
              </div>
  
              <button class="btn mt-4 w-full py-1 rounded bg-yana-pink hover:bg-yana-pink-dark text-white">View Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, awhgaga consectetur adipiscing elit.",
            image: "./src/assets/images/H254K00994.jpg",
            tools: ["Vue.js", "Tailwind", "JavaScript"],
          },
          {
            id: 2,
            title: "Project 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "./src/assets/images/H254K00994.jpg",
            tools: ["React", "Sass", "Node.js"],
          },
          {
            id: 3,
            title: "Project 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: "./src/assets/images/H254K00994.jpg",
            tools: ["Angular", "Bootstrap", "Java"],
          },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>