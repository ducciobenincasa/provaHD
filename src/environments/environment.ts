// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost/etruriaservice/etruriapi/',
  fieldImageUrl: 'http://localhost/EtruriaFieldImage/',
  fieldDataSheetUrl: 'http://localhost/EtruriaFieldDataSheet/',
  chatUrl: 'http://10.0.127.12:9048/chathub',
  signalRUrl: 'http://10.0.127.12:9048/etruriapi/',
  etruriareport: 'http://10.0.127.12/EtruriaReport/Home/ReportViewerGet?',
  engineLocationUrl: './assets/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
