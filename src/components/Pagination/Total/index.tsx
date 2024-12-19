const PaginationTotal = () => {
  return (
    <div className="inline-flex items-center justify-center gap-3">
      <a
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        href="#"
      >
        <span className="sr-only">Prev Page</span>
        <svg
          className="size-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            fillRule="evenodd"
          />
        </svg>
      </a>

      <p className="text-xs text-gray-900">
        3<span className="mx-0.25">/</span>
        12
      </p>

      <a
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        href="#"
      >
        <span className="sr-only">Next Page</span>
        <svg
          className="size-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            fillRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default PaginationTotal;
