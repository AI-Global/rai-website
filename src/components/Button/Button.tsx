import React from "react";
import classnames from "classnames";
import { graphql, Link } from "gatsby";
import { XOR } from "ts-xor";

import { ButtonPageFragmentFragment } from "@/graphql/graphql-types";

import styles from "./Button.module.css";

interface BaseButtonProps {
  /**
   * The content of the Button. We use a title prop over
   * children as we want to limit the content of a button
   * to a string.
   */
  readonly title: string;
  /**
   * The URL a button will link to.
   */
  readonly url: string;
  readonly variation?: "primary" | "inverted";
  /**
   * Should the link open in a new window
   */
  readonly external?: boolean;
  /**
   * An id associated with the button
   */
  readonly id?: string;
}

export type ButtonProps = XOR<BaseButtonProps, ButtonPageFragmentFragment>;

export function Button({
  __typename,
  title,
  slug,
  url,
  variation = "primary",
  external,
  id,
}: ButtonProps) {
  const buttonClasses = classnames(styles.button, styles[variation], {
    [styles.kindful]: id?.includes("kindful"),
  });

  const baseButtonProps = {
    className: buttonClasses,
    id,
  };

  const externalButtonProps = {
    ...baseButtonProps,
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const internalButtonProps = {
    ...baseButtonProps,
    to: __typename === "ContentfulPage" ? `/${slug}` : `${url}`,
  };

  if (external) {
    return <a {...externalButtonProps}>{title}</a>;
  }

  return <Link {...internalButtonProps}>{title}</Link>;
}

export const ButtonPageFragment = graphql`
  fragment ButtonPageFragment on ContentfulPage {
    __typename
    title
    slug
  }
`;
