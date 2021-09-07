import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { XOR } from "ts-xor";
import classnames from "classnames";

import { AvatarFragmentFragment } from "@/graphql/graphql-types";

import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";

import styles from "./Avatar.module.css";

interface AvatarWithImageProps extends AvatarFragmentFragment {
  readonly name: string;
}

interface AvatarWithoutImageProps {
  readonly name: string;
}

export function Avatar({
  name,
  gatsbyImageData,
}: XOR<AvatarWithImageProps, AvatarWithoutImageProps>) {
  const image = getImage(gatsbyImageData);
  const avatarClass = classnames(styles.avatar, {
    [styles.icon]: !image,
  });
  const label = `${name}'s Avatar Image`;

  if (!image) {
    return (
      <div className={avatarClass} aria-label={label}>
        <Icon icon="User" size="large" />
      </div>
    );
  }

  return (
    <div className={avatarClass}>
      <Image
        gatsbyImageData={gatsbyImageData}
        title={label}
        description={label}
      />
    </div>
  );
}

export const AvatarFragment = graphql`
  fragment AvatarFragment on ContentfulAsset {
    gatsbyImageData(width: 150, placeholder: BLURRED, formats: [AUTO, WEBP])
  }
`;
