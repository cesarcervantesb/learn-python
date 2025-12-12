import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  View,
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {


  // Framework7 Parameters
  const f7params = {
    name: 'Learn Python', // App name
      theme: 'auto', // Automatic theme detection
      // App store
      store: store,
      // App routes
      routes: routes,
      // Navbar settings
      navbar: {
        hideOnPageScroll: false,
        iosCenterTitle: true,
        mdCenterTitle: true,
      },
      version: '1.0.0',
      on: {
        online: () => {

        },
        offline: () => {
          f7.dialog.alert(`No hay conexión a internet`, undefined, () => {
            // Callback OK
          });
        },
        loadSettings: () => {

        },
        exitApp: () => {
          f7.dialog.confirm(`¿Estás seguro de que deseas salir de la aplicación?`, `Salir`, () => {
            // Callback OK
            window.close();
          }, () => {
            // Callback Cancel
          });
        }
      }
  };

  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

    </App>
  );
}
export default MyApp;