/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/

const TextArea = () => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="OrderNotes"
      >
        {" "}
        Order notes{" "}
      </label>

      <textarea
        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
        id="OrderNotes"
        placeholder="Enter any additional order notes..."
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextArea;
