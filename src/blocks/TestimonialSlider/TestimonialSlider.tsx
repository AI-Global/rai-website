import React from "react";
import { graphql } from "gatsby";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Testimonial } from "@/components/Testimonial";
import { Slider } from "@/components/Slider";
import { RichText, RichTextContent } from "@/components/RichText";
import { Container } from "@/components/Container";
import { TestimonialSliderFragmentFragment } from "@/graphql/graphql-types";

import styles from "./TestimonialSlider.module.css";

export function TestimonialSlider({
  title,
  subtitle,
  content,
  slides,
}: TestimonialSliderFragmentFragment) {
  return (
    <Container>
      <div className={styles.header}>
        <Heading as="h3">{title}</Heading>
        {subtitle && <Text size="large">{subtitle}</Text>}
      </div>
      {slides && (
        <Slider
          slides={slides.map((slide) => (
            <Testimonial {...slide} />
          ))}
        />
      )}
      {content && (
        <div className={styles.footer}>
          <RichText content={content as RichTextContent} />
        </div>
      )}
    </Container>
  );
}

export const TestimonialSliderFragment = graphql`
  fragment TestimonialSliderFragment on ContentfulBlockTestimonialSlider {
    __typename
    id
    title
    subtitle
    content {
      raw
    }
    slides {
      ...TestimonialFragment
    }
  }
`;
