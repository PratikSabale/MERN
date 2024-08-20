export const CommonButton = ({ label, type, className, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border border-gray-950  hover:bg-cyan-400 rounded-full  bg-white px-5 "
    >
      {label}
    </button>
  );
};
