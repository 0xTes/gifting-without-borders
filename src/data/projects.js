export const projects = [
  {
    slug: "empowerment-training",
    title: "Empowerment & Training",
    description:
      "The legacy record describes skills and training intended to support individual and community empowerment.",
    image: "/images/projects/empowerment-training.webp",
    imageAlt:
      "People stand together indoors holding certificates.",
    sourceNote:
      "Evidence class B — organisation-published legacy homepage and gallery records. They establish the historical project name, description, and associated visual context; they do not establish a current date, location, activity, outcome, or consent for a personal story.",
    gallery: [
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
      "The legacy record describes medical services and health education as an area of support.",
    image: "/images/projects/medical-outreach.jpg",
    imageAlt:
      "People sit outdoors around a table during a community gathering.",
    sourceNote:
      "Evidence class B — organisation-published legacy homepage and gallery records. They establish the historical project name, description, and associated visual context; they do not establish a current date, location, activity, outcome, or consent for a personal story.",
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
      "The legacy record describes food support, including a Ramadan-related outreach area.",
    image: "/images/projects/feeding-outreach.jpg",
    imageAlt:
      "People wearing Gifting Without Borders shirts stand beside food and household supplies.",
    sourceNote:
      "Evidence class B — organisation-published legacy homepage and gallery records. They establish the historical project name, description, and associated visual context; they do not establish a current date, location, activity, outcome, or consent for a personal story.",
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
      "The legacy record describes outreach and practical support for widows.",
    image: "/images/projects/widows-outreach/widows-outreach-01.webp",
    imageAlt:
      "Two people in Gifting Without Borders shirts stand with an older woman holding bags.",
    sourceNote:
      "Evidence class B — organisation-published legacy gallery material, with a directly supplied owner copy of the primary Widows Outreach photograph. It establishes project association and visible image context only; it does not establish a current date, location, activity, outcome, or consent for a personal story.",
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
