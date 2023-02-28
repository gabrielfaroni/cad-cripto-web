export interface Moeda {
    id: number,
    nome: string
    paridade: string[],
    corretoras: string[],
    precoCompraVenda: number,
    unidadeMonetariaCompraVenda: string,
    descricao: string

}
// isso aqui é pra saber oq ele vai requisitar, no caso string, number, etc


 /* o arquivo proxy.config.json é para  intermedio para back e front  */




 // essa pasta é importante na parte de saber oq está chegando, em component.html por exemplo na hora de colocar moeda.id, moeda.nome ele só recebe por causa daqui.

 // isso aqui serve só pra saber oq ele esta recebendo, e os nomes id, nome, paridade, corretoras, etc tem que ser os mesmos que estão no back.
 // esse export serve só pra falar oq está vindo, nao tá exportando 