import React from "react";
import { graphql } from "gatsby";

import { FaqQueryQuery } from "@/graphql/graphql-types";

import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Faqs } from "@/components/Faqs";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";

interface FaqProps {
  data: FaqQueryQuery;
}

function Faq({ data }: FaqProps) {
  const { page, whitepaper } = data;

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      <Container size="small">
        <PageTitle
          title={page?.title || "FAQs"}
          subtitle={page?.subtitle}
          action={
            whitepaper?.file && {
              title: "Read our RAI Whitepaper",
              url: `https://${whitepaper.file?.url}`,
              external: true,
            }
          }
        />
      </Container>
      <Faqs />
      {page?.blocks && <ContentfulBlocks blocks={page.blocks} />}
    </Layout>
  );
}

export const query = graphql`
  query FaqQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      subtitle
      ...PageFragment
      ...ContentfulBlocksFragment
    }
    whitepaper: contentfulAsset(title: { eq: "Rai Whitepaper" }) {
      file {
        url
      }
    }
  }
`;

export default Faq;
