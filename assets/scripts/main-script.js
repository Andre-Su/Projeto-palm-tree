/*
linkar elementos do html
criar array de conteúdos
    imagens e textos

funções com lógica de troca de elementos
posso me "inspirar" aqui: https://jsfiddle.net/zgcd736q/3/

*/

const destaqueTxt = document.getElementById('destaquetxt');
const destaqueImg = document.getElementById('destaqueimg');

//[id]=(0)titulo, (1)texto, (2)imagem
var contentBar = [
    ["Oxigênio",
    `O oxigênio é um elemento químico de símbolo O ,número atómico 8 e com massa atômica 16 u. Constitui parte do grupo dos calcogénios e é um não metal reativo e um forte agente oxidante que facilmente forma compostos com a maioria dos outros elementos, principalmente óxidos. Tem a segunda electronegatividade mais elevada de todos os elementos, superado apenas pelo flúor. O oxigénio é o terceiro mais abundante do universo, atrás do hidrogénio e hélio.`,
    "assets/img/placeholder.png"],
    ["Carbono",
    `O carbono é um elemento químico de símbolo C, número atômico 6 e com massa atómica 12 u, sólido à temperatura ambiente.Como um membro do grupo 14 da tabela periódica, ele é um não metal e tetravalente — fazendo quatro elétrons disponíveis na forma de ligações covalentes. Há três isótopos naturais, com o 12C e 13C sendo estável, onde o 14C é radioativo, decompondo com uma meia-vida de aproximadamente 5730 anos. Ele é um dos poucos elementos químicos que já foram descobertos na antiguidade.`,
    "assets/img/placeholder.png"],
    ["Lítio",
    `O lítio é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7, contendo, na sua estrutura, três prótons e três elétrons. Na tabela periódica dos elementos químicos, pertencente ao grupo 1, dos elementos alcalinos. Sob condições normais de temperatura e pressão, é o metal mais leve e menos denso entre os elementos sólidos. Como todos os elementos alcalinos, o lítio tem reatividade e inflamabilidade elevada e, por essa razão, é, geralmente, estocado em óleo mineral. Quando é usinado, apresenta brilho, porém, em contato com o ar atmosférico ou na água, a superfície é corroída e adquire a cor cinza-prateada e manchas pretas.`]
];
var dtIndex = 0;

console.log(contentBar);
