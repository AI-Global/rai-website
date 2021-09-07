import React from "react";
import { graphql } from "gatsby";

import { PageTemplateQueryQuery } from "@/graphql/graphql-types";

import { Layout } from "@/components/Layout";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { EmptyPage } from "@/components/EmptyPage";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";

interface PageProps {
  data: PageTemplateQueryQuery;
}

function Page({ data }: PageProps) {
  const { page } = data;

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      {page?.blocks ? (
        <ContentfulBlocks blocks={page.blocks} />
      ) : (
        <EmptyPage>
          <Icon icon="AlertTriangle" />{" "}
          <Text>
            There is no content on this page, the robots must have eaten it up
          </Text>
        </EmptyPage>
      )}
    </Layout>
  );
}

/**
 * We create a fragment here, as there are other templates
 * that will use the same query as page.
 */
export const PageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    title
    seoTitle
    seoDescription
  }
`;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...PageFragment
      ...ContentfulBlocksFragment
    }
  }
`;

export default Page;
