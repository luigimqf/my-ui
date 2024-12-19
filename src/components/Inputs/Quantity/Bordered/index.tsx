const InputQuantityBordered = () => {
  return (
    <div>
      <label className="sr-only" htmlFor="Quantity">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center rounded border border-gray-200">
        <button
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
          type="button"
        >
          &minus;
        </button>

        <input
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id="Quantity"
          type="number"
          value="1"
        />

        <button
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
          type="button"
        >
          &plus
        </button>
      </div>
    </div>
  );
};

export default InputQuantityBordered;
