const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withCSS(
    withTypescript(
        withBundleAnalyzer({
            analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
            analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/server.html'
                },
                browser: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/client.html'
                }
            }
        })
    )
);
