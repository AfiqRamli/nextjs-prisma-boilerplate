import React from 'react';
import { GetStaticProps } from 'next';
import Layout from 'components/Layout';
import { PostsProps } from 'components/PostItem';
import prisma from 'lib-server/prisma';
import { datesToStrings } from 'utils';
import { default as HomeView } from 'views/Home';

const Home: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <HomeView posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let _posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
  });

  _posts = _posts?.length > 0 ? _posts : [];

  const posts = _posts.map(({ author, ...post }) =>
    datesToStrings({ ...post, author: datesToStrings(author) })
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
