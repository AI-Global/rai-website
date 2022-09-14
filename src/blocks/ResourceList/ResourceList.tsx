import React from "react";
import { graphql } from "gatsby";
import { XOR } from "ts-xor";

import {
  ResourceBlogFragmentFragment,
  ResourceListFragmentFragment,
  ResourceResourceFragmentFragment,
} from "@/graphql/graphql-types";

import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { Link } from "@/components/Link";
import { Caption } from "@/components/Caption";

import styles from "./ResourceList.module.css";

export function ResourceList({
  // customHeadingLinkText,
  resources,
}: ResourceListFragmentFragment) {
  return (
    <div className={styles.wrapper}>
      {/* <Container className={styles.heading}>
        {title && <Heading>{title}</Heading>}
        {headingLink && (
          <div className={styles.headingLink}>
            <Link url={`/${headingLink?.slug}` ?? ""} icon="ArrowRight">
              {customHeadingLinkText ?? headingLink?.title}
            </Link>
          </div>
        )}
      </Container> */}

      <Container className={styles.posts}>
        {resources?.map((resource) => (
          <Resource key={resource.id} {...resource} />
        ))}
      </Container>
    </div>
  );
}

function Resource({
  // __typename,
  publicationDate,
  published,
}: // category,
// url,
XOR<ResourceResourceFragmentFragment, ResourceBlogFragmentFragment>) {
  const publication = published ?? publicationDate;
  // const linkProps = {
  //   href: `${url}`,
  //   ...(__typename === "ContentfulResource" && { target: "_blank" }),
  //   ...(__typename === "ContentfulResource" && { rel: "noreferrer" }),
  // };

  return (
    <div className={styles.post}>
      {/* <a className={styles.link} {...linkProps}>
        {title}
      </a> */}
      {publication && <Caption title={publication} />}
    </div>
  );
}

export const ResourceResourceFragment = graphql`
  fragment ResourceResourceFragment on ContentfulResource {
    __typename
    id
    url
    publicationDate(formatString: "MMMM D, YYYY")
  }
`;

export const ResourceBlogFragment = graphql`
  fragment ResourceBlogFragment on ContentfulBlogPost {
    __typename
    id
    published(formatString: "MMMM D, YYYY")
    category
  }
`;

export const ResourceListFragment = graphql`
  fragment ResourceListFragment on ContentfulBlockResourceList {
    __typename
    id
    customHeadingLinkText
    resources {
      ... on ContentfulBlogPost {
        ...ResourceBlogFragment
      }
      ... on ContentfulResource {
        ...ResourceResourceFragment
      }
    }
  }
`;
