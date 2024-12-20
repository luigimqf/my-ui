import { tv } from "tailwind-variants";

const Badge = ({ style = "solid" }: { style: "solid" | "outlined" }) => {
  const badge = tv({
    base: "whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm text-purple-700",
    variants: {
      style: {
        solid: "bg-purple-100",
        outlined: "border border-purple-500",
      },
    },
  });
  return <span className={badge({ style })}>Live</span>;
};

export default Badge;
