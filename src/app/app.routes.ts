import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';
import { Mens } from './pages/mens/mens';
import { Women } from './pages/women/women';
import { NewArrival } from './pages/new-arrival/new-arrival';
import { Checkout } from './pages/checkout/checkout';
import { User } from './pages/user/user';

export const routes: Routes = [
    {path:"", component:Home}, 
    {path:"cart", component:CartComponent},
    {path:"user", component:User},
    {path:"mens", component:Mens},
    {path:"women", component:Women},
    {path:"new-arrival", component:NewArrival},
    {path:"checkout", component:Checkout},

];
