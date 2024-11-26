import { Filme } from "./Filme";
import { Catalogo } from "./Catalogo";

function filtrarFilmesPorAno(filmes: Filme[], ano: number): void{
    let novo_filmes:Filme[]=[]
    filmes.forEach(movie => {
        if (movie.anoLancamento>=ano){
            novo_filmes.push(movie)
        }
    });
    novo_filmes.forEach(fil => {
        console.log(`${fil.titulo} , ${fil.anoLancamento}`)
    });
}

let f1=new Filme("A Origem","Christopher Nolan",2010)
let f2=new Filme("Interestelar","Christopher Nolan",2014)
let f3=new Filme("Matrix","Lana e Lilly Wachowski",1999)
let f4=new Filme("Pulp Fiction:Tempo de Violência","Quentin Ta0rantino",1994)
let f5=new Filme("Duna","Denis Villeneuve",2021)

let catalogo=new Catalogo()
catalogo.adicionarFilme(f1)
catalogo.adicionarFilme(f2)
catalogo.adicionarFilme(f3)
catalogo.adicionarFilme(f4)
catalogo.adicionarFilme(f5)

catalogo.listarFilmes()


filtrarFilmesPorAno(catalogo.filmes,2000)