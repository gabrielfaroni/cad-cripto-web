import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root',
})
export class EstagioService {
  constructor(private requisicaoApi: HttpClient) {} // esse {$id} tem que informar de onde ta vindo, ai colocamos como parametro id: number, id do tipo number por exemplo

  obterMoedaPeloId(id: number): Observable<Moeda> {
    // dessa forma atual chamamos de forma detalhada, 2, 3 4, só trocando no   obterMoedaPeloId() de component

    return this.requisicaoApi.get<Moeda>(
      `/api/cripto/obter-moeda/peloid?id=${id}`
    ); //  obterMoedaPeloId()  ('/api/cripto/obter-moeda/peloid?id=4')  .obterMoedaPeloId()  assim chamamos o 4
  }
}

// LEMBRANDO QUE A COMUNICAÇÃO DO BACK COM O FRONT É FEITA COM JSON NORMALMENTE, A PLATAFORMA FAZ A CONVERSÃO

