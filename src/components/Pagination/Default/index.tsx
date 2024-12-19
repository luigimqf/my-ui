const Pagination = () => {
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
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
      </li>

      <li>
        <a
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          href="#"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
        2
      </li>

      <li>
        <a
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          href="#"
        >
          3
        </a>
      </li>

      <li>
        <a
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          href="#"
        >
          4
        </a>
      </li>

      <li>
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
      </li>
    </ol>
  );
};

export default Pagination;
