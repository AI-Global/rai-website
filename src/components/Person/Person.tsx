import React, { useState } from "react";
import { graphql } from "gatsby";
import { Avatar } from "@/components/Avatar";
import { Modal } from "@/components/Modal";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { PeopleFragmentFragment } from "@/graphql/graphql-types";

import classnames from "classnames";
import styles from "./Person.module.css";
import { RichText, RichTextContent } from "../RichText";

export function Person({
  name,
  userRole,
  biography,
  photo,
}: PeopleFragmentFragment) {
  const [open, setOpen] = useState(false);

  const personClasses = classnames(styles.person, {
    [styles.hasBio]: biography,
  });

  if (!name) {
    return <></>;
  }

  return (
    <>
      <button type="button" className={personClasses} onClick={handleClick}>
        <Avatar name={name} gatsbyImageData={photo?.gatsbyImageData} />
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          {userRole && <Role role={userRole} />}
        </div>
      </button>

      {biography && (
        <Modal onClose={handleClick} open={open}>
          <Heading as="h3">{name}</Heading>
          {userRole && <Role role={userRole} />}
          <Divider spacing="small" />
          <RichText content={biography as RichTextContent} />
        </Modal>
      )}
    </>
  );

  function handleClick() {
    setOpen(!open);
  }
}

interface RoleProps {
  readonly role: string;
}

function Role({ role }: RoleProps) {
  return <div className={styles.role}>{role}</div>;
}

export const PeopleFragment = graphql`
  fragment PeopleFragment on ContentfulPeople {
    name
    userRole
    biography {
      raw
    }
    photo {
      ...AvatarFragment
    }
  }
`;
