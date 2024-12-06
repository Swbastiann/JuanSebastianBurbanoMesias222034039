import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterBookComponent } from './components/register-book/register-book.component';
import { ModifyBookComponent } from './components/modify-book/modify-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { SearchBookComponent } from './components/search-book/search-book.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'register-book', component: RegisterBookComponent },
    { path: 'modify-book', component: ModifyBookComponent},
    { path: 'delete-book', component: DeleteBookComponent},
    { path: 'search-book', component: SearchBookComponent},
    { path: 'show-books', component: ShowBooksComponent},
]
