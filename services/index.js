/* eslint-disable import/prefer-default-export */
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

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
