import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('@/components/Home.vue');
const About = () => import('@/components/About.vue');
const Skills = () => import('@/components/Skills.vue');
const Project = () => import('@/components/Project.vue');
const Contact = () => import('@/components/Contact.vue');

const routes =  [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/skills", name: "Skills", component: Skills },
  { path: "/project", name: "Project", component: Project },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  mode: 'hash',
  history: createWebHistory('/portfolio-vue-tailwind/'),
  routes
});

export default router;


// import { createRouter, createWebHistory } from "vue-router"
// import Home from '@/components/Home.vue'
// import About from '@/components/About.vue'
// import Skills from '@/components/Skills.vue'
// import Project from '@/components/Project.vue'
// import Contact from '@/components/Contact.vue'

// const routes =  [
//   { path: "/", name: "Home", component: Home },
//   { path: "/about", name: "About", component: About },
//   { path: "/skills", name: "Skills", component: Skills },
//   { path: "/project", name: "Project", component: Project },
//   { path: "/contact", name: "Constact", component: Contact },
// ];

// const router = createRouter({
//   mode: 'hash',
//   history: createWebHistory('/portfolio-vue-tailwind/'),
//   routes
// });

// export default router
