import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginnComponent } from './components/loginn/loginn.component';
import { RegisterComponent } from './components/register/register.component';



export const routes: Routes = [

    {
        path: 'register',
        component: RegisterComponent // Ruta para el registro
    },

    {
        path: 'login',
        component: LoginnComponent

    }
];
