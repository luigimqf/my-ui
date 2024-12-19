const Checkbox = () => {
  return (
    <label
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
      htmlFor="AcceptConditions"
    >
      <input className="peer sr-only" id="AcceptConditions" type="checkbox" />

      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};

export default Checkbox;
