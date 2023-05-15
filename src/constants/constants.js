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
  starbucks,
  ilorine,
  lecturehub,
  threejs,
  firebase,
  materialUI,
  skytect,
  airbnb,
  fb,
  cv,
  ilorinMicrofinance,
  naco,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "MateriaUI",
    icon: materialUI,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Naco Medicals",
    icon: starbucks,
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
    title: "Web Developer",
    company_name: "Ilorine Microfinance Bank",
    icon: ilorine,
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
    title: "Founder and Developer",
    company_name: "SkyTech",
    icon: skytect,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack MERN Developer",
    company_name: "Lecture Hub",
    icon: lecturehub,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Responsible for backend development and creating RESTFUL API using Nodejs",
      "Team lead",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm very SATISFIED with your work, other management staff express their satisfaction as well.",
    name: "Ibrahim Anifowoshe",
    designation: "Manager",
    company: "Ilorin Microfinance bank",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Miracle does.",
    name: "Engineer Oliver",
    designation: "CEO",
    company: "Naco Medicals",
    image: "",
  },
  {
    testimonial:
      "You've done really well in helping us SCALE our business to the next level. You are a BLESSING to us. Thank you so so much.",
    name: "Christopher Prince",
    designation: "CEO",
    company: "Prince Fabrication",
    image: "",
  },
];

const projects = [
  {
    name: "Airbnb clone",
    description: "Made an airbnb clone using, Nextjs, tailwindcss, heroicons",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "HeroIcons",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/",
    website_link: "https://airbnb-nine-self.vercel.app/",
  },
  {
    name: "Facebook clone",
    description:
      " Made a facebook clone using reactjs, tailwindcss, heroicons, firebase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: fb,
    source_code_link: "https://github.com/",
    website_link: "https://myfacebook-clone-1.vercel.app/",
  },
  {
    name: "My Resume website",
    description:
      "Designed and built a threejs web based application, using reactjs, tailwindcss, threejs",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: cv,
    source_code_link: "https://github.com/Alozie-Miracle/cv",
    website_link: "https://cv-tau-gules.vercel.app/",
  },
  {
    name: "Ilorin Microfinance Bank",
    description:
      "Designed and developed a landing page for a microfinance bank",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ilorinMicrofinance,
    source_code_link:
      "https://github.com/Alozie-Miracle/ilorinmicrofinancebanklimited",
    website_link: "https://ilorinmicrofinancebanklimited.netlify.app/",
  },
  {
    name: "Naco Medicals",
    description:
      "Designed and developed a platform for seliing medical equiptments.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: naco,
    source_code_link: "https://github.com/Alozie-Miracle/nacoMedicals",
    website_link: "https://alozie-miracle.github.io/nacoMedicals/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
