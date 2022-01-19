// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              nickname
              bio
              photo
              contacts {
                linkedin
                github
                twitter
                email
                codepen
                polywork
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
