import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacoesModule } from './informacoes/informacoes.module';
import { CepComponent } from './components/cep/cep.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CepComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InformacoesModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
