export const projects = [
  {
    slug: "empowerment-training",
    title: "Empowerment & Training",
    description:
      "Providing skills and training to empower individuals and communities for a sustainable future.",
    image: "/images/projects/empowerment-training.webp",
    imageAlt:
      "Participants hold certificates at a Gifting Without Borders training event.",
    sourceNote:
      "Evidence class B — an organisation-published legacy homepage record. It establishes the historical project name, description, and associated image; it does not establish a current date, location, activity, or outcome.",
  },
  {
    slug: "medical-outreach",
    title: "Medical Outreach",
    description:
      "Delivering essential medical services and health education to underserved communities.",
    image: "/images/projects/medical-outreach.jpg",
    imageAlt:
      "A health worker assists a participant during a documented Gifting Without Borders health intervention.",
    sourceNote:
      "Evidence class B — an organisation-published legacy homepage record. It establishes the historical project name, description, and associated image; it does not establish a current date, location, activity, or outcome.",
  },
  {
    slug: "feeding-outreach",
    title: "Feeding Outreach",
    description:
      "Providing nutritious meals to families and individuals during Ramadan and throughout the year.",
    image: "/images/projects/feeding-outreach.jpg",
    imageAlt:
      "People wearing Gifting Without Borders shirts stand beside food and household supplies.",
    sourceNote:
      "Evidence class B — an organisation-published legacy homepage record. It establishes the historical project name, description, and associated image; it does not establish a current date, location, activity, or outcome.",
  },
  {
    slug: "widows-outreach",
    title: "Widows Outreach",
    description:
      "Supporting widows through outreach, empowerment, and sustainable initiatives.",
    sourceNote:
      "Evidence class B — an organisation-published legacy homepage record. It establishes the historical project name and description only; no local image, current date, location, activity, or outcome is published here.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
