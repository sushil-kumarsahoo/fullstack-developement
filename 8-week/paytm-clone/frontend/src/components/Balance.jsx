

export const Balance = ({ value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-gray-500 text-sm">
        Your Balance
      </div>
      <div className="text-2xl font-bold mt-2">
        ₹ {value}
      </div>
    </div>
  );
};
