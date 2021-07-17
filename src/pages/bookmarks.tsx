import BookmarkPage from "features/bookmark/BookmarkPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface BookmarkProps {}

const Bookmark: React.FC<BookmarkProps> = () => {
  return (
    <>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <BookmarkPage />
    </>
  );
};

export default Bookmark;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
