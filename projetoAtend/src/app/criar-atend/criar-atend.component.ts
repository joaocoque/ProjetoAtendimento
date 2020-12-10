import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atendimento } from '../atend';
import { AtendService } from '../atend.service';

@Component({
  selector: 'app-criar-atend',
  templateUrl: './criar-atend.component.html',
  styleUrls: ['./criar-atend.component.css']
})
export class CriarAtendComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  atendimento: any;
  
  constructor(private atendService: AtendService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAtendimento(){
    this.atendService.createAtendimento(this.atendimento).subscribe( data =>{
      console.log(data);
      this.goToAtendimentoList();
    },
     error => console.log(error));
  }

  goToAtendimentoList(){
    this.router.navigate(['/atendimentos']);
  }
  
  onSubmit(){
    console.log(this.atendimento);
    this.saveAtendimento();
  }
}