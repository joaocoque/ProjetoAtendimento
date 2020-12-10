import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarAtendComponent } from './criar-atend/criar-atend.component';
import { ListarAtendComponent } from './listar-atend/listar-atend.component';
import { DetalhesAtendComponent } from './detalhes-atend/detalhes-atend.component';
import { AtualizarAtendComponent } from './atualizar-atend/atualizar-atend.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarAtendComponent,
    ListarAtendComponent,
    DetalhesAtendComponent,
    AtualizarAtendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
