import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";

import { JumbotronFragmentFragment } from "@/graphql/graphql-types";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";
import { MailerLite } from "@/components/MailerLite";
import { Button } from "@/components/Button";

import styles from "./Jumbotron.module.css";

export function Jumbotron({
  title,
  content,
  button,
  customButtonText,
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

  const isMailerLiteButton = getIsMailerLiteButton();

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          <div className={contentClass}>
            <Heading>{title}</Heading>
            {content && <RichText content={content as RichTextContent} />}
            {button && (
              <>
                {isMailerLiteButton ? (
                  <MailerLite />
                ) : (
                  <Button
                    {...button}
                    title={customButtonText ?? button.title}
                  />
                )}
              </>
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

  function getIsMailerLiteButton() {
    return (
      button &&
      button.__typename === "ContentfulResource" &&
      button?.url === "#mailerlite-form"
    );
  }
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
      ... on ContentfulPage {
        ...ButtonPageFragment
      }
      ... on ContentfulResource {
        ...ButtonResourceFragment
      }
    }
    customButtonText
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
