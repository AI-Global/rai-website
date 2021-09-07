import React from "react";
import { graphql } from "gatsby";
import classNames from "classnames";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { RichText, RichTextContent } from "@/components/RichText";
import { Link } from "@/components/Link";
import { Icon, IconType } from "@/components/Icon";
import { CardFragmentFragment } from "@/graphql/graphql-types";

import styles from "./Card.module.css";
import { Emphasis } from "../Emphasis";

interface CardProps extends CardFragmentFragment {
  size?: "base" | "large";
}

export function Card({
  title,
  content,
  link,
  icon,
  customLinkTitle,
  size,
}: CardProps) {
  const cardClasses = classNames(styles.card, {
    [styles.large]: size === "large",
  });

  return (
    <>
      <div className={cardClasses}>
        {icon && (
          <div className={styles.icon}>
            <Icon
              icon={icon.replace(/ /g, "") as IconType}
              size={size === "large" ? "humongous" : "largest"}
            />
          </div>
        )}
        <div className={styles.content}>
          {size === "large" ? (
            <Heading as="h3">{title}</Heading>
          ) : (
            <Text size="large">
              <Emphasis variation="bold">{title}</Emphasis>
            </Text>
          )}
          {content && <RichText content={content as RichTextContent} />}
          {link && (
            <div className={styles.link}>
              <Link
                url={getLinkUrl()}
                external={link.__typename === "ContentfulResource"}
                icon="ArrowRight"
              >
                {customLinkTitle ?? link.title}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );

  function getLinkUrl(): string {
    let url;

    if (!link) return "";

    if (link?.__typename === "ContentfulPage") {
      url = `/${link.slug}`;
    }

    if (link?.__typename === "ContentfulResource") {
      url = link.url;
    }

    return url as string;
  }
}

export const CardFragment = graphql`
  fragment CardFragment on ContentfulCard {
    title
    icon
    content {
      raw
    }
    customLinkTitle
    link {
      __typename
      ... on ContentfulPage {
        slug
        title
      }
      ... on ContentfulResource {
        url
        title
      }
    }
  }
`;
