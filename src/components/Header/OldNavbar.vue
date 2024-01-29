<template>
  <nav class="bg-white fixed w-full z-20 top-0 shadow-md dark:border-gray-600">
    <div class="max-w-screen-xl flex items-center justify-between p-4 lg:mx-12 md:mx-16">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/images/logo.png" class="h-8" alt="Logo" />
      </router-link>

      <!-- Contact Button -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white bg-yana-pink hover:bg-yana-pink-dark font-small rounded text-sm px-6 py-2 text-center"
          :class="{
            'text-gray-900': $route.path === '/contact',
            'text-gray-900': $route.path !== '/contact',
          }"
          @click="goToContactPage"
        >
          Contact Me
        </button>
        

        <!-- Burger Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
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
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuVisible"
        class="md:hidden fixed top-20 p-1 left-0 w-full bg-white z-50 shadow-lg"
      >
        <!-- Mobile menu content -->
        <ul class="flex flex-col items-center p-4">
          <router-link
            to="/"
            class="py-2 px-3 block rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yana-pink md:p-0 md:dark:hover:text-yana-pink dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            :class="{
              'text-yana-pink': $route.path === '/',
              'text-gray-900': $route.path !== '/',
            }"
            aria-current="page"
            @click="closeMobileMenu"
          >
            Home
          </router-link>

          <router-link
            to="/about"
            class="py-2 px-3 block rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            :class="{
              'text-yana-pink': $route.path === '/about',
              'text-gray-900': $route.path !== '/about',
            }"
            aria-current="page"
            @click="closeMobileMenu"
          >
            About
          </router-link>
          <router-link
            to="/skills"
            class="py-2 px-3 block rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            :class="{
              'text-yana-pink': $route.path === '/skills',
              'text-gray-900': $route.path !== '/skills',
            }"
            @click="closeMobileMenu"
          >
            Skills
          </router-link>
          <!-- class="py-2 px-3 block text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  -->
          <router-link
            to="/project"
            class="py-2 px-3 block rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            :class="{
              'text-yana-pink': $route.path === '/project',
              'text-gray-900': $route.path !== '/project',
            }"
            @click="closeMobileMenu"
          >
            Project
          </router-link>
        </ul>
      </div>

      <!-- Large Device Tablet and Desktop  -->
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border-b md:border-b-0 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white"
        >
          <div
            href="#home"
            class="py-2 px-3 block text-gray-900 hover:text-yana-pink rounded md:p-0"
            :class="{
              'text-yana-pink': isLinkActive('home'),
              'text-gray-900': !isLinkActive('home'),
            }"
            @click="scrollToSection('home')"
          >
            Home
          </div>

          <div
            href="#about"
            class="py-2 px-3 block text-gray-900 hover:text-yana-pink rounded md:p-0"
            :class="{
              'text-yana-pink': isLinkActive('about'),
              'text-gray-900': !isLinkActive('about'),
            }"
            @click="scrollToSection('about')"
          >
            About
          </div>

          <div
            href="#skills"
            class="py-2 px-3 block text-gray-900 hover:text-yana-pink rounded md:p-0"
            :class="{
              'text-yana-pink': isLinkActive('skills'),
              'text-gray-900': !isLinkActive('skills'),
            }"
            @click="scrollToSection('skills')"
          >
            Skills
            <!-- :class="{
              'text-yana-pink': $route.path === '/skills',
              'text-gray-900': $route.path !== '/skills',
            }" -->
          </div>
          <div
            href="#project"
            class="py-2 px-3 block text-gray-900 hover:text-yana-pink rounded md:p-0"
            :class="{
              'text-yana-pink': isLinkActive('project'),
              'text-gray-900': !isLinkActive('project'),
            }"
            @click="scrollToSection('project')"
          >
            Project
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
    };
  },
  methods: {
    goToContactPage() {
      // Assuming your router instance is imported as `router`
      this.$router.push("/contact");
    },

    //section-ID
    isLinkActive(sectionId) {
      return this.$route.hash === "#" + sectionId;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
      this.closeMobileMenu();
    },
    //mobile-menu
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
    //close-mobile-menu
    closeMobileMenu() {
      this.mobileMenuVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Add your additional styles here */
</style>
