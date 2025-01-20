import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border flex items-center justify-center">
      <Section className="py-5">
        <p className="text-muted-foreground text-sm text-center hover:text-primary transition-colors">
          © 2025 Yanis Mahdi
        </p>
      </Section>
    </footer>
  );
};
