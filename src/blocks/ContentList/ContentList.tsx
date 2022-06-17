import React from "react";
import classnames from "classnames";
import { graphql } from "gatsby";
import { ContentListFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";

import { Button } from "@/components/Button";
import styles from "./ContentList.module.css";

export function ContentList({
  title,
  content,
  listTitle,
  list,
  listDescription,
  highlight,
  button,
  customButtonText,
}: ContentListFragmentFragment) {
  const wrapperClass = classnames(styles.wrapper, {
    [styles.full]: highlight === "Full",
    [styles.none]: highlight === "None",
    [styles.left]: highlight === "Left",
  });

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <Heading as="h3">{title}</Heading>
            <RichText content={content as RichTextContent} />
            {button && (
              <Button {...button} title={customButtonText ?? button?.title} />
            )}
          </div>

          <div className={styles.listWrapper}>
            {listTitle && (
              <div className={styles.listTitle}>
                <Heading as="h4">{listTitle}</Heading>
              </div>
            )}
            {list?.items && (
              <ul className={styles.list}>
                {list.items.map((item) => {
                  return (
                    <li key={item} className={styles.item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
            {listDescription && (
              <div className={styles.description}>
                <RichText content={listDescription as RichTextContent} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export const ContentListFragment = graphql`
  fragment ContentListFragment on ContentfulBlockContentList {
    __typename
    title
    id
    highlight
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
    listTitle
    listDescription {
      raw
    }
    list {
      items
    }
  }
`;
