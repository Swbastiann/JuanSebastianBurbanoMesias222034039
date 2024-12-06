import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterBookComponent } from './components/register-book/register-book.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'register-book', component: RegisterBookComponent },
]
