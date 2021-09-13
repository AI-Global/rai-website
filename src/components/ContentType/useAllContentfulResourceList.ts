import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulResourceList() {
  const query = useStaticQuery(graphql`
    query AllContentfulResourceList {
      result: allContentfulBlockResourceList {
        nodes {
          ...ResourceListFragment
        }
      }
    }
  `);

  return query?.result;
}
