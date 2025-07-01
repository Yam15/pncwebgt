import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { authGuard } from './guards/auth.guard';

// Impide que naveguen sin iniciar sesion 
export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty, 
         canActivate: [authGuard], 
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
