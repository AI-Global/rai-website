import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulTestimonialSliders() {
  const query = useStaticQuery(graphql`
    query AllContentfulTestimonialSliders {
      result: allContentfulBlockTestimonialSlider {
        nodes {
          ...TestimonialSliderFragment
        }
      }
    }
  `);

  return query?.result;
}
