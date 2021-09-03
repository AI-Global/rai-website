import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";

import styles from "./Button.module.css";

export interface ButtonProps {
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

export function Button({
  title,
  url,
  variation = "primary",
  external,
  id,
}: ButtonProps) {
  const buttonClasses = classnames(styles.button, styles[variation], {
    [styles.kindful]: id?.includes("kindful"),
  });
  const buttonProps = {
    className: buttonClasses,
    id,
  };

  if (external) {
    return (
      /**
       * Disabling props spreading as we want to share props
       * betweeen both returns.
       */
      // eslint-disable-next-line react/jsx-props-no-spreading
      <a {...buttonProps} href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    );
  }

  return (
    /**
     * Disabling props spreading as we want to share props
     * betweeen both returns.
     */
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...buttonProps} to={url}>
      {title}
    </Link>
  );
}
