/** @type {import('next').NextConfig} */
/* eslint-disable import/no-extraneous-dependencies */

const nextTranslate = require('next-translate-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./i18n.config');

const nextConfig = {
  output: 'standalone',
  i18n,
  eslint: {
    dirs: ['.'],
  },
  publicRuntimeConfig: {
    WEBSITE_URL: process.env.WEBSITE_URL,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextTranslate(nextConfig));
