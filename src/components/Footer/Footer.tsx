import React from "react";
import classnames from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Breakpoints, useResizeObserver } from "@/hooks/useResizeObserver";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { FooterNavigationItemFragment } from "@/graphql/graphql-types";

import { Text } from "@/components/Text";
import styles from "./Footer.module.css";

export function Footer() {
  const { menu } = useStaticQuery(graphql`
    query FooterNavigationQuery {
      menu: contentfulNavigation(title: { eq: "Footer Navigation" }) {
        items {
          ...FooterNavigationItem
        }
      }
    }
  `);

  const { ref, width } = useResizeObserver();
  const isLarge = width >= Breakpoints.large;

  return (
    <footer className={styles.footer} ref={ref}>
      <Container className={styles.container}>
        <Link to="/" aria-label="Responsible AI Home">
          <Logo size={isLarge ? "base" : "small"} variation="inverted" />
        </Link>
        <nav className={styles.nav} aria-label="Footer Navigation">
          <ul className={styles.list}>
            {menu.items.map((item: FooterNavigationItemFragment) => {
              const linkClass = classnames(styles.link, {
                [styles.highlight]: item.highlight,
              });

              return (
                <li className={styles.item} key={item.title}>
                  <Link to={`/${item?.link?.slug}`} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
      <Container>
        <nav className={styles.social} aria-label="Responsible AI Social Media">
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href="https://twitter.com/ResponsibleAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className={styles.link}
              >
                <Icon icon="Twitter" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.linkedin.com/company/responsible-ai-institute/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className={styles.link}
              >
                <Icon icon="Linkedin" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.facebook.com/RAI-Institute-101416012057802"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Facebook"
                className={styles.link}
              >
                <Icon icon="Facebook" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.instagram.com/responsible.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className={styles.link}
              >
                <Icon icon="Instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className={styles.address}>
        <div>
          <Text size="small">
            Responsible AI Institute, 11501 Century Oaks Terrace, 3125, Austin,
            Texas 78758, United States
          </Text>
        </div>
      </Container>
    </footer>
  );
}

export const FooterNavigationItem = graphql`
  fragment FooterNavigationItem on ContentfulNavigationItem {
    title
    highlight
    link {
      slug
    }
  }
`;
