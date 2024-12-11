const isProd = process.env.NODE_ENV === 'production';

const repoName = 'NewsPaper'; // Replace with your repository name

module.exports = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};
