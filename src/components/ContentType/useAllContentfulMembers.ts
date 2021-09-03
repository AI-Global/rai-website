import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulMembers() {
  const query = useStaticQuery(graphql`
    query AllContentfulMembers {
      result: allContentfulBlockMembers {
        nodes {
          ...MembersBlockFragment
        }
      }
    }
  `);

  return query?.result;
}
