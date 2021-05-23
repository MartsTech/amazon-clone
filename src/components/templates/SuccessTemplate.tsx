import SuccessMessage from "@module/SuccessMessage";
import Header from "@section/Header";

interface SuccessTemplateProps {}

const SuccessTemplate: React.FC<SuccessTemplateProps> = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <SuccessMessage />
      </main>
    </div>
  );
};

export default SuccessTemplate;
