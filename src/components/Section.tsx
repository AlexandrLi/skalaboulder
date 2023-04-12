import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const sectionVariants = cva(["rounded-md", "p-4"], {
  variants: {
    intent: {
      primary: ["bg-primary"],
      secondary: ["bg-secondary"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type SectionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
} & VariantProps<typeof sectionVariants>;

export const Section = ({
  intent,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section className={sectionVariants({ intent, className })} {...props}>
      {children}
    </section>
  );
};
