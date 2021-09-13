import React from "react";
import { Container } from "@/components/Container";
import { ContentfulButton } from "@/components/ContentfulButton";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";
import { CallToActionFragmentFragment } from "@/graphql/graphql-types";
import { graphql } from "gatsby";

import styles from "./CallToAction.module.css";

export function CallToAction({
  title,
  content,
  button,
}: CallToActionFragmentFragment) {
  return (
    <Container>
      <div className={styles.cta}>
        {title && <Heading>{title}</Heading>}
        {content && (
          <div className={styles.content}>
            <RichText size="large" content={content as RichTextContent} />
          </div>
        )}
        {button?.action?.enabled && (
          <div className={styles.button}>
            <ContentfulButton
              action={{ ...button?.action, variation: "inverted" }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export const CallToActionFragment = graphql`
  fragment CallToActionFragment on ContentfulBlockCallToAction {
    __typename
    id
    title
    content {
      raw
    }
    button {
      action {
        enabled
        entrySlug
        external
        externalUrl
        title
      }
    }
  }
`;
