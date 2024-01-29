<template>
  <!-- Home section -->
  <div id="home" class="w-full ">
    <div class="min-h-screen flex flex-col items-center overflow-visible md:flex-row">
      <!-- First Column (Image) -->
      <div class="container mt-5 xs:mt-10 md:mb-0">
        <transition
          enter-active-class="animate__animated"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <img
            v-if="showImage"
            src="../assets/images/hero-light-bg.png"
            alt="Hero Image"
            class="w-full h-full object-cover object-center floating-animation"
          />
        </transition>
      </div>
      <!-- Second Column (Text) -->
      <div class="container text-black  md:flex-row text-center md:text-left">
        <h1 class="text-xl xs:text-3xl font-semibold xs:mb-1">Hi, It's me!</h1>
        <h1 class="text-2xl xs:text-4xl font-bold xs:mb-1">John Christian Triana</h1>
        <h1 class="text-xl xs:text-3xl font-semibold mb-2">
          And I'm a <span :style="{ color: '#ff004f' }">{{ currentRole }}</span
          ><span id="cursor">|</span>
        </h1>
        <p class="px-5 text-sm xs:px-0 xs:text-lg md:pr-10 lg:text-md mb-4 xs:mb-1">
          Creating unforgettable digital experiences through innovative web development and
          captivating design. Let's bring your vision to life.
        </p>
        <ul class="flex justify-center md:justify-start space-x-4 mb-5">
          <li>
            <a href="#" class="text-blue-500 hover:text-blue-600 text-3xl" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li>
            <a href="#" class="text-blue-500 hover:text-blue-600 text-3xl" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li>
            <a href="#" class="text-pink-500 hover:text-pink-600 text-3xl" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li>
            <a href="#" class="text-blue-500 hover:text-blue-600 text-3xl" target="_blank">
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </a>
          </li>
        </ul>
        <!-- Resume button -->
        <a
          :href="resumePath"
          target="_blank"
          download="JohnChristianTriana_Resume.pdf"
          class="bg-yana-pink hover:bg-yana-pink-dark text-white px-6 py-3 rounded text-sm transition duration-300"
        >
          Download Resume
        </a>
      </div>
     
    </div>
  </div>

  <!-- About Section -->
  <div id="about">
    <About />
  </div>
  <!-- Skills Section -->
  <div id="skills">
    <Skills />
  </div>
  <!-- Project Section -->
  <div id="project">
    <Project />
  </div>

  <!-- Contact Section -->
  <div id="contact">
    <Contact />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";

export default {
  data() {
    return {
      roles: ["UI/UX Designer", "Web Developer", "Graphic Designer", "Frontend Developer", "Gamer"],
      currentRole: "",
      roleIndex: 0,
      typingSpeed: 100, // Adjust the typing speed as needed
      currentPage: 1,
      showImage: true,
      resumePath: "../src/assets/resume/JCTrianaResume.pdf", // Replace with the actual path to your resume file
    };
  },
  components: {
    FontAwesomeIcon,
    About,
    Skills,
    Project,
    Contact,
  },
  mounted() {
    this.typeRole();
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
    beforeEnter(el) {
      el.style.transform = "translateY(100%)"; // Initial position
    },
    enter(el, done) {
      // Use a CSS animation for the floating effect
      el.classList.add("floating-animation");

      // Reset the animation after it completes
      el.addEventListener("animationend", () => {
        el.classList.remove("floating-animation");
        done();
      });
    },
    typeRole() {
      const roleInterval = setInterval(() => {
        this.currentRole += this.roles[this.roleIndex][this.currentRole.length];
        if (this.currentRole === this.roles[this.roleIndex]) {
          clearInterval(roleInterval);
          setTimeout(() => {
            this.eraseRole();
          }, 1000); // Wait for 1 second before erasing
        }
      }, this.typingSpeed);
    },
    eraseRole() {
      const eraseInterval = setInterval(() => {
        this.currentRole = this.currentRole.slice(0, -1);
        if (this.currentRole === "") {
          clearInterval(eraseInterval);
          // Move to the next role
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
          setTimeout(() => {
            this.typeRole();
          }, 500); // Wait for 0.5 seconds before typing the next role
        }
      }, this.typingSpeed / 2); // Erase twice as fast as typing
    },
  },
};
</script>

<style scoped>

/* .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); Adjust the opacity as needed 
}*/

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.floating-animation {
  animation: floating 2s infinite; /* Adjust duration as needed */
}
</style>