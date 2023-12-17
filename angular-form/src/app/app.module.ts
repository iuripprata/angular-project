import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';

import { SiteLeadComponent } from './site-lead/site-lead.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LeadService } from './services/site-lead.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Adicione o módulo HTTP
    AngularFirestoreModule,
  ],
  providers: [LeadService], // Adicione o serviço aos provedores
  bootstrap: [AppComponent]
})
export class AppModule { }
