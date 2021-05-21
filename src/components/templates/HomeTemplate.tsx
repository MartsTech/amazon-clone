import MainLayout from "@layout/MainLayout";
import Banner from "@section/Banner";

interface HomeTemplateProps {
  ProductFeed: JSX.Element;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ ProductFeed }) => {
  return (
    <MainLayout>
      <Banner />
      {ProductFeed}
    </MainLayout>
  );
};

export default HomeTemplate;
