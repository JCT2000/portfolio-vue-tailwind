<!-- Navbar.vue -->
<template>
  <nav
    :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }"
    class="fixed w-screen xs:w-full z-20 top-0 dark:border-gray-800"
  >
    <div class="w-screen flex items-center justify-between sm:justify-around  p-2 xs:p-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/images/logo.png" class="h-8" alt="Logo" />
      </router-link>

      <!-- Desktop Menu Navbar -->
      <div class="hidden w-screen sm:flex sm:w-auto" id="navbar-sticky">
        <ul
          class="flex flex-col p-8 md:p-0 font-medium rounded-lg sm:p-0 sm:space-x-2 md:mx-auto md:space-x-8 rtl:space-x-reverse sm:flex-row md:mt-0"
        >
          <!-- Navigation Links -->
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="`#${link.id}`"
            class="navbar-link py-2 px-3 block hover:text-yana-pink rounded md:p-0"
            :class="{ 'text-yana-pink': $route.hash === `#${link.id}` }"
            exact
            @click="scrollToSection($event, link.id)"
          >
            {{ link.text }}
          </router-link>
        </ul>
      </div>

      <div class="flex">
        <!-- Mobile Menu -->
        <div
          v-if="mobileMenuVisible"
          :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }"
          class="fixed sm:hidden top-16 p-1 left-0 w-screen bg-white z-50 shadow-lg border-solid"
        >
          <!-- Mobile menu content -->
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="`#${link.id}`"
            class="transition-color duration-300 ease-in-out py-2 px-3 block text-center rounded-md hover:text-white hover:bg-yana-pink md:hover:bg-transparent md:p-0"
            :class="{ 'text-yana-pink': $route.hash === `#${link.id}` }"
            exact
            @click="scrollToSection($event, link.id)"
          >
            {{ link.text }}
          </router-link>
        </div>
        <!-- Burger Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          :aria-expanded="mobileMenuVisible.toString()"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Burger Icon -->
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <!-- Light/Dark Mode Toggle Button -->
        <button
          @click="toggleMode"
          type="button"
          class="inline-flex items-center p-2 ml-4 text-sm rounded-full border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Toggle light/dark mode</span>
          <span
            v-if="isDarkMode"
            class="w-5 h-5 flex items-center justify-center text-gray-900 dark:text-white"
            role="img"
            aria-label="Sun"
          >
            ☀️
          </span>
          <span
            v-else
            class="w-5 h-5 flex items-center justify-center text-gray-900 dark:text-white"
            role="img"
            aria-label="Moon"
          >
            🌙
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
/**
 * Navbar Component
 * A Vue.js component representing the navigation bar with responsive design,
 * dark/light mode toggle, and smooth scrolling to different sections.
 */
export default {
  data() {
    return {
      // Property to manage dark mode
      isDarkMode: false,
      // Flag to control the visibility of the mobile menu
      mobileMenuVisible: false,
      // Navigation links with section IDs and display text
      links: [
        { id: "home", text: "Home" },
        { id: "about", text: "About" },
        { id: "skills", text: "Skills" },
        { id: "project", text: "Project" },
        { id: "contact", text: "Contact" },
      ],
    };
  },
  methods: {
    /**
     * Scroll to the specified section smoothly.
     * @param {Event} event - The click event.
     * @param {string} sectionId - The ID of the target section.
     */
    scrollToSection(event, sectionId) {
      event.preventDefault();
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
        this.closeMobileMenu();
      }
    },
    //  Toggle the visibility of the mobile menu.
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
    // Close the mobile menu
    closeMobileMenu() {
      this.mobileMenuVisible = false;
    },
    // Toggle between dark and light modes.
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
.dark-mode {
  /* Dark mode styles */
  background-color: #1a1a1a;
  color: #ffffff;
}

/* Light mode styles */
.light-mode {
  background-color: rgb(249, 248, 248);
  color: #1a1a1a;
}
</style>