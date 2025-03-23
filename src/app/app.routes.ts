import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoggedInComponent } from './loggedin.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'trusted', component: LoggedInComponent }
];
