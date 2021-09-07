import React from "react";
import classNames from "classnames";
import { graphql } from "gatsby";
import { ContentFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import { Button } from "@/components/Button";
import { Image } from "@/components/Image";

import styles from "./Content.module.css";

interface ContentProps {
  readonly data: ContentFragmentFragment;
}

export function Content({
  data: { variation, content, customButtonText, buttonLink, image },
}: ContentProps) {
  const cssVariation = variation?.toLowerCase().replace(/ /g, "");

  // @ts-expect-error we can expect the classname to exist here
  const wrapperClass = classNames(styles.wrapper, styles[cssVariation]);

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          <div>
            {content && <RichText content={content as RichTextContent} />}
            {buttonLink && (
              <div className={styles.button}>
                <Button
                  {...buttonLink}
                  title={customButtonText ?? buttonLink?.title}
                  variation={
                    variation === "Full Width Dark" ? "inverted" : "primary"
                  }
                />
              </div>
            )}
          </div>
          {image && (
            <div className={styles.image}>
              <Image {...image} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export const ContentFragment = graphql`
  fragment ContentFragment on ContentfulBlockContent {
    __typename
    id
    variation
    content {
      raw
    }
    buttonLink {
      ... on ContentfulPage {
        ...ButtonPageFragment
      }
      ... on ContentfulResource {
        ...ButtonResourceFragment
      }
    }
    customButtonText
    image {
      title
      description
      gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
`;
