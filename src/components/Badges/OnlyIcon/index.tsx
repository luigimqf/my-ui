import { tv } from "tailwind-variants";

const BadgeOnlyIcon = ({
  style = "solid",
}: {
  style: "solid" | "outlined";
}) => {
  const badge = tv({
    base: "inline-flex items-center justify-center rounded-full px-2.5 py-1 text-purple-700",
    variants: {
      style: {
        solid: "bg-purple-100",
        outlined: "border border-purple-500",
      },
    },
  });
  return (
    <span className={badge({ style })}>
      <svg
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default BadgeOnlyIcon;
