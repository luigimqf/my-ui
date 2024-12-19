/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/

const Tabs = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label className="sr-only" htmlFor="Tab">
          Tab
        </label>

        <select className="w-full rounded-md border-gray-200" id="Tab">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option selected>Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex gap-6">
          <a
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            href="#"
          >
            Settings
          </a>

          <a
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            href="#"
          >
            Messages
          </a>

          <a
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            href="#"
          >
            Archive
          </a>

          <a
            aria-current="page"
            className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
            href="#"
          >
            Notifications
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
