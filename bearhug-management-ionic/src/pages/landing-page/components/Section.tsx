import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="section-container">
      <h4>{title}</h4>
      <p>{description}</p>
      <article>{children}</article>
    </section>
  );
}
