import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    HttpClientModule // Adicione o módulo HTTP
  ],
  providers: [LeadService], // Adicione o serviço aos provedores
  bootstrap: [AppComponent]
})
export class AppModule { }
