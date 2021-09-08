import React, { useState } from "react";
import classnames from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { Breakpoints, useResizeObserver } from "@/hooks/useResizeObserver";
import { AnimatePresence, motion } from "framer-motion";

import { NavigationItemFragment } from "@/graphql/graphql-types";
import styles from "./Navigation.module.css";

export function Navigation() {
  const { menu } = useStaticQuery(graphql`
    query MainMenuQuery {
      menu: contentfulNavigation(title: { eq: "Main Navigation" }) {
        items {
          ...NavigationItem
        }
      }
    }
  `);

  const { ref, width } = useResizeObserver();
  const isLarge = width >= Breakpoints.large;

  return (
    <header ref={ref} className={styles.navigation}>
      <Container className={styles.container}>
        <Link to="/" aria-label="Responsible AI - Home Page">
          <Logo size={isLarge ? "base" : "small"} />
        </Link>

        <nav className={isLarge ? styles.large : undefined}>
          {isLarge ? (
            <Menu items={menu.items} />
          ) : (
            <MobileMenu items={menu.items} />
          )}
        </nav>
      </Container>
    </header>
  );
}

interface MobileMenuProps {
  items: NavigationItemFragment[];
}

function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const closeButtonClass = classnames(styles.button, styles.buttonOpen);

  return (
    <>
      <button
        type="button"
        aria-label="Open mobile navigation"
        onClick={handleToggle}
        className={styles.button}
      >
        <Icon icon="Menu" size="large" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, top: "-10vh" }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: "-10vh" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={styles.mobileContainer}
          >
            <Menu items={items} />
            <button
              type="button"
              aria-label="Close mobile navigation"
              onClick={handleToggle}
              className={closeButtonClass}
            >
              <Icon icon="XCircle" size="large" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  function handleToggle() {
    setOpen(!open);
  }
}

interface MenuProps {
  readonly items: NavigationItemFragment[];
}
function Menu({ items }: MenuProps) {
  if (!items) {
    return <></>;
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const linkClass = classnames(styles.link, {
          [styles.linkHighlight]: item.highlight,
        });

        return (
          <li className={styles.item} key={item.title}>
            <Link to={`/${item?.link?.slug}`} className={linkClass}>
              {item.title}
            </Link>

            {item.subLinks && (
              <ul className={styles.subList}>
                {item.subLinks.map((subItem) => {
                  return (
                    <li className={styles.subItem} key={subItem.title}>
                      <Link
                        to={`/${subItem?.link?.slug}`}
                        className={styles.subLink}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export const NavigationItem = graphql`
  fragment NavigationItem on ContentfulNavigationItem {
    title
    highlight
    link {
      slug
    }
    subLinks {
      title
      link {
        slug
      }
    }
  }
`;
