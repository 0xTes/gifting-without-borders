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
      "Recovered from the organisation’s public legacy project listing. A current date, location, and outcome report were not published with this record.",
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
      "Recovered from the organisation’s public legacy project listing. A current date, location, and outcome report were not published with this record.",
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
      "Recovered from the organisation’s public legacy project listing. A current date, location, and outcome report were not published with this record.",
  },
  {
    slug: "widows-outreach",
    title: "Widows Outreach",
    description:
      "Supporting widows through outreach, empowerment, and sustainable initiatives.",
    sourceNote:
      "Recovered from the organisation’s public legacy project listing. No suitable legacy image, date, location, or outcome report was available for reuse.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
