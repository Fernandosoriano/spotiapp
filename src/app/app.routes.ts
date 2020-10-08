import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'search', component: SearchComponent },
    {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: '**', pathMatch: 'full', redirectTo:'home'},

]
//  1 El primer paso para manejar las rutas en angular es crear el archivo app.routes.ts
//  2 El segundo  paso es hacer en este archivo creado la importación :  import {Routes} from '@angular/router';
//  3  Generar  y exportar el array  que tiene las rutas de tu página :  export const ROUTES: Routes = [
//     {path: 'home', component: HomeComponent },
//     {path: 'search', component: SearchComponent },
//     {path: '', pathMatch: 'full', redirectTo:'home'},
//     {path: '**', pathMatch: 'full', redirectTo:'home'},

// ]

//  4 El cuarto paso se relaiza en el app.module.ts
