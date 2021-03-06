﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion Componentes
import { EmployeeComponent } from './component/employee/employee.component';
import { PersonComponent } from './component/person/person.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { CarComponent } from './component/car/car.component';
import { TemplateComponent } from './component/template/template.component';
import { ChildrenComponent } from './component/children/children.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact/:idContact', component: ContactComponent },//Paso de parametro
    { path: 'employee', component: EmployeeComponent },
    { path: 'person', component: PersonComponent },
    { path: 'car', component: CarComponent },
    { path: 'template', component: TemplateComponent },
    { path: 'children', component: ChildrenComponent },
    { path: '**', redirectTo: '/home'} //Carga cuando se introduce otra ruta
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes
    //,{ enableTracing: true } // <-- debugging purposes only
);