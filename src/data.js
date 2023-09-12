import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: 
        "Indulge in a gastronomic delight at our restaurant website, where savory flavors meet exquisite ambiance.",
        image: p1,
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "Book your dream experiences effortlessly and embark on unforgettable adventures through our intuitive booking website",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: 
        "Experience seamless financial management and secure transactions on our trusted banking website.",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "Elevate your fitness style with our performance-driven athletic apparel for gym enthusiasts.",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Unleash your full potential at our cutting-edge gym website, where fitness goals become reality.",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name: "Discover endless possibilities and shop your desires on our premium e-commerce website.",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 30,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 15,
        description: "COMMUNITY<br />POSTS",
    },
];
