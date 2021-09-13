import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulCallToAction() {
  const query = useStaticQuery(graphql`
    query AllContentfulCallToAction {
      result: allContentfulBlockCallToAction {
        nodes {
          ...CallToActionFragment
        }
      }
    }
  `);

  return query?.result;
}
