const StepProgress = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div>
        <p className="text-xs font-medium text-gray-500">2/3 - Address</p>

        <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
          <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
