import { tv } from "tailwind-variants";

import { IBadgeStatusProps } from "./interfaces.types";

const BadgeStatus = ({
  style = "solid",
  status = "success",
}: IBadgeStatusProps) => {
  const badge = tv({
    base: "inline-flex items-center justify-center rounded-full px-2.5 py-0.5",
    variants: {
      status: {
        success: "border border-emerald-500 text-emerald-700",
        warning: "border border-amber-500 text-amber-700",
        error: "border border-red-500 text-red-700",
      },
      style: {
        solid: "",
        outlined: "border",
      },
    },
    compoundVariants: [
      {
        status: "success",
        style: "solid",
        className: "bg-emerald-100 text-emerald-700",
      },
      {
        status: "warning",
        style: "solid",
        className: "bg-amber-100 text-amber-700",
      },
      {
        status: "error",
        style: "solid",
        className: "bg-red-100 text-red-700",
      },
    ],
  });

  const pathData: Record<string, string> = {
    success: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    warning:
      "M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    error:
      "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  };

  return (
    <span className={badge({ status, style })}>
      <svg
        className="-ms-1 me-1.5 size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={pathData[status]}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="whitespace-nowrap text-sm">Failed</p>
    </span>
  );
};

export default BadgeStatus;
