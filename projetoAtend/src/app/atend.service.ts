import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { Atendimento } from './atend';

@Injectable({
  providedIn: 'root'
})

export class AtendService {
  private baseURL = "http://localhost:8080/api/atendimentos";

  constructor(private httpClient: HttpClient) { }
  
  getAtendimentosList(): Observable<Atendimento[]>{
    return this.httpClient.get<Atendimento[]>(`${this.baseURL}`);
  }

  createAtendimento(atendimento: Atendimento): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/atendimentos`, atendimento);
  }

  getAtendimentoById(id: number): Observable<Atendimento>{
    return this.httpClient.get<Atendimento>(`${this.baseURL}/${id}`);
  }

  updateAtendimento(id: number, atendimento: Atendimento): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, atendimento);
  }

  deleteAtendimento(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}