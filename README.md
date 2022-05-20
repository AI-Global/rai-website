# 🤖 Responsible AI Website 

This is the repository for the [Responsible AI Website](https://www.responsible.ai/).

This is a [React](https://reactjs.org/) project built using [Gatsby](https://www.gatsbyjs.com/) as a framework, [Contentful](https://www.contentful.com/) as a CMS, and [Storybook](https://storybook.js.org/) as a component playground.

## Getting Started

**Prerequisites**

- `node@12.13.0`. You can use [nvm](https://github.com/nvm-sh/nvm) to manage your node versions.
- Access to Contentful secrets

To get this project set up on your local machine:

```shell
git clone git@github.com:AI-Global/rai-website.git
cd rai-website
npm install
```

To start developing against the project

```shell
npm start
```

After running the `npm start` command, you should have 2 browser tabs open:

```shell
// Gatsby site
http://localhost:8000
// Storybook
http://localhost:8100
```

## Working with Gatsby

`http://localhost:8000/`[🔗](http://localhost:8000)

> Gatsby is a React-based open-source framework for creating websites and apps. It's great whether you're building a portfolio site or blog, or a high-traffic e-commerce store or company homepage.

For more reading about Gatsby, check out their [docs](https://www.gatsbyjs.com/docs/).

## Working with Storybook

`http://localhost:8100/`[🔗](http://localhost:8100)

Ideally, components should be created in isolation. The reason for this is that Components should be as generic as possible to allow for as many use cases as possible. To do this, we use [Storybook](https://storybook.js.org/).

Storybook will allow you to develop and test your components in isolation from the rest of the website.

## Testing

To run tests:

```shell
npm run test
```

When working on a specific component, you can run the tests for that specific component:ß

```shell
npm run test ComponentName
```

### Linting

Responsible AI website project uses `eslint` to run a linter of javascript, typescript, and markdown code.

To run the linter, use:

```
npm run lint
```

### Fragment Colocation

The majority of your components will need data directly from Contentful. When this is the case you will want to use Gatsbys style of [fragment colocation](https://www.gatsbyjs.com/docs/recipes/querying-data/#graphql-query-fragments). This allows you to define your component props through the GraphQL api.

```tsx
fragment ExampleFragment on ExampleType {
  title
  subtitle
  slug
  contnet {
    raw
  }
}

query ExampleQuery {
  allExampleTypes {
    nodes {
      ...ExampleFragment
    }
  }
}
```
