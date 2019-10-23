// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript',
      'karma-jasmine-html-reporter'
    ],
    files: [
      {pattern: "src/**/*.ts"},
      { pattern: './src/json-serializer/test-data/jsonSerializerData.js', included: true, served: true, watched: false, nocache: false },
      { pattern: './src/dal/test-data/siteDirectoryData.js', included: true, served: true, watched: false, nocache: false },
      { pattern: './src/dal/test-data/rdlData.js', included: true, served: true, watched: false, nocache: false },
      { pattern: './src/dal/test-data/iterationData.js', included: true, served: true, watched: false, nocache: false },
      { pattern: './src/dal/test-data/emailResponseData.js', included: true, served: true, watched: false, nocache: false },
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.spec.json",
    },
    reporters: ['progress', 'kjhtml'],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    browsers: ["Chrome"],
    // logLevel: config.LOG_DEBUG,
  });
};
