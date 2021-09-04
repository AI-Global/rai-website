import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulJumbotron() {
  const query = useStaticQuery(graphql`
    query AllContentfulJumbotron {
      result: allContentfulBlockJumbotron {
        nodes {
          ...JumbotronFragment
        }
      }
    }
  `);

  return query?.result;
}
