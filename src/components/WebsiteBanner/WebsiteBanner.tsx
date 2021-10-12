import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Banner } from "@/components/Banner";
import { RichText, RichTextContent } from "../RichText";

export function WebsiteBanner() {
  const { content } = useStaticQuery(graphql`
    query WebsiteBannerQuery {
      content: contentfulMicroContent(key: { eq: "Website Banner" }) {
        value {
          raw
          references {
            contentful_id
            slug
          }
        }
      }
    }
  `);

  if (!content?.value) {
    return <></>;
  }

  return (
    <Banner ariaLabel="Important Message">
      <RichText content={content.value as RichTextContent} size="small" />
    </Banner>
  );
}
