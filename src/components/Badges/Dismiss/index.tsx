import { tv } from "tailwind-variants";

const BadgeDismiss = ({ style = "solid" }: { style: "solid" | "outlined" }) => {
  const badge = tv({
    base: "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-purple-700",
    variants: {
      style: {
        solid: "bg-purple-100",
        outlined: "border border-purple-500",
      },
    },
  });
  return (
    <span className={badge({ style })}>
      <p className="whitespace-nowrap text-sm">Euro</p>

      <button className="-me-1 ms-1.5 inline-block rounded-full bg-purple-200 p-0.5 text-purple-700 transition hover:bg-purple-300">
        <svg
          className="size-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </span>
  );
};

export default BadgeDismiss;
