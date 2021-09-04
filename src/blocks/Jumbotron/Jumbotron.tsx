import React from "react";
import classnames from "classnames";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { JumbotronFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";
import { ContentfulButton } from "@/components/ContentfulButton";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./Jumbotron.module.css";

export function Jumbotron({
  title,
  content,
  button,
  image,
  backgroundImage,
  backgroundColor,
  imageAlignment,
  imageOnLeft,
}: JumbotronFragmentFragment) {
  const mainImage = getImage(image?.gatsbyImageData);
  const bgImage = getImage(backgroundImage?.gatsbyImageData);

  const wrapperClass = classnames(styles.wrapper, {
    [styles.grey]: backgroundColor === "Grey",
    [styles.bottom]: imageAlignment === "Bottom",
    [styles.top]: imageAlignment === "Top",
  });

  const imageClass = classnames(styles.image, {
    [styles.imageOnLeft]: imageOnLeft === true,
  });

  const contentClass = classnames(styles.content, {
    [styles.imageOnLeft]: imageOnLeft === true,
  });

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          <div className={contentClass}>
            <Heading>{title}</Heading>
            {content && <RichText content={content as RichTextContent} />}
            {button?.action?.enabled && (
              <ContentfulButton action={button?.action} />
            )}
          </div>

          {mainImage && (
            <AnimatePresence>
              <motion.div
                className={imageClass}
                initial={{ left: 250, opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
              >
                <GatsbyImage
                  image={mainImage}
                  alt={image?.description ?? ""}
                  title={image?.title ?? ""}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </Container>
      {bgImage && (
        <div className={styles.background}>
          <GatsbyImage image={bgImage} alt="" title="" />
        </div>
      )}
    </div>
  );
}

export const JumbotronFragment = graphql`
  fragment JumbotronFragment on ContentfulBlockJumbotron {
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
    image {
      gatsbyImageData(placeholder: BLURRED)
      title
      description
    }
    backgroundImage {
      gatsbyImageData(placeholder: BLURRED)
    }
    backgroundColor
    imageAlignment
    imageOnLeft
  }
`;
