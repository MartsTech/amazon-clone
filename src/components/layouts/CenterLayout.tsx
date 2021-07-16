interface CenterLayoutProps {}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div
        className="mt-20 mb-12 mx-12 py-8 px-4 bg-white
        rounded-lg overflow-hidden drop-shadow-xl shadow-xl"
      >
        {children}
      </div>
    </div>
  );
};

export default CenterLayout;
