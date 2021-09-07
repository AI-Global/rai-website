import React, { PropsWithChildren } from "react";

import styles from "./Banner.module.css";

interface BannerProps {
  readonly ariaLabel?: string;
}

export function Banner({
  children,
  ariaLabel,
}: PropsWithChildren<BannerProps>) {
  return (
    <div className={styles.banner} role="alert" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
