import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';
import { MyregisterComponent } from './myregister/myregister.component';

export const routes: Routes = [
{

    path: 'login',
    component: LoginComponent

},

{

    path: 'register',
    component: RegisterComponent

},
{

    path: 'myregister',
    component: MyregisterComponent

},

{

    path: 'home',
    component: HomeComponent

},
{
 path:'loginTest',
 component: LoginTestComponent
},
{
path: 'otherform',
component: OtherFormComponent
},
{
path: 'register',
component: RegisterComponent
},
{
path: 'othercb',
component: OtherFormCbComponent
},
{
path: '', redirectTo: 'home', pathMatch: 'full'
}

   



];
