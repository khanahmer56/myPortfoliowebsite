import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Material UI",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEUAAAAAgP8AgP8AgP8Af/8Af/8Af/8Agf8Af/8AgP8Af/8AgP8Af/8Afv8AgP8Af/8AgP8AgP8AgP8Afv8Af/8AgP8AgP8Afv8AgP/JOj6vAAAAGXRSTlMAECBA3/+fb+8wf2C/oL+vcICgsM9Qr5Cf69McvgAAAMhJREFUeAHN0UUSwzAQRNEWdMyM9z9pakpjhrV/YtQz4xsZe97hjgOevwOJYiYynMZx2EHSZ1hyOUk5RUFyARuxMhxAeQTkz8pZuQflAZBVGFZQxzVOQFOgKWhahsra3wEPWCHeAe0DALKyMdgD545AUyBPHN+CTkFP8gaYggr8HdA3dQKDZ6/fwVOKGyxAy4YgKXG0OIPFUV+FFPEBTNtHvwdMAVvoez8BF3b7OQ7LAcf0e2hxY3CT9QzNBg9lQkqHl5oyw7f6A2kFCLbOU4MiAAAAAElFTkSuQmCC",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Simmi Foundation",
    icon: "https://simmifoundation.org/images/simmilogo.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Fyntune",
    icon: "https://www.fyntune.com/images/logo/logo.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dashboard",
    description:
      "The Dashboard App project is a testament to my proficiency in developing data-driven web applications that provide users with a central hub to monitor and manage various aspects of their work, projects, or data. This project showcases my ability to create dynamic and visually appealing dashboards that offer insights and streamline decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nivo charts",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://cdn.pixabay.com/photo/2021/05/12/19/57/graph-6249047__480.png",
    source_code_link: "https://github.com",
    view: "https://dashboardbyahmer.netlify.app/",
  },
  {
    name: "Trello Clone",
    description:
      "The Trello Clone project is a showcase of my web development skills, offering a practical demonstration of my ability to create dynamic and interactive applications. Inspired by the popular project management tool Trello, this clone provides users with a digital platform to manage tasks, projects, and workflows in an organized and visual manner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dnd drag and drop",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appWrite",
        color: "pink-text-gradient",
      },
    ],
    image: "https://alexnicholas.dev/images/trello.webp",
    source_code_link: "https://github.com/khanahmer56/trello_clone",
    view: "https://trelloo-clone.netlify.app/",
  },
  {
    name: "Thread Clone",
    description:
      "The Thread App Clone is a project developed as part of my portfolio to showcase my web development skills. The concept behind this app is to mimic the functionality of a basic online discussion platform where users can create and participate in threads on various topics. The app provides a user-friendly interface for creating, viewing, and interacting with threads, giving visitors a glimpse into my abilities as a web developer.",
    tags: [
      {
        name: "nextjs 13",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/0ab983b85205d6413348066024d59b2b.jpg",
    source_code_link: "https://github.com/khanahmer56/thradsApp",
    view: "https://thrads-app.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
