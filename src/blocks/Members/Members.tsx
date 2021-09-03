import React from "react";
import { graphql } from "gatsby";
import classNames from "classnames";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { Image } from "@/components/Image";
import { RichText, RichTextContent } from "@/components/RichText";
import {
  MembersBlockFragmentFragment,
  MemberFragmentFragment,
} from "@/graphql/graphql-types";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import styles from "./Members.module.css";

export function Members({
  title,
  showHeadings,
  members,
  postContent,
  footerLink,
  customFooterLinkText,
  headerLink,
  customHeaderLinkText,
}: MembersBlockFragmentFragment) {
  return (
    <Container>
      <div className={styles.header}>
        {headerLink && (
          <Link url={headerLink?.slug as string} icon="ArrowRight">
            {customHeaderLinkText ?? headerLink?.title}
          </Link>
        )}
        <Heading>{title}</Heading>
      </div>
      <Divider />
      {members?.map((member) => (
        <div className={styles.member}>
          <Member
            title={showHeadings ? member.title : undefined}
            members={member.members}
          />
        </div>
      ))}
      {postContent && <RichText content={postContent as RichTextContent} />}
      {footerLink && (
        <Button
          title={customFooterLinkText ?? (footerLink?.title as string)}
          url={footerLink?.slug as string}
        />
      )}
    </Container>
  );
}

export const MembersBlockFragment = graphql`
  fragment MembersBlockFragment on ContentfulBlockMembers {
    __typename
    id
    title
    headerLink {
      slug
      title
    }
    customHeaderLinkText
    showHeadings
    footerLink {
      slug
      title
    }
    customFooterLinkText
    members {
      ...MemberFragment
    }
    postContent {
      raw
    }
  }
`;

function Member({ title, members }: MemberFragmentFragment) {
  const listClasses = classNames(styles.list, {
    [styles.hasThree]: members?.length === 3,
  });

  return (
    <div>
      {title && <Heading as="h3">{title}</Heading>}
      {members && (
        <div className={listClasses}>
          {members.map((member) => (
            <div className={styles.item}>
              <Image {...member} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const MemberFragment = graphql`
  fragment MemberFragment on ContentfulMembersGroup {
    title
    members {
      title
      description
      gatsbyImageData(
        placeholder: TRACED_SVG
        width: 150
        formats: [WEBP, AUTO]
      )
    }
  }
`;
