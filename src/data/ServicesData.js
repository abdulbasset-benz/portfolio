import code from '../assets/code.svg';
import ecommerce from '../assets/ecommerce.svg';
import seo from '../assets/seo.svg';
import maintenance from '../assets/maintenance.svg';
import arrow from '../assets/arrow.svg';

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive, fast, and functional websites using the latest technologies Whether it's a simple landing page or a complex web app, I ensure performance, accessibility, and clean code.",
    icon: code,
  arrow: arrow,
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description:
      "Providing comprehensive e-commerce solutions that help you sell online effortlessly. From product pages to secure checkout systems, I build scalable stores that grow with your business.",
    icon: ecommerce,
    arrow: arrow,
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: 
    "Improving your website's visibility and ranking on search engines through modern SEO techniques. I focus on technical SEO, keyword strategy, and performance optimization to drive organic traffic.",
    icon: seo,
    arrow: arrow,
  },
  {
    id: 4,
    title: "Maintenance & Support",
    description:
      "Offering ongoing maintenance and support to keep your website running smoothly and securely. From regular updates to performance monitoring, I help you stay ahead without the stress.",
    icon: maintenance,
    arrow: arrow,
  }
];

export default servicesData;