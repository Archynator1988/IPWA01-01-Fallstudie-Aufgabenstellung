import {Routes } from '@angular/router';
import {RouterModule } from '@angular/router';
import {NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { FormularComponent } from './formular/formular.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationLocalComponent } from './confirmation-local/confirmation-local.component';

export const routes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'content', component: ContentComponent}, // Startseite
    { path: 'formular', component: FormularComponent }, // "Formular"-Seite
    { path: 'confirmation', component: ConfirmationComponent }, // "Confirmation"-Seite
    { path: 'confirmation-local', component: ConfirmationLocalComponent }, // "Confirmation-local"-Seite
    
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)], // Registrierung der Routen
    exports: [RouterModule] // Exportiert das Routing-Modul, um es in AppModule zu verwenden
  })
export class AppRoutingModule { }