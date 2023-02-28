import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { ListagemService } from './service/listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {            //oninit é que quando iniciar, vamos usar o ngOninit e ai a bala dispara.
  constructor(private moedaService: ListagemService) { }     //precisamos de dois métodos para buscar do back, O Subscribe e o Observable, juntamente com o httpClient. Obs e httpcli tao em component
  
  moedasExibirNoHtml: Moeda[] = [];                         // O typescript exige que vc inicie a variavel, por isso colocamos moeda[] = []
  teste:number = 14;
  
  ngOnInit(): void {
       
    this.moedaService
    .obterMoedas()                          
    .subscribe((moedasVindoDaApi: Moeda[])=> {                        //subscribe é um métoodo para receber um método, moedas recebe Moeda[]  ele se inscreve e espera a informação voltar,
                                                                      // O observable espera ela voltar e dá um sinal de sim para o subscribe, ele apenas observa e dá um sinal verde
                                                                      // aqui estou atirando a bala.
                                                                      // proxy faz o intermedio entre back e front, nao consegue ir direto sem ele.
                                                                      // service acessa a api, back end. O component se inscreve(subscribe) e tem seu html, css, ts.
                                                                      // moedaService : significa que é do tipo ListagemService    : = do tipo, nao que recebe

      this.moedasExibirNoHtml = moedasVindoDaApi
      debugger;
  
                            
  
  })
  }
}
