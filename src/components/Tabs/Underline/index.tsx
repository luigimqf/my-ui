const TabsUnderline = () => {
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
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex gap-6">
            <a
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              href="#"
            >
              Settings
            </a>

            <a
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              href="#"
            >
              Messages
            </a>

            <a
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              href="#"
            >
              Archive
            </a>

            <a
              aria-current="page"
              className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
              href="#"
            >
              Notifications
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TabsUnderline;
