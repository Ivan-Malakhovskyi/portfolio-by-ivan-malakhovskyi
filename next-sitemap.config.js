/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://portfolio-by-ivan-malakhovskyi.vercel.app/en",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
