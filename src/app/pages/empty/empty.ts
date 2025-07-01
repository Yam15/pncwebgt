import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-empty',
    standalone: true,
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Empty Page</div>
        <p>Use this page to start from scratch and place your custom content.</p>
        <button (click)="logOut()">Cerrar Sesion</button>
    </div>`
})
export class Empty {
  
  
    authService = inject(AuthService);
    router = inject(Router);

    logOut(){
        this.authService.logLogout()
        .then(() =>
        this.router.navigate(['/auth/login']

        )).catch(error => console.log(error))

        
    }
  
}
