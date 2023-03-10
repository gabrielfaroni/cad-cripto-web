import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';

@NgModule({
  declarations: [AppComponent, ListagemComponent, DetalheComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// LEMBRANDO QUE A COMUNICAÇÃO DO BACK COM O FRONT É FEITA COM JSON NORMALMENTE, A PLATAFORMA FAZ A CONVERSÃO
