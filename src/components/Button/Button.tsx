import React from "react";
import classnames from "classnames";
import { graphql, Link } from "gatsby";
import { XOR } from "ts-xor";

import {
  ButtonPageFragmentFragment,
  ButtonResourceFragmentFragment,
} from "@/graphql/graphql-types";

import styles from "./Button.module.css";

type ButtonVariation = "primary" | "inverted";

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
  readonly variation?: ButtonVariation;
  /**
   * Should the link open in a new window
   */
  readonly external?: boolean;
  /**
   * An id associated with the button
   */
  readonly id?: string;
}

interface ButtonPageProps extends ButtonPageFragmentFragment {
  variation?: ButtonVariation;
}

interface ButtonResourceProps extends ButtonResourceFragmentFragment {
  variation?: ButtonVariation;
}

export type ButtonProps = XOR<
  BaseButtonProps,
  XOR<ButtonPageProps, ButtonResourceProps>
>;

export function Button({
  __typename,
  title,
  url,
  variation = "primary",
  external,
  id,
  media,
}: ButtonProps) {
  const buttonClasses = classnames(styles.button, styles[variation], {
    [styles.kindful]: id?.includes("kindful"),
  });

  const isExternal = external || __typename === "ContentfulResource";

  const baseButtonProps = {
    className: buttonClasses,
    id,
  };

  const externalButtonProps = {
    ...baseButtonProps,
    href: getExternalUrl(),
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const internalButtonProps = {
    ...baseButtonProps,
    to: `${url}`,
  };

  if (isExternal) {
    return <a {...externalButtonProps}>{title}</a>;
  }

  return <Link {...internalButtonProps}>{title}</Link>;

  function getExternalUrl() {
    let href = url;

    if (__typename === "ContentfulResource") {
      if (media) {
        href = media.file?.url;
      }
    }

    return href;
  }
}

export const ButtonPageFragment = graphql`
  fragment ButtonPageFragment on ContentfulPage {
    __typename
    title
  }
`;

export const ButtonResourceFragment = graphql`
  fragment ButtonResourceFragment on ContentfulResource {
    __typename
    title
    url
    media {
      file {
        url
      }
    }
  }
`;
