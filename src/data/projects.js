export const projects = [
  {
    slug: "empowerment-training",
    title: "Empowerment & Training",
    description:
      "Skills and training that support individual and community empowerment.",
    image: "/images/projects/empowerment-training.webp",
    imageAlt:
      "People stand together indoors holding certificates.",
    sourceNote:
      "Project information is shared with the available context. More detailed reporting will be added as it is prepared.",
    updates: [
      {
        title: "IT Training — Full Stack Development",
        status: "Completed",
        location: "Mushin",
        record: "2025",
      },
      {
        title: "IT Training — Web Development, Data Analysis, Desktop Publishing",
        status: "Planned",
        location: "Ikeja",
        record: "2025",
      },
    ],
    gallery: [
      {
        src: "/images/projects/empowerment-training.webp",
        alt: "People stand together indoors holding certificates.",
      },
      {
        src: "/images/projects/empowerment-training/empowerment-training-02.webp",
        alt: "A group of people pose indoors with certificates.",
      },
      {
        src: "/images/projects/empowerment-training/empowerment-training-03.webp",
        alt: "People sit at tables while someone speaks at the front of a room.",
      },
    ],
  },
  {
    slug: "medical-outreach",
    title: "Medical Outreach",
    description:
      "Medical services and health education for communities seeking practical support.",
    image: "/images/projects/medical-outreach.jpg",
    imageAlt:
      "People sit outdoors around a table during a community gathering.",
    sourceNote:
      "Project information is shared with the available context. More detailed reporting will be added as it is prepared.",
    gallery: [
      {
        src: "/images/projects/medical-outreach/medical-outreach-01.webp",
        alt: "People sit together outdoors beneath a canopy.",
      },
      {
        src: "/images/projects/medical-outreach/medical-outreach-02.webp",
        alt: "People sit outdoors around tables during a community gathering.",
      },
      {
        src: "/images/projects/medical-outreach/medical-outreach-03.webp",
        alt: "People gather around tables outdoors.",
      },
    ],
  },
  {
    slug: "feeding-outreach",
    title: "Feeding Outreach",
    description:
      "Food support for people and families, including Ramadan outreach.",
    image: "/images/projects/feeding-outreach.jpg",
    imageAlt:
      "People wearing Gifting Without Borders shirts stand beside food and household supplies.",
    sourceNote:
      "Project information is shared with the available context. More detailed reporting will be added as it is prepared.",
    gallery: [
      {
        src: "/images/projects/feeding-outreach/feeding-outreach-01.webp",
        alt: "People gather indoors while a person in a blue shirt hands an item to another person.",
      },
      {
        src: "/images/projects/feeding-outreach/feeding-outreach-02.webp",
        alt: "A person in a blue shirt hands a wrapped item to another person indoors.",
      },
      {
        src: "/images/projects/feeding-outreach/feeding-outreach-03.webp",
        alt: "People stand together outdoors beside food supplies.",
      },
    ],
  },
  {
    slug: "widows-outreach",
    title: "Widows Outreach",
    description:
      "Outreach and practical support for widows.",
    image: "/images/projects/widows-outreach/widows-outreach-01.webp",
    imageAlt:
      "Two people in Gifting Without Borders shirts stand with an older woman holding bags.",
    sourceNote:
      "Project information is shared with the available context. More detailed reporting will be added as it is prepared.",
    gallery: [
      {
        src: "/images/projects/widows-outreach/widows-outreach-01.webp",
        alt: "Two people in Gifting Without Borders shirts stand with an older woman holding bags.",
      },
      {
        src: "/images/projects/widows-outreach/widows-outreach-02.jpg",
        alt: "A person in a Gifting Without Borders shirt stands beside a woman holding a bag.",
      },
      {
        src: "/images/projects/widows-outreach/widows-outreach-03.jpg",
        alt: "A person in a Gifting Without Borders shirt stands beside an older woman holding a bag.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
