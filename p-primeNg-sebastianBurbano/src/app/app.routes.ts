import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { OtherFormComponent } from './other-form/other-form.component';

export const routes: Routes = [

    {   path: 'home',
        component: HomeComponent},

    {   path: 'login',
        component: LoginComponent},

    {   path: 'register',
        component: RegisterComponent},

    {   path: 'loginTest',
        component: LoginTestComponent
    },    
    {   
        path: 'otherform',
        component: OtherFormComponent
    },

    {   path: 'otherFormCb',
        component: OtherFormComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
        
];
