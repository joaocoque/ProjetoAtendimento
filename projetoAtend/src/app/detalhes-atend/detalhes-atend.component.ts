import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from '../atend';
import { AtendService } from '../atend.service';

@Component({
  selector: 'app-detalhes-atend',
  templateUrl: './detalhes-atend.component.html',
  styleUrls: ['./detalhes-atend.component.css']
})
export class DetalhesAtendComponent implements OnInit {

  id!: number;
  atendimento!: Atendimento;
  constructor(private route: ActivatedRoute, private atendService: AtendService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    
    this.atendService.getAtendimentoById(this.id).subscribe( data => {
      this.atendimento = data;
    });
  }

}