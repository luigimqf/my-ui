/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/

const TextAreaWithUnderlineActions = () => {
  return (
    <div>
      <label className="sr-only" htmlFor="OrderNotes">
        Order notes
      </label>

      <div className="overflow-hidden">
        <textarea
          className="w-full resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
          id="OrderNotes"
          placeholder="Enter any additional order notes..."
          rows={4}
        ></textarea>

        <div className="flex items-center justify-end gap-2 py-3">
          <button
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
            type="button"
          >
            Clear
          </button>

          <button
            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextAreaWithUnderlineActions;
