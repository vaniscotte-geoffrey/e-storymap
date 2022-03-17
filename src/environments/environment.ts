// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'e-storymap',
    appId: '1:689243584170:web:3277f93e758dfc365ac2d3',
    storageBucket: 'e-storymap.appspot.com',
    apiKey: 'AIzaSyBz4QBqZfXqlCxeqNSZg30XhIG72IAx80I',
    authDomain: 'e-storymap.firebaseapp.com',
    messagingSenderId: '689243584170',
    measurementId: 'G-JGJ4PMFM2Z',
  },
  production: false,
  backend: 'http://localhost:8080/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
