import React from "react";
import { Button, ButtonProps } from "@/components/Button";
import { Maybe, Scalars } from "@/graphql/graphql-types";

interface ContentfulButtonProps {
  action: {
    title?: Maybe<Scalars["String"]>;
    externalUrl?: Maybe<Scalars["String"]>;
    external?: Maybe<Scalars["Boolean"]>;
    enabled?: Maybe<Scalars["Boolean"]>;
    entrySlug?: Maybe<Scalars["String"]>;
    variation?: ButtonProps["variation"];
  };
}

export function ContentfulButton({ action }: ContentfulButtonProps) {
  const { title, external, externalUrl, enabled, entrySlug } = action;
  const url = external ? externalUrl : entrySlug;

  if (!enabled || !title || !url) {
    return <></>;
  }

  return (
    // @ts-expect-error TODO: remove this component...
    <Button
      {...(action as ButtonProps)}
      url={url}
      external={external || entrySlug?.startsWith("//assets")}
    />
  );
}
