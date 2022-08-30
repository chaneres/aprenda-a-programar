let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let produtos = [produtoA, produtoB, produtoC]

for (let i = 0; i < produtos.length; i++){
    
  if(produtos[i].internacional == true){
    console.log(`a mercadoria ${produtos[i].nome} é internacional e seu valor com imposto de 20% é R$` + produtos[i].valor * 1.2)
   } else {
    console.log(`a mercadoria ${produtos[i].nome} é nacional e seu valor com imposto de 12% é R$` + produtos[i].valor * 1.12)}
}
