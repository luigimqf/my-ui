/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
*/

const InputQuantity = () => {
  return (
    <div>
      <label className="sr-only" htmlFor="Quantity">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center gap-1">
        <button
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
          type="button"
        >
          &minus;
        </button>

        <input
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
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

export default InputQuantity;
