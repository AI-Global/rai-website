/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
          category
        }
      }
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `).then(({ data }) => {
    // Generate our blog pages
    data.allContentfulBlogPost.nodes.forEach((node) => {
      const getCategory = () => {
        if (node.category === "News") {
          return "news";
        }

        return "blog";
      };

      createPage({
        path: `/${getCategory()}/${node.slug.toLowerCase().replace(/ /g, "-")}`,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });

    // Generate our pages
    data.allContentfulPage.nodes.forEach((node) => {
      /**
       * Create a context object that will pass into our
       * template component. This will be passed in as a
       * pageContext prop
       */
      const context = {
        slug: node.slug,
      };

      /**
       * Set the default template component to render. We leave
       * this as a "let" as we want to be able to change it.
       */
      let component = path.resolve(`./src/templates/page.tsx`);

      /**
       * Create a list of pages that use the blog post
       * template
       */
      const blogPages = ["news", "blog"];

      /**
       * Set up the component and the context for our blog
       * post pages.
       */
      if (blogPages.includes(node.slug)) {
        component = path.resolve(`./src/templates/blog.tsx`);

        if (node.slug === "news") {
          context.category = "News";
        }

        if (node.slug === "blog") {
          context.category = "Blog";
        }
      } else if (fs.existsSync(`./src/templates/${node.slug}.tsx`)) {
        /**
         * Set up the component if a file matching
         * the slug exists in templates
         */
        component = path.resolve(`./src/templates/${node.slug}.tsx`);
      }

      createPage({
        path:
          node.slug === "home"
            ? "/"
            : `/${node.slug.toLowerCase().replace(/ /g, "-")}`,
        component,
        context,
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  config.resolve.alias = {
    ...config.resolve.alias,
    "@/components": path.resolve(__dirname, "src/components"),
    "@/hooks": path.resolve(__dirname, "src/hooks"),
    "@/blocks": path.resolve(__dirname, "src/blocks"),
  };

  actions.replaceWebpackConfig(config);
};
