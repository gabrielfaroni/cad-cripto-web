import { TestBed } from '@angular/core/testing';

import * as listagemService from './listagem.service';

describe('ListagemService', () => {
  let service: listagemService.ListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listagemService.ListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
