import { Filme } from "./Filme"

export class Catalogo{
    public filmes:Filme[]=[]

    adicionarFilme(filme:Filme){
        this.filmes.push(filme)
    }

    listarFilmes(){
        this.filmes.forEach(filme => {
            console.log(`Titulo:${filme.titulo}, Diretor: ${filme.diretor}, Ano lançamento: ${filme.anoLancamento}`)
        });
    }
}