import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';               // as importações são para o projeto entender de onde está vindo, EstagioService, Oninit, ActivateRoute, Moeda      
import { Moeda } from 'src/app/models/moeda';
import { EstagioService } from './service/estagio.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})                                                                
export class DetalheComponent implements OnInit {           //oninit é que quando iniciar, vamos usar o ngOninit e ai a bala dispara.
                                                            //
  constructor(private service: EstagioService,private ActivatedRoute: ActivatedRoute) { }    // ActivateRoute é responsável por fazer interação com a rota, outra ferramenta do angular.
                                                        //precisamos de dois métodos para buscar do back, O Subscribe e o Observable, juntamente com o httpClient. Obs e httpcli tao em component

  ngOnInit(): void {
       
    
    var idMoeda = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!) // snap é tipo fotografar o id, e paramap é para o id específico, snap na rota, pega um parametro especifico.
                                                                              // esse 'id' vem de path:'detalhar/:id' tá em string o id, esse get é obter, uma função do angular
    var id = 1;                                                               // aqui ele já está pegando da rota o valor de id por isso um string e outro n
                                                                              // "!" serve pra informar que pro app que sempre vai ter valor, se nao dá erro.
    
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
