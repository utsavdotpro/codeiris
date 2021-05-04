import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import { NextPageContext } from 'next';
import Container from 'lib/components/atomic/containers/Container';
import FilterBar from 'lib/components/Home/FilterBar';
import SectionTitle from 'lib/components/Home/SectionTitle';
import { FireIcon, DiscussionIcon } from 'lib/components/Icons';
import PostList from 'lib/components/PostList';
import Filter from 'lib/components/Filter';

function Home({ data }) {
  return (
    <Container className="mt-10">
      <SectionTitle
        className="my-10"
        color="error"
        icon={<FireIcon color="white" size={4} />}
      >
        Trending
      </SectionTitle>

      <FilterBar />

      <SectionTitle
        className="my-10"
        color="primary"
        icon={<DiscussionIcon color="white" size={4} />}
      >
        Threads & Discussions
      </SectionTitle>

      <Filter />
      <PostList
        initialPosts={JSON.parse(data.initialPosts).map((ele) => ({
          ...ele,
          id: ele.id,
          body: ele.body,
          title: ele.title,
          user: ele.user,
          upvotes: ele._count.votes,
          totalComments: ele._count.comments,
        }))}
      />

    </Container>
  );
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      data: ctx.query,
    },
  };
}
export default Home;
