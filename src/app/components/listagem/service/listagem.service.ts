import { HttpClient } from '@angular/common/http'; // é uma biblioteca que auxilia na requisição do back
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Moeda } from 'src/app/models/moeda';

// LEMBRANDO que detalhe e listagem é a parte do front, angular,  e usamos o service pra pegar as informações do back-end, node js.
@Injectable({
  providedIn: 'root',
})
export class ListagemService {
  constructor(private requisicaoApi: HttpClient) {} // private é para saber se o código pode ser exposto ou nao, podia ser público. Regra typescript

  obterMoedas(): Observable<Moeda[]> {
    // aqui pegamos o nome Moeda de moeda.ts, e informamos que é varios por isso o [], isso é para saber oq vamos receber,um string,number etc

    return this.requisicaoApi.get<Moeda[]>(`/api/cripto/obter-moedas`); // get para requisitar do back,porque usamos get no back

    // aqui estou com a bala no revolver
    // lembrando q sao separados service e component para organização também do passo a passo
    // service acessa a api, back end e o component se inscreve(subscribe) e tem seu html, css, ts.
  }
}
