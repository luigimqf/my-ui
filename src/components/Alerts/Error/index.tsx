const AlertError = () => {
  return (
    <div
      className="rounded border-s-4 border-red-500 bg-red-50 p-4"
      role="alert"
    >
      <div className="flex items-center gap-2 text-red-800">
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            fillRule="evenodd"
          />
        </svg>

        <strong className="block font-medium"> Something went wrong </strong>
      </div>

      <p className="mt-2 text-sm text-red-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi
        assumenda numquam deserunt consectetur autem nihil quos debitis dolor
        culpa.
      </p>
    </div>
  );
};

export default AlertError;
