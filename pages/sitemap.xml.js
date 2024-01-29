//pages/sitemap.xml.js
import config from "@config/config.json";
import { getListPage, getSinglePage } from "@lib/contentParser";
const { blog_folder } = config.settings;
const BASE_URL = process.env.BASE_URL;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
      <url>
        <loc>${`${BASE_URL}/posts`}</loc>
      </url>
      <url>
      <loc>${`${BASE_URL}/categories`}</loc>
    </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/posts/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const homepage = await getListPage("content/_index.md");
  const posts = getSinglePage(`content/${blog_folder}`);

  const postsData = posts.map((post) => ({
    slug: post.slug,
    content: post.content.replace(/\r?\n|\r/g, "").slice(0, 200),
    ...post.frontmatter,
  }));

  console.log(postsData);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(postsData);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
