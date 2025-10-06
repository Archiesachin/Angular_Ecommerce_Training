import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ContactUs } from './pages/contact-us/contact-us';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    {path:"", component:Home}, 
    {path:"contact-us", component:ContactUs},
    {path:"cart", component:Cart},

];
