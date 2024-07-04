<template>
  <div
    class="min-w-screen w-full h-full xs:min-h-screen flex flex-col md:flex-row justify-center items-center py-10 px-10 md:px-0"
  >
    <!-- Image Column -->
    <div class="w-3/4 mt-10 sm:mt-0 rounded-lg justify-center items-center">
      <!-- Swiper component for image slides -->
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper w-[200px] h-[255px] xs:w-[350px] xs:h-[450px]"
      >
        <swiper-slide>
          <img
            src="@/assets/images/H254K00998.png"
            alt="My image"
            class="object-cover object-center"
          />
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
    <!-- <div class=" w-full h-[200px] md:basis-1/2">
        <img
          src="../assets/images/H254K00997.jpg"
          alt="images"
          class="w-full h-full md:py-40 p-10 "
        />
      </div> -->

    <!-- About Me Column -->
    <div class="w-full mx-10 mt-3">
      <h1 class="text-xl sm:text-3xl font-bold mb-2 text-center md:text-left">About Me</h1>
      <p class="text-xs sm:text-sm mb-4 text-justify indent-8">
        I'm a recent graduate with a strong passion for web development and design. My skills and
        design principles are well-honed, and I'm eager to apply them to real-world projects. I
        prioritize creating user-friendly websites and visually appealing, responsive interfaces.
        Collaboration is my strength, and I'm excited to work with experienced professionals to grow
        and contribute effectively. I'm ready to embrace new opportunities and look forward to
        connecting with you to discuss potential projects. Let's create something great together!
      </p>

      <!-- Tab Buttons -->
      <div class="w-full flex flex-col overflow-hidden bg-gray-100">
        <div
          class="flex w-full text-sm shadow-inner rounded-md gap-1 justify-center md:justify-start p-2"
        >
          <div v-for="{ label, value, icon } in data" :key="value" class="overflow-hidden">
            <!-- Tab buttons -->
            <button
              @click="selectTab(value)"
              :class="{
                'bg-yana-pink': selectedTab === value,
                'bg-gray-500': selectedTab !== value,
              }"
              class="px-2 py-2 text-white text-xs sm:text-sm rounded focus:outline-none focus:shadow-outline-blue active:bg-slate-700"
            >
              <font-awesome-icon :icon="['fas', icon]" class="" />
              {{ label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="w-full h-40 p-2 bg-gray-100 overflow-y-scroll">
        <!-- Dynamic content based on selected tab -->
        <div v-show="selectedTab === 'experiences'">
          <!-- Experiences content -->
          <ul class="px-2 rounded-md divide-y bg-gray-500 dark:divide-gray-700">
            <li v-for="(experience, index) in experience" :key="index" class="py-2 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  <img
                    :src="experience.image"
                    alt="Profile Picture"
                    class="w-9 h-9 rounded-full border p-[2px] border-[#ffffff]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-[#ffffff]">
                    {{ experience.position }}
                  </p>
                  <p class="text-xs sm:text-sm text-gray-500 truncate dark:text-gray-200">
                    {{ experience.company }}
                  </p>
                </div>
                <!-- <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  {{ experience.amount }}
                </div> -->
              </div>
            </li>
          </ul>
        </div>
        <!-- End of Experiences -->

        <!-- Education -->
        <div v-show="selectedTab === 'education'">
          <!-- Education content -->
          <ul class="px-2 rounded-md divide-y bg-gray-500 dark:divide-gray-700">
            <li v-for="(edu, index) in education" :key="index" class="py-2 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  <img
                    :src="edu.image"
                    alt="Profile Picture"
                    class="w-9 h-9 rounded-full border p-[2px] border-[#ffffff]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-[#ffffff]">
                    {{ edu.degree }}
                  </p>
                  <p class="text-xs sm:text-sm text-gray-500 truncate dark:text-gray-200">
                    {{ edu.university }}
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white"
                >
                  {{ edu.date }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- end of Education -->

        <!-- certifications -->
        <div v-show="selectedTab === 'certifications'">
          <!-- Certifications content -->
          <ul class="px-2 rounded-md divide-y bg-gray-500 dark:divide-gray-700">
            <li v-for="(cert, index) in certifications" :key="index" class="py-2 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  <img
                    :src="cert.image"
                    alt="Certificate Image"
                    class="w-9 h-9 rounded-full border p-[2px] border-[#ffffff]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-[#ffffff]">
                    {{ cert.title }}
                  </p>
                  <p class="text-xs sm:text-sm text-gray-500 truncate dark:text-gray-200">
                    {{ cert.issuer }}
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white"
                >
                  {{ cert.issued_by }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- end of Certifications -->
      </div>
      <!-- End of Tab Content -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default {
  components: {
    FontAwesomeIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  data() {
    return {
      selectedTab: "experiences",
      data: [
        {
          label: "Experiences",
          value: "experiences",
          icon: "briefcase",
        },
        {
          label: "Education",
          value: "education",
          icon: "graduation-cap",
        },
        {
          label: "Certifications",
          value: "certifications",
          icon: "certificate",
        },
      ],
      experience: [
        {
          position: "Information Technology Intern",
          company: "B.A Domingo Realty",
          amount: "$320",
          image: "@/assets/company/BADomingoRealty.jpg",
        },
        {
          position: "Bagger",
          company: "Super Shopping Market Inc.",
          amount: "$320",
          image: "./assets/company/SM-Logo.jpg",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          university: "Taguig City University",
          date: "2023",
          image: "./assets/company/TCU.jpg",
        },
        {
          degree: "ICT: Computer System Servicing",
          university: "Taguig National High School",
          date: "2019",
          image: "@/assets/company/tnhs.jpg",
        },
        {
          degree: "Computer Literacy Program: Microsoft Apps & Web-Design",
          university: "St. Therese School of Technology",
          date: "2018",
          image: "@/assets/company/SaintTherese.jpg",
        },
      ],
      certifications: [
        {
          title: "Bachelor of Science in Computer Science",
          issuer: "Taguig City University",
          issued_by: "2023",
          image: "@/assets/company/TCU.jpg",
        },
        {
          title: "Bachelor of Science in Computer Science",
          issuer: "Taguig City University",
          issued_by: "2023",
          image: "@/assets/company/TCU.jpg",
        },
        {
          title: "Bachelor of Science in Computer Science",
          issuer: "Taguig City University",
          issued_by: "2023",
          image: "@/assets/company/TCU.jpg",
        },
      ],
    };
  },
  created() {
    // Retrieve the selected tab from local storage
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab && this.isValidTab(storedTab)) {
      this.selectedTab = storedTab;
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      // Save the selected tab to local storage
      localStorage.setItem("selectedTab", tab);
    },
    isValidTab(tab) {
      // Check if the provided tab value is valid
      return this.data.some((item) => item.value === tab);
    },
  },
};
</script>

<style scoped>
/* ... your existing styles ... */
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}
.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}
.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}
.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}
.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}
.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}
.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}
.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}
.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}
.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
