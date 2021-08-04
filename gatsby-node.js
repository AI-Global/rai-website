/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

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
        path: `/${getCategory()}/${node.slug.replace(/ /g, "-")}`,
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
       * Create a list of pages that are "safe", meaning that
       * they are fully converted to Contentful. Hopefully we
       * can remove this soon.
       */
      const safePages = [...blogPages, "certification"];

      /**
       * If the slug is not in the safePages array, we
       * don't want to create a page. This prevents us
       * from having half baked Contentful pages.
       */
      if (!safePages.includes(node.slug)) {
        return;
      }

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
      }

      createPage({
        path: `/${node.slug.replace(/ /g, "-")}`,
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
    components: path.resolve(__dirname, "src/components"),
    styles: path.resolve(__dirname, "src/styles"),
  };

  actions.replaceWebpackConfig(config);
};
