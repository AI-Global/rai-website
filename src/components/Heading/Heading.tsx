import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Heading.module.css";

interface HeadingProps {
  readonly as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  as = "h2",
  children,
}: PropsWithChildren<HeadingProps>) {
  const headingClass = classnames(styles.heading, styles[as]);
  const Element = as;

  return <Element className={headingClass}>{children}</Element>;
}
