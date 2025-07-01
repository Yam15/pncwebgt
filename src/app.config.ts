import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import {initializeApp} from 'firebase/app'
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestore} from '@angular/fire/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAXiCpMxT_-NDsDnPdZJXwk6FReK0NrpV8",
  authDomain: "pncwebgt.firebaseapp.com",
  projectId: "pncwebgt",
  storageBucket: "pncwebgt.firebasestorage.app",
  messagingSenderId: "922076116267",
  appId: "1:922076116267:web:1c82d1b5adb546e58c416e"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        importProvidersFrom(
            HttpClient,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestore

        ),
    ]
};
