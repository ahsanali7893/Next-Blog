// assets.js
import logo from "@/assets/logo.svg";
//
export const assets = {
  logo,
  defaultAvatar: "https://via.placeholder.com/100?text=Avatar",
  placeholderImage: "https://via.placeholder.com/600x400?text=Placeholder",
  uploader:
    "https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg",

  // Icons
  icons: {
    home: "https://via.placeholder.com/24?text=Home",
    user: "https://via.placeholder.com/24?text=User",
    settings: "https://via.placeholder.com/24?text=Settings"
  },

  // Fonts (example URLs; fonts often need to be hosted on a CDN or served from your own server)
  fonts: {
    robotoRegular:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
    robotoBold:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
  }
};
export const blogData = [
  {
    id: 1,
    title: "A detailed step by step guide to manage your lifestyle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+1",
    date: new Date().toISOString(),
    category: "LifeStyle",
    author: "Alex Bennett",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 2,
    title: "Exploring the fundamentals of modern web development",
    description: "An in-depth look into the core concepts of web development.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+2",
    date: new Date().toISOString(),
    category: "Technology",
    author: "Jordan Lee",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 3,
    title: "Understanding the principles of effective time management",
    description: "Strategies and tips to enhance your time management skills.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+3",
    date: new Date().toISOString(),
    category: "Startup",
    author: "Taylor Smith",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 4,
    title: "A comprehensive guide to healthy eating habits",
    description:
      "Tips and advice on maintaining a balanced and nutritious diet.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+4",
    date: new Date().toISOString(),
    category: "Lifestyle",
    author: "Chris Johnson",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 5,
    title: "How to build a successful career in tech",
    description:
      "Guidelines and strategies for advancing in the technology field.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+5",
    date: new Date().toISOString(),
    category: "Technology",
    author: "Morgan Taylor",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 6,
    title: "The impact of digital transformation on businesses",
    description:
      "Exploring how digital transformation is changing the business landscape.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+6",
    date: new Date().toISOString(),
    category: "Technology",
    author: "Pat Riley",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  },
  {
    id: 7,
    title: "Tips for achieving work-life balance",
    description:
      "Effective techniques to balance professional and personal life.",
    image: "https://via.placeholder.com/600x400?text=Blog+Pic+7",
    date: new Date().toISOString(),
    category: "LifeStyle",
    author: "Sam Parker",
    author_img: "https://via.placeholder.com/100?text=Profile+Icon"
  }
];
