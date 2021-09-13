import React from "react";
import { graphql } from "gatsby";

import { PostQueryQuery } from "@/graphql/graphql-types";

import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Divider } from "@/components/Divider";
import { PostMeta } from "@/components/PostMeta";
import { Image } from "@/components/Image";
import { PostContent, PostContentContext } from "@/components/PostContent";
import { Person } from "@/components/Person";
import { ResourceList } from "@/blocks/ResourceList";

interface PostProps {
  data: PostQueryQuery;
}

function Post({ data }: PostProps) {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
      <div style={{ marginBottom: `var(--space--xlarge)` }}>
        <Container size="small">
          {post?.title && (
            <>
              <PageTitle title={post?.title} />
              <Divider />
            </>
          )}
          <PostMeta date={post?.published} />
          {post?.featuredImage && <Image {...post.featuredImage} />}
          {post?.content && (
            <PostContent content={post?.content as PostContentContext} />
          )}
          {post?.author && (
            <>
              <Divider />
              <Person {...post.author} />
            </>
          )}
        </Container>
      </div>
      {post?.resources && <ResourceList {...post?.resources} />}
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMM D, YYYY")
      featuredImage {
        contentful_id
        title
        description
        gatsbyImageData(width: 900, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
      author {
        ...PeopleFragment
      }
      resources {
        ...ResourceListFragment
      }
      ...PostContentFragment
    }
  }
`;

export default Post;
