<template>
    <div class="w-full h-full sm:h-screen bg-yellow-400 mx-auto px-4 py-8 md:px-20 lg:flex justify-center items-center flex-col">
      <h2 class="text-2xl text-white text-center font-semibold mb-6 mt-10">My Skills</h2>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
        >
          <div
            class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <div class="flex justify-center mb-4">
              <i
                :class="skill.icon"
                class="text-4xl"
                :style="{ color: skill.hoverColor }"
              ></i>
            </div>
            <div class="text-center">
              <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
              <p class="text-gray-600">{{ skill.description }}</p>
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
        skills: [
          { icon: "fab fa-html5", name: "HTML", description: "HyperText Markup Language", hoverColor: "#E34F26" },
          { icon: "fab fa-css3-alt", name: "CSS", description: "Cascading Style Sheets", hoverColor: "#1572B6" },
          { icon: "fab fa-bootstrap", name: "Bootstrap", description: "Front-end framework", hoverColor: "#7952B3" },
          { icon: "fab fa-sass", name: "Sass", description: "CSS preprocessor", hoverColor: "#CC6699" },
          { icon: "fab fa-js", name: "JavaScript", description: "Programming language", hoverColor: "#F7DF1E" },
          { icon: "fab fa-vuejs", name: "Vue.js", description: "JavaScript framework", hoverColor: "#4FC08D" },
          { icon: "fab fa-php", name: "PHP", description: "Server-side scripting language", hoverColor: "#777BB4" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes directly or customize as needed */
  </style>