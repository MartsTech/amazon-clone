import BookmarkPage from "features/bookmark/BookmarkPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { FC } from "react";

interface BookmarkProps {}

const Bookmark: FC<BookmarkProps> = () => (
  <>
    <Head>
      <title>Bookmarks</title>
    </Head>
    <BookmarkPage />
  </>
);

export default Bookmark;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
