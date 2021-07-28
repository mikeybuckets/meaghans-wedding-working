import ix from "./images/dsp-ssp.png";
import gn from "./images/gn3.png";
import ecoblock from "./images/ecoblock.gif";
import shell from "./images/shell.jpg";
import dashboard from "./images/dashboard.jpg";
const experience = [
  {
    id: 1,
    img: ix,
    title: "Proposal",
    status: "See More"
  },
  {
    id: 1,
    img: ix,
    title: "Proposal",
    status: "See More"
  },
  {
    id: 1,
    img: ix,
    title: "Proposal",
    status: "See More"
  },
  {
    id: 2,
    img: gn,
    title: "Dress Shopping",
    status: "See More"
  }
  // {
  //   id: 3,
  //   img: ecoblock,
  //   title: "EcoBlock",
  //   role: "Hackathon Project",
  //   languages: "Flutter / Dart / Google Cloud Vision API / Firebase",
  //   status: "Completed!"
  // },
  // {
  //   id: 4,
  //   img: shell,
  //   title: "Mock Shell Application",
  //   role: "Group Project",
  //   languages: "Java / OOP / TDD",
  //   status: "Completed!"
  // },
  // {
  //   id: 5,
  //   title: "Personal Site",
  //   role: "",
  //   languages: "React",
  //   status: "In Progress"
  // }
];

const details = [
  {
    id: 1,
    img: dashboard,
    title: "Index Exchange",
    date: "Jan 2021 - Apr 2021",
    role: "Software Engineer Intern",
    link: 1,
    btns: ["About IX"],
    description:
      "I worked in an Agile Devops Team. My main project involved deploying a UI to automate and manage hundreds of weekly deployments for 250+ engineering employees. As Index Exchange manages its own servers, the goal of this tool was to provide a tool that was fully integrated with existing source control and pipelines. As such, it would provide an all-encompassing overview of all the jobs and deployments that were done at what time, what Ansible jobs failed and what succeeded, and who was responsible for what. This involved writing CI/CD pipelines for syncing data, writing Ansible playbooks and helm charts, creating new Docker images, and managing deployment to Kubernetes clusters.",
    learned:
      "This was my first co-op experience. As such, not only did I get an introduction to the completely different world of Devops, I also learned about common software tools such as Jira and Confluence."
  },
  {
    id: 2,
    img: gn,
    title: "Giants Network Inc.",
    date: "Sept 2020 - Present",
    role: "Software Developer",
    links: 1,
    btns: ["About Giants Network"],
    description:
      "I worked solo as a Software Developer to design a responsive website. It is used as the primary platform to connect with clients and attract potential investors.",
    learned:
      "I learned to wear many hats because it was a startup. This meant not only making programming decisions as a developer, but making UI/UX decisions, providing demos, etc."
  },
  {
    id: 3,
    img: ecoblock,
    title: "EcoBlock",
    date: "Mar 2021",
    role: "Hackathon Project",
    links: 1,
    btns: ["DevPost", "Github"]
    // learned:
    // "I learned to wear many hats because it was a startup. This meant not only making programming decisions as a developer, but making UI/UX decisions, providing demos, etc."
  },
  {
    id: 4,
    img: shell,
    title: "Mock Shell Application",
    date: "Jun 2020 - Jul 2020",
    role: "Group Project",
    links: 0
    // description: "Something cool that I did!",
    // languages: "Java / OOP / TDD",
    // status: "Completed!"
  },
  {
    id: 5,
    title: "Personal Site",
    role: "Apr 2021",
    links: 1,
    btns: ["Home"]
    // description: "Something cool that I did!",
    // languages: "React",
    // status: "In Progress"
  }
];

export { experience, details };
