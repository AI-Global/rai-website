import React from "react";
import { graphql } from "gatsby";
import { MembershipLevelFragmentFragment } from "@/graphql/graphql-types";

import styles from "./MembershipLevel.module.css";
import { Emphasis } from "../Emphasis";
import { Icon, IconType } from "../Icon";
import { Button } from "../Button";

export function MembershipLevel({
  title,
  subtitle,
  icon,
  items,
  link,
  customLinkTitle,
}: MembershipLevelFragmentFragment) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {icon && <Icon icon={icon as IconType} size="larger" />}
        <div>
          <div className={styles.title}>
            <Emphasis variation="bold">{title}</Emphasis>
          </div>
          {subtitle}
        </div>
      </div>

      {items?.items && (
        <ul className={styles.list}>
          {items?.items.map((item: string) => {
            return (
              <li key={item} className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon icon="Check" size="small" />
                </div>
                {item}
              </li>
            );
          })}
        </ul>
      )}

      {link && (
        <div className={styles.footer}>
          <Button
            title={customLinkTitle ?? (link?.title as string)}
            url={link?.url as string}
          />
        </div>
      )}
    </div>
  );
}

export const MembershipLevelFragment = graphql`
  fragment MembershipLevelFragment on ContentfulMembershipLevels {
    title
    subtitle
    icon
    items {
      items
    }
    link {
      url
      title
    }
    customLinkTitle
  }
`;
