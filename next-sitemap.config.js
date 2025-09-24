/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://atiye-beauty-studio.de',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/rechtliches/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/rechtliches/'],
      },
    ],
    additionalSitemaps: [
      'https://atiye-beauty-studio.de/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }

    // Main pages get high priority
    if (['/leistungen', '/preise', '/kontakt', '/termin'].includes(path)) {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'weekly';
    }

    // FAQ and About pages get medium priority
    if (['/faq', '/ueber-uns'].includes(path)) {
      customConfig.priority = 0.8;
      customConfig.changefreq = 'monthly';
    }

    return customConfig;
  },
};
