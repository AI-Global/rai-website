import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulContentList() {
  const query = useStaticQuery(graphql`
    query AllContentfulBlockContentList {
      result: allContentfulBlockContentList {
        nodes {
          pageUsage: page {
            title
          }
          ...ContentListFragment
        }
      }
    }
  `);

  return query?.result;
}
