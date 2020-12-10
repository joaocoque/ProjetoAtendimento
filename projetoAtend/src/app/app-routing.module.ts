import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAtendComponent } from './listar-atend/listar-atend.component';
import { CriarAtendComponent } from './criar-atend/criar-atend.component';
import { AtualizarAtendComponent } from './atualizar-atend/atualizar-atend.component';
import { DetalhesAtendComponent } from './detalhes-atend/detalhes-atend.component';

const routes: Routes = [
  {path: 'atendimentos', component: ListarAtendComponent},
  {path: 'criar-atend', component: CriarAtendComponent},
  {path: '', redirectTo: 'atendimentos', pathMatch: 'full'},
  {path: 'atualizar-atend/:id', component: AtualizarAtendComponent},
  {path: 'detalhes-atend/:id', component: DetalhesAtendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
