const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-screen-sm md:max-w-[580px] bg-white shadow-md">
        {children}
      </div>
    </div>
  );
};
export default Container;
