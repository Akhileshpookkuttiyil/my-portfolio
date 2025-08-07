// data/projects.js
import foodiemania from "../../../assets/images/foodiemania.png";
import instabasket from "../../../assets/images/instabasket.png";
import purefarmfoods from "../../../assets/images/purefarmfoods.png";

export const projectData = [
  {
    id: 1,
    title: "FoodieMania",
    description:
      "Scalable full-stack food delivery platform supporting multi-role access (User, Seller, Admin), real-time cart sync, secure JWT auth, and integrated Stripe/COD payments. Designed for 1000+ concurrent users with mobile responsiveness and lazy-loaded resources.",
    image: foodiemania,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "Tailwind CSS",
      "Multer",
      "Cloudinary",
      "Axios",
      "React Router",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://food-app-one-rho.vercel.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/FoodApp",
    details: {
      role: "Fullstack Developer",
      features: [
        "Multi-role Authentication (User, Seller, Admin)",
        "Real-time Cart Sync Across Devices",
        "Stripe & COD Checkout Flows",
        "Advanced Search & Filtering",
        "Admin Analytics Dashboard",
      ],
      challenges:
        "Secure session management, sync across tabs without WebSockets, performance optimization for multi-role views.",
      apis: ["Stripe", "Cloudinary", "MongoDB Atlas", "Google Geolocation API"],
    },
  },
  {
    id: 2,
    title: "InstaBasket",
    description:
      "Responsive grocery e-commerce app with live inventory, delivery slot booking, order tracking, and real-time stock updates. Built for 1000+ SKUs with category-based filtering and modular backend controllers for scalable retail environments.",
    image: instabasket,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Tailwind CSS",
      "Multer",
      "Cloudinary",
      "JWT",
      "React Hook Form",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://insta-basket.vercel.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/InstaBasket",
    details: {
      role: "Fullstack Developer",
      features: [
        "Live Inventory Sync",
        "Delivery Slot Booking",
        "Product Filters & Search",
        "Order Status Management",
        "Secure Payments with Razorpay",
      ],
      challenges:
        "Built real-time stock recalculations, delivery slot overlap prevention, and multi-admin order processing.",
      apis: ["Razorpay", "MongoDB Atlas", "Cloudinary"],
    },
  },
  {
    id: 3,
    title: "PureFarmFoods",
    description:
      "Server-side rendered organic grocery marketplace using Express + EJS. Supports vendor-based product listing, geo-matching customers to nearest farms, admin-controlled onboarding, and localized delivery management.",
    image: purefarmfoods,
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "MongoDB",
      "Razorpay",
      "Bootstrap",
      "Multer",
      "Cloudinary",
      "JWT",
      "Cookie-Parser",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://purefarmfoods-production.up.railway.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/PureFarmFoods",
    details: {
      role: "Fullstack Developer",
      features: [
        "Geo-based Vendor Matching",
        "Multi-role Dashboards",
        "Secure Checkout with Razorpay",
        "EJS Views with Dynamic Logic",
        "Vendor Onboarding System",
      ],
      challenges:
        "Designed geolocation-based product visibility, reusable EJS partials, and strict session-controlled access by role.",
      apis: ["Razorpay", "MongoDB Atlas", "Google Maps API", "Cloudinary"],
    },
  },
];
