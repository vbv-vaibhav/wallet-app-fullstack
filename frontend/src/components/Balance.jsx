const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-2xl">Your balance</div>
      <div className="font-semibold ml-4 text-2xl hover:scale-110 duration-300">
        Rs {value}
      </div>
    </div>
  );
};

export default Balance;
