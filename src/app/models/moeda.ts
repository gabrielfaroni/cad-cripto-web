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