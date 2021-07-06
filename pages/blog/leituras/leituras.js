var resenhas = [];

resenhas.push(`
<h2>14 Hábitos de desenvolvedores Altamente Produtivos</h2>
<small class="thin">Finalizei a leitura em 14/06/2021</small>
<br>
Livro de leitura rápida, li duas vezes em uma semana, na segunda vez fiz algumas anotações sobre alguns
 pontos que são levantados ao longo do livro. Indico pra quem esteja buscando novos hábitos e como ser 
 um profissional melhor. Apesar de ser uma leitura bacana não traz nada de muito novo também não é um 
 livro técnico. Uma coisa que eu gostei são os 'TO-DOS'.
 `);

resenhas.push(`
<h2>Teto para Dois</h2>
<small class="thin">Finalizei a leitura em 06/06/2021</small>
<br>
Romance pra aquecer o coração. 
Pode parecer um livro bobinho com uma premissa estilo comédia romântica da sessão da tarde, 
mas aborda questões bem mprofundas como relacionamentos abusivos 
- e também é um  drama/cómedia romântica da melhor categoria.`)


function buscarResenha(index){
    return document.getElementById("resumo-livro").innerHTML = resenhas[index];
}