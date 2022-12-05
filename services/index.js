/* eslint-disable import/prefer-default-export */
import { request, gql } from "graphql-request";

const graphqlAPI = "https://king-prawn-app-6arrs.ondigitalocean.app/graphql";

export const getPosts = async () => {
  const BLOGS = gql`
    query GetBlogs {
      blogs {
        data {
          id
          attributes {
            title
            date
            body
            url
            categories {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, BLOGS);

  return result.blogs.data;
};
