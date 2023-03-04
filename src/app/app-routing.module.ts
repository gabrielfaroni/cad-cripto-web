import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { ListagemComponent } from './components/listagem/listagem.component';

const routes: Routes = [
  
//path: caminho, ex: http://localhost:4200/detalhar                
{path:'detalhar/:id', component: DetalheComponent}, 
{path:'listagem', component: ListagemComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
