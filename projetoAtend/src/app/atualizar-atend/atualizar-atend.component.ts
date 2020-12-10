import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Atendimento } from '../atend';
import { AtendService } from '../atend.service';

@Component({
  selector: 'app-atualizar-atend',
  templateUrl: './atualizar-atend.component.html',
  styleUrls: ['./atualizar-atend.component.css']
})
export class AtualizarAtendComponent implements OnInit {

  id!: number;
  atendimentos: Atendimento[] = [];
  atendimento: any;


  constructor(private atendService: AtendService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.atendService.getAtendimentoById(this.id).subscribe(data => {
      this.atendimento = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.atendService.updateAtendimento(this.id, this.atendimento).subscribe( data =>{
      this.goToAtendimentoList();
    }, error => console.log(error));
  }

  goToAtendimentoList(){
    this.router.navigate(['/atendimentos']);
  }
}