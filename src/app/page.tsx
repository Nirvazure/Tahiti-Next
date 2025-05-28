import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const prefix = "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/";

const banners = [
  {
    title: "WEB设计",
    subtitle: "YQYMONs战队官网",
    description: "Vue3+Typescript+Vite",
    img: "web-yqymons.gif",
    left: true,
  },
  {
    title: "WEB设计",
    subtitle: "Tahiti个人主页",
    description: "React16+Tailwind+Next.js",
    img: "web-teotihuacan.gif",
    left: false,
  },
  {
    title: "结派",
    subtitle: "APP设计",
    img: "结派.png",
    left: true,
  },
  {
    title: "老白食堂",
    subtitle: "WEB设计",
    img: "老白食堂.jpg",
    left: false,
  },
  {
    title: "乔巴科技",
    subtitle: "企业VI设计",
    img: "乔巴科技.jpg",
    left: true,
    scale: 90,
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {banners.map((banner, i) => (
        <Hero
          key={i}
          title={banner.title}
          subtitle={banner.subtitle}
          BannerImg={prefix + banner.img}
          left={banner.left}
        />
      ))}
      <Footer />
    </main>
  );
}
