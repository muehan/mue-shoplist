// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD-iPjvdENaVgGX0XeVFmPJxjsHYjSdzJ4',
    authDomain: 'mue-shoplist-dev.firebaseapp.com',
    databaseURL: 'https://mue-shoplist-dev.firebaseio.com',
    projectId: 'mue-shoplist-dev',
    storageBucket: 'mue-shoplist-dev.appspot.com',
    messagingSenderId: '510563882803'
  }
};
