# Repo for Krishna's Website

This repo contains the code that is being used

---

## Stack

- Now
- NextJS 11
- NextAuth (user authentication)
- Markdown
- typescript 4
- tailwind css 3
- GraphQL
- prismic (CMS)
- MongoDB (cloud)
- Vercel (serverless func)
- Next intl (langauge switch)
- Cloud s3
- Amplify

---

#### usefull links

- https://krishna.prismic.io/graphql
- https://medium.com/geekculture/prismic-io-with-next-js-and-graphql-getting-started-f9e7986b39e2
-

```graphql
query allHomePages {
  allBlogs {
    edges {
      node {
        title
      }
    }
  }
}
```

---

## Want to use this project?

After forking the project run:

```
npm install
```

```
npm run dev
```

## Tips for Netlify fans

There are two ways you can deploy this site to Netlify:

- generate static folder using below command and upload the zip to your domain on Netlify

```
npm run build:static
```

If you face any issue while refreshing the routes, you can modify next.config.js

If your blog name is writings/comparision-operaror-in-javascript.md you can add code as
shown below, becuase writings/[slug].js looks for slug which can be passed.

```
exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  return {
    '/about': { page: '/about' },
    '/uses': { page: '/uses' },
    '/': { page: '/' },
    '/writings/comparision-operaror-in-javascript': { page:'/writings/[slug]', query: { slug: 'comparision-operaror-in-javascript' }},
    }
}
```
