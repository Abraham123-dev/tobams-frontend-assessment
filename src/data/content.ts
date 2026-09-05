export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

export const TOP_NAV_ITEMS: NavLink[] = [
  { label: "About", href: "#about", hasDropdown: true, isActive: true },
  { label: "What We Do", href: "#what-we-do", hasDropdown: true },
  { label: "Jobs", href: "#jobs", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#academy" },
  { label: "Strategic Partnership", href: "#partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
];

export const LMS_COURSES = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export const CORPORATE_TRAINING_POINTS = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export const PERSONALISED_TRAINING_POINTS = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export const CAPACITY_DEVELOPMENT_POINTS = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export const MANAGEMENT_PROGRAM_POINTS = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export const TRANSFORMATION_HUB_POINTS = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export const CONSULTANT_FEATURES = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/lms-team.jpg",
  },
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    quote:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
    avatar: "/images/personalised-training.jpg",
  },
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    quote:
      "Tobams Group transformed our leadership team's approach to strategic execution. The customized training delivered immediate ROI across our global offices.",
    avatar: "/images/capacity-development.jpg",
  },
];

export const FOOTER_SECTIONS = {
  whatWeDo: [
    "Sustainability Services",
    "Strategy Planning and Implementation",
    "Tech Talent Solutions",
    "Training and Development",
    "IT Consulting Services",
    "Social Impact",
    "Talent Recruitment",
  ],
  company: [
    "About",
    "Jobs",
    "Projects",
    "Our Founder",
    "Business Model",
    "The Team",
    "Contact Us",
    "Blog",
    "FAQs",
    "Testimonials",
  ],
  solution: [
    "Tobams Group Academy",
    "Help a Tech Talent",
    "Campus Ambassadors Program",
    "Join Our Platform",
    "Pricing",
    "Book a Consultation",
    "Join Our Slack Community",
  ],
};
