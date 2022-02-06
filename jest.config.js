//The setupTestFrameworkScriptFile entry tells Jest to go ahead
//and “Run the file called src/tests/jestSetup.js in the root of
//this project before running any tests.”

//Jest supports many other configuration options: https://jestjs.io/docs/configuration

module.exports = {
  setupTestFrameworkScriptFile: './src/tests/jestSetup.js',
};
