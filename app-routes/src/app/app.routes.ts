import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';
import { Component } from '@angular/core';

export const routes: Routes = [

    {
        path:'', //redirige al local-host
        component: HomePageComponent
    },
    {
        path:'Auth', //mostrar pagina de autenticacion
        component:AuthPageComponent
    },
    {
        path:'sidebar',//mostrar pagina de sidebar
        component:SidebarPageComponent
    },

];



