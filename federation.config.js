const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "exercise-tracker",

  exposes: {
    "./web-components": "./src/Exercise/bootstrap.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: ["rxjs/ajax", "rxjs/fetch", "rxjs/testing", "rxjs/webSocket"],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
