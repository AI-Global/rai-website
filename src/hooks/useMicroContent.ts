import { useStaticQuery, graphql } from "gatsby";
import { ContentfulMicroContent } from "@/graphql/graphql-types";

export function useMicroContent(filter?: string): ContentfulMicroContent[] {
  const query = graphql`
    query AllContentfulMicroContentQuery {
      microContent: allContentfulMicroContent {
        nodes {
          key
          value {
            raw
            references {
              ... on ContentfulAsset {
                id
                contentful_id
                title
              }
              ... on ContentfulPage {
                id
                contentful_id
                slug
                title
              }
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  if (!data) {
    return [];
  }

  const { nodes } = data?.microContent;

  if (filter) {
    return nodes.filter(({ key }: ContentfulMicroContent) => key === filter);
  }

  return nodes;
}
