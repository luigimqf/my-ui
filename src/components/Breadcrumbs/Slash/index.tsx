const BreadcrumbSlash = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a className="block transition hover:text-gray-700" href="#">
            <span className="sr-only"> Home </span>

            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9 20.247 6-16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>

        <li>
          <a className="block transition hover:text-gray-700" href="#">
            {" "}
            Shirts{" "}
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9 20.247 6-16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>

        <li>
          <a className="block transition hover:text-gray-700" href="#">
            {" "}
            Plain Tee{" "}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbSlash;
