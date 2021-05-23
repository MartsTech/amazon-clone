import SuccessTemplate from "@template/SuccessTemplate";
import Head from "next/head";

interface SuccessProps {}

const Success: React.FC<SuccessProps> = () => {
  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="description" content="Amazon clone created with Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuccessTemplate />
    </>
  );
};

export default Success;
