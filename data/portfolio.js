import {
  blog1,
  blog2,
  cart1,
  cart2,
  cart3,
  coffee1,
  coffee2,
  coffee3,
  coffee4,
  ecomerce1,
  ecomerce2,
  news1,
  quiztrivia,
  restoapp1,
  restoapp2,
  restoapp3,
  resume,
  resume1,
  resume2,
  resume3,
  resume4,
  resume5,
  skincare1,
  skincare2,
  skincare3,
  skincare4,
  webarchitect1,
  webarchitect2,
} from "../public/asset/portfolio/index";
const data = [
  {
    _id: 1,
    title: "Quiz Trivia",
    description:
      "Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscpit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    imageSrc: [{ id: 1, ref: quiztrivia }],
    demoUrl: "",
  },
  {
    _id: 2,
    title: "Web Ecommerce ",
    description:
      "Lorem ips dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cill dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. ",
    imageSrc: [
      { id: 1, ref: ecomerce1 },
      { id: 2, ref: ecomerce2 },
    ],
    demoUrl: "https://darling-kitsune-b43fa2.netlify.app/",
  },
  {
    _id: 3,
    title: "Resume Builder",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet,",
    imageSrc: [
      { id: 1, ref: resume },
      { id: 2, ref: resume2 },
      { id: 3, ref: resume3 },
      { id: 4, ref: resume4 },
      { id: 5, ref: resume5 },
    ],
    demoUrl: "https://dynamic-pegasus-7622e2.netlify.app/",
  },
  {
    _id: 4,
    title: "Web Company Profile & Portfolio",
    description:
      "Maecenas a tempor nisl. Sed convallis nulla ac mauris tincidunt, vel blandit dolor fringilla. Praesent velit velit, rutrum vel facilisis quis, blandit eu massa. Proin a libero viverra, dapibus magna at, pulvinar magna. Donec malesuada bibendum magna, ac blandit nulla tempor in. Nullam dapibus, quam et ullamcorper egestas, ipsum est dictum ligula, sit amet tincidunt velit velit et ligula. ",
    imageSrc: [
      { id: 1, ref: webarchitect1 },
      { id: 2, ref: webarchitect2 },
    ],
    demoUrl: "https://lappet69.github.io/webarchitect/",
  },
  {
    _id: 5,
    title: "Blog News",
    description:
      "Curabitur vel magna vel lacus dictum accumsan at vel eros. Aliquam erat volutpat. Donec euismod, odio id suscipit laoreet, sem odio tempor purus, vel fringilla diam velit vel velit. Sed vel velit vel lacus viverra condimentum non eget dui.",
    imageSrc: [{ id: 1, ref: news1 }],
    demoUrl: "",
  },
  {
    _id: 6,
    title: "Blog Gaming",
    description:
      "Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent bibendum euismod ligula, non vulputate leo placerat et. Integer aliquam sollicitudin ante, eget egestas velit tincidunt vel. Sed vel velit semper, commodo mi ut, fermentum mi.",
    imageSrc: [
      { id: 1, ref: blog1 },
      { id: 2, ref: blog2 },
    ],
    demoUrl: "",
  },
  {
    _id: 7,
    title: "Resto App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, risus eu congue malesuada, libero libero commodo libero, id congue magna sapien at tellus. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent bibendum euismod ligula, non vulputate leo placerat et.",
    imageSrc: [
      { id: 1, ref: restoapp1 },
      { id: 2, ref: restoapp2 },
      { id: 3, ref: restoapp3 },
    ],
    demoUrl: "https://spontaneous-sawine-99d664.netlify.app/",
  },
  {
    _id: 8,
    title: "Shopping Cart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, risus eu congue malesuada, libero libero commodo libero, id congue magna sapien at tellus. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent bibendum euismod ligula, non vulputate leo placerat et.",
    imageSrc: [
      { id: 1, ref: cart1 },
      { id: 2, ref: cart2 },
    ],
    demoUrl: "https://eclectic-chebakia-85ab6c.netlify.app/",
  },
  {
    _id: 9,
    title: "Web Coffee Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, risus eu congue malesuada, libero libero commodo libero, id congue magna sapien at tellus. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent bibendum euismod ligula, non vulputate leo placerat et.",
    imageSrc: [
      { id: 1, ref: coffee1 },
      { id: 2, ref: coffee2 },
      { id: 3, ref: coffee3 },
      { id: 4, ref: coffee4 },
    ],
    demoUrl: "",
  },
  {
    _id: 10,
    title: "Sevira Beauty",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, risus eu congue malesuada, libero libero commodo libero, id congue magna sapien at tellus. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent bibendum euismod ligula, non vulputate leo placerat et.",
    imageSrc: [
      { id: 1, ref: skincare1 },
      { id: 2, ref: skincare2 },
      { id: 3, ref: skincare3 },
      { id: 4, ref: skincare4 },
    ],
    demoUrl: "https://sevira-beauty.vercel.app/",
  },
];

export const portfolios = data.reverse();
