import github from "/public/icons/github.svg";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import facebook from "/public/icons/facebook.svg";

export const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Ivan-Malakhovskyi",
    icon: github,
    alt: "github_icon",
  },
  {
    id: 2,
    href: "www.linkedin.com/in/ivan-malakhovskyi",
    icon: linkedin,
    alt: "linkedin_icon",
  },
  {
    id: 3,
    href: "https://www.instagram.com/ivan_m_06/",
    icon: instagram,
    alt: "instagram_icon",
  },
  {
    id: 4,
    href: "https://www.facebook.com/",
    icon: facebook,
    alt: "facebook_icon",
  },
];

export const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const transition = { duration: 1 };
