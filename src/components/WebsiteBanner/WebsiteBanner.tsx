import React from "react";
import { Banner } from "@/components/Banner";
import { RichText, RichTextContent } from "@/components/RichText";

import { useMicroContent } from "@/hooks/useMicroContent";

export function WebsiteBanner() {
  const [content] = useMicroContent("Website Banner");

  if (!content?.value) {
    return <></>;
  }

  return (
    <Banner ariaLabel="Important Message">
      <RichText content={content.value as RichTextContent} size="small" />
    </Banner>
  );
}
