import Banner from "@section/Banner";
import Header from "@section/Header";

interface HomeTemplateProps {
  ProductFeed: JSX.Element;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ ProductFeed }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {ProductFeed}
      </main>
    </div>
  );
};

export default HomeTemplate;
