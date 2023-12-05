
        const destaqueTxt = document.getElementById('dtText');
        const destaqueTittle = document.getElementById('dtTittle');
        const destaqueImg = document.getElementById('dtImage');
        const btnLeft = document.getElementById('btnleft');
        const btnRight = document.getElementById('btnright');

        const contentBar = [
            {"titulo":"Título de exemplo",
            "texto":"Esta seção do site é um protótipo que será utilizada em outro momento. Neste espaço, teremos a flexibilidade de incluir conteúdos de destaque que sejam relevantes para nossos visitantes quando o site estiver em pleno funcionamento. <br>Parte dos textos aqui foram gerados por IA, ou seja, podem conter erros e inconsistências com o mundo real.",
            "imagem":"./assets/img/placeholder.png"},
            {"titulo":"Oxigênio",
            "texto":"O oxigênio é um elemento químico de símbolo O, número atómico 8 e com massa atômica 16 u. É um não metal reativo que facilmente forma compostos com a maioria dos outros elementos, principalmente óxidos. Tem a segunda eletronegatividade mais elevada de todos os elementos, superado apenas pelo flúor. O oxigênio é o terceiro mais abundante no universo, atrás do hidrogênio e hélio. Sua importância na respiração aeróbica o torna essencial para a vida na Terra.",
            "imagem":"./assets/img/elements/oxigenio.jpg"},
            {"titulo":"Lítio",
            "texto":"O lítio é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7. É um metal alcalino leve e reativo que é geralmente estocado em óleo mineral. Quando é exposto ao ar ou à água, sua superfície se corrói e adquire uma cor cinza-prateada. O lítio é amplamente utilizado em baterias recarregáveis, sendo essencial para dispositivos móveis e veículos elétricos.",
            "imagem":"./assets/img/elements/litio.jpg"},
            {"titulo":"Carbono",
            "texto":"O carbono é um elemento químico de símbolo C, número atômico 6 e com massa atómica 12 u. É um não metal tetravalente que forma quatro ligações covalentes. O carbono é essencial para a vida e é encontrado em moléculas como o DNA. Existem diferentes isótopos de carbono, incluindo o carbono radioativo 14C. Sua versatilidade na formação de compostos orgânicos o torna central na química orgânica.",
            "imagem":"./assets/img/elements/carbono.jpg"},
            {"titulo":"Hidrogênio",
            "texto":"O hidrogênio é o elemento químico mais simples, com símbolo H, número atômico 1 e massa atômica aproximada de 1 u. É o elemento mais abundante no universo. O hidrogênio é um gás incolor, inodoro e insípido. É usado em diversas aplicações, incluindo como combustível em células de combustível para veículos elétricos e na produção de amônia para fertilizantes.",
            "imagem":"./assets/img/elements/hidrogenio.jpg"},
            {"titulo":"Nitrogênio",
            "texto":"O nitrogênio é um elemento químico com símbolo N, número atômico 7 e massa atômica 14 u. É um gás incolor, inodoro e insípido em condições normais. É um dos elementos mais abundantes na Terra e desempenha um papel fundamental na química da vida. O nitrogênio é utilizado na produção de fertilizantes e em aplicações de resfriamento e inertização.", 
            "imagem":"./assets/img/elements/nitrogenio.jpg"},
            {"titulo":"Fósforo",
            "texto":"O fósforo é um elemento químico com símbolo P, número atômico 15 e massa atômica 31 u. É um sólido que pode ser branco, vermelho ou preto. É essencial para a vida e desempenha um papel importante em moléculas como o DNA e o ATP. O fósforo é utilizado na produção de fertilizantes, na indústria química e na fabricação de fósforos.",
            "imagem":"./assets/img/elements/fosforo.jpg"},
            {"titulo":"Sódio",
            "texto":"O sódio é um elemento químico de símbolo Na, número atômico 11 e massa atômica 23 u. É um metal alcalino altamente reativo que é armazenado sob óleo para evitar a reação com o oxigênio. O sódio é amplamente utilizado na indústria para produzir compostos como o hidróxido de sódio e o carbonato de sódio. Além disso, é um eletrólito essencial para o funcionamento adequado do corpo humano.",
            "imagem":"./assets/img/elements/sodio.jpg"},
            {"titulo":"Cobre",
            "texto":"O cobre é um elemento químico com símbolo Cu, número atômico 29 e massa atômica 63 u. É um metal de transição que é conhecido por sua excelente condutividade elétrica e térmica. O cobre é amplamente utilizado na fabricação de fios elétricos, tubos de encanamento e moedas. Além disso, desempenha um papel vital no metabolismo humano como parte de várias enzimas.",
            "imagem":"./assets/img/elements/cobre.jpg"},
            {"titulo":"Cloro",
            "texto":"O cloro é um elemento químico com símbolo Cl, número atômico 17 e massa atômica 35,5 u. É um não metal altamente reativo que é frequentemente usado na purificação de água e em produtos de limpeza. O cloro é um componente essencial do sal de cozinha (cloreto de sódio) e desempenha um papel fundamental na regulação do equilíbrio iônico no corpo humano.",
            "imagem":"./assets/img/elements/cloro.jpg"},
            {"titulo":"Magnésio",
            "texto":"O magnésio é um elemento químico com símbolo Mg, número atômico 12 e massa atômica 24 u. É um metal alcalino-terroso leve que desempenha um papel crucial em muitos processos biológicos, incluindo a contração muscular e a transmissão de impulsos nervosos. O magnésio é encontrado em alimentos como nozes, sementes e vegetais verdes, e é frequentemente usado em ligas metálicas e na indústria aeroespacial.",
            "imagem":"./assets/img/elements/magnesio.jpg"},
            {"titulo":"Enxofre",
            "texto":"O enxofre é um elemento químico com símbolo S, número atômico 16 e massa atômica 32 u. É um não metal que desempenha um papel fundamental na formação de proteínas e aminoácidos. O enxofre é encontrado em compostos como sulfetos e sulfatos e é amplamente utilizado na indústria química para a produção de ácido sulfúrico e na fabricação de produtos farmacêuticos.",
            "imagem":"./assets/img/elements/enxofre.jpg"},
            {"titulo":"Cálcio",
            "texto":"O cálcio é um elemento químico com símbolo Ca, número atômico 20 e massa atômica 40 u. É um metal alcalino-terroso essencial para a formação e manutenção de ossos e dentes. Além disso, o cálcio desempenha um papel vital na sinalização celular e na coagulação sanguínea. É encontrado em laticínios, vegetais de folhas verdes e suplementos dietéticos.",
            "imagem":"./assets/img/elements/calcio.jpg"}
        ];

        const r = /\d+/; 
        /*detectar número
        const pos = (BoxID.match(r));
        //log do número extraído do id do checkbox
        console.log ('riscarTexto() na posição '+pos[0]);
        */

        const dotcontainer = document.getElementById("dtdots");

        for(l = 0;l<contentBar.length;l++){
           
            var dotItem = document.createElement('button');
            dotItem.style.height = '10px';
            dotItem.style.width = '10px';
            dotItem.className = 'dots';
            dotItem.id = 'btdot'+l;

            dotcontainer.appendChild(dotItem);

            dotItem.addEventListener('click', function(event){
                const botaoid = event.target.id;
                let pos = botaoid.match(r);
                avancarPosicao(pos);
            });
        }

        const dots = document.querySelectorAll('button[class="dots"]');
        
        let i = 0;

        function avancarPosicao(pos){
            i = pos;
            setConteudo(i);
        }
        
        btnLeft.addEventListener("click", voltar);
        btnRight.addEventListener("click", avancar);

        function setConteudo(position) {
            destaqueTittle.textContent = contentBar[position].titulo;
            destaqueTxt.innerHTML = contentBar[position].texto;
            destaqueImg.src = contentBar[position].imagem;
            destaqueImg.borderRadius = '20px';
            for(l=0;l<dots.length;l++){
                dots[l].style.width = "15px";
                dots[l].style.height = "15px";
                dots[l].style.margin = "0px";
                dots[l].style.borderRadius = "7px";
            }
            dots[i].style.width = "25px";
            dots[i].style.height = "25px";
            dots[i].style.margin = "0px 20px";
            dots[i].style.borderRadius = "12px";
        }
        setConteudo(i);

        function voltar() {
                i--;
            if (i < 0) {
                i = (contentBar.length - 1);
            }
            setConteudo(i);
        }

        function avancar() {
                i++;
            if (i >= contentBar.length) {
                i = 0;
            }
            setConteudo(i);
        }