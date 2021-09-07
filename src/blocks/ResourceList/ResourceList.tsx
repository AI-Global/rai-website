import React from "react";
import { graphql } from "gatsby";
import { XOR } from "ts-xor";

import {
  ResourceBlogFragmentFragment,
  ResourceListFragmentFragment,
  ResourceResourceFragmentFragment,
} from "@/graphql/graphql-types";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Caption } from "@/components/Caption";

import styles from "./ResourceList.module.css";

interface ResourceListProps {
  readonly data: ResourceListFragmentFragment;
}

export function ResourceList({ data }: ResourceListProps) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.heading}>
        {data.title && <Heading>{data.title}</Heading>}
        {data.headingLink && (
          <div className={styles.headingLink}>
            <Link url={`/${data.headingLink.slug}` ?? ""} icon="ArrowRight">
              {data.customHeadingLinkText ?? data.headingLink.title}
            </Link>
          </div>
        )}
      </Container>

      <Container className={styles.posts}>
        {data.resources?.map((resource) => (
          <Resource data={resource} />
        ))}
      </Container>
    </div>
  );
}

interface ResourceProps {
  readonly data: XOR<
    ResourceResourceFragmentFragment,
    ResourceBlogFragmentFragment
  >;
}

function Resource({ data }: ResourceProps) {
  const publication = data.published ?? data.publicationDate;
  const category = data.category?.toLowerCase();
  const linkProps = {
    href:
      data.__typename === "ContentfulResource"
        ? data.url
        : `/${category}/${data.slug}`,
    ...(data.__typename === "ContentfulResource" && { target: "_blank" }),
    ...(data.__typename === "ContentfulResource" && { rel: "noreferrer" }),
  };

  return (
    <div className={styles.post}>
      <a className={styles.link} {...linkProps}>
        {data.title}
      </a>
      {publication && <Caption title="April 1st, 2022" />}
    </div>
  );
}

export const ResourceResourceFragment = graphql`
  fragment ResourceResourceFragment on ContentfulResource {
    __typename
    id
    title
    url
    publicationDate
  }
`;

export const ResourceBlogFragment = graphql`
  fragment ResourceBlogFragment on ContentfulBlogPost {
    __typename
    id
    title
    slug
    published
    category
  }
`;

export const ResourceListFragment = graphql`
  fragment ResourceListFragment on ContentfulBlockResourceList {
    __typename
    id
    title
    customHeadingLinkText
    headingLink {
      title
      slug
    }
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
