import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { EstagioService } from './service/estagio.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {            //oninit é que quando iniciar, vamos usar o ngOninit e ai a bala dispara.
  constructor(private service: EstagioService) { }     //precisamos de dois métodos para buscar do back, O Subscribe e o Observable, juntamente com o httpClient. Obs e httpcli tao em component

  ngOnInit(): void {
       
    this.service
    .obterMoedaPeloId(4)             // como nosso id é number, colocamos lá number em service.                    
    .subscribe((moedaDetalhe: Moeda) => {       //subscribe é um métoodo para receber um método, moedas recebe Moeda[]  ele se inscreve e espera a informação voltar,
                                            // O observable espera ela voltar e dá um sinal de sim para o subscribe, ele apenas observa e dá um sinal verde
                                            // aqui estou atirando a bala.

      var teste = moedaDetalhe;
      debugger;
  
                            
  
  })
  }
}
