import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Atendimento } from '../atend';
import { AtendService } from '../atend.service';

@Component({
  selector: 'app-listar-atend',
  templateUrl: './listar-atend.component.html',
  styleUrls: ['./listar-atend.component.css']
})
export class ListarAtendComponent implements OnInit {

  atendimentos!: Atendimento[];

  constructor(private atendService: AtendService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAtendimentos();
  }

  private getAtendimentos(){
    this.atendService.getAtendimentosList().subscribe(data => {
      this.atendimentos = data;
    });
  }

  atendimentoDetails(id: number){
    this.router.navigate(['detalhes-atend', id]);
  }

  updateAtendimento(id: number){
    this.router.navigate(['atualizar-atend', id]);
  }

  deleteAtendimento(id: number){
    this.atendService.deleteAtendimento(id).subscribe( data => {
      console.log(data);
      this.getAtendimentos();
    })
  }
}