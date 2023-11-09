
        const destaqueTxt = document.getElementById('dtText');
        const destaqueTittle = document.getElementById('dtTittle');
        const destaqueImg = document.getElementById('dtImage');
        const btnLeft = document.getElementById('btnleft');
        const btnRight = document.getElementById('btnright');

        const contentBar = [
            {"titulo":"Oxigênio",
            "texto":"O oxigênio é um elemento químico de símbolo O, número atómico 8 e com massa atômica 16 u. É um não metal reativo que facilmente forma compostos com a maioria dos outros elementos, principalmente óxidos. Tem a segunda eletronegatividade mais elevada de todos os elementos, superado apenas pelo flúor. O oxigênio é o terceiro mais abundante no universo, atrás do hidrogênio e hélio. Sua importância na respiração aeróbica o torna essencial para a vida na Terra.",
            "imagem":"assets/img/elements/oxigenio.jpg"},
            {"titulo":"Lítio",
            "texto":"O lítio é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7. É um metal alcalino leve e reativo que é geralmente estocado em óleo mineral. Quando é exposto ao ar ou à água, sua superfície se corrói e adquire uma cor cinza-prateada. O lítio é amplamente utilizado em baterias recarregáveis, sendo essencial para dispositivos móveis e veículos elétricos.",
            "imagem":"assets/img/elements/litio.jpg"},
            {"titulo":"Carbono",
            "texto":"O carbono é um elemento químico de símbolo C, número atômico 6 e com massa atómica 12 u. É um não metal tetravalente que forma quatro ligações covalentes. O carbono é essencial para a vida e é encontrado em moléculas como o DNA. Existem diferentes isótopos de carbono, incluindo o carbono radioativo 14C. Sua versatilidade na formação de compostos orgânicos o torna central na química orgânica.",
            "imagem":"assets/img/elements/carbono.jpg"},
            {"titulo":"Hidrogênio",
            "texto":"O hidrogênio é o elemento químico mais simples, com símbolo H, número atômico 1 e massa atômica aproximada de 1 u. É o elemento mais abundante no universo. O hidrogênio é um gás incolor, inodoro e insípido. É usado em diversas aplicações, incluindo como combustível em células de combustível para veículos elétricos e na produção de amônia para fertilizantes.",
            "imagem":"assets/img/elements/hidrogenio.jpg"},
            {"titulo":"Nitrogênio",
            "texto":"O nitrogênio é um elemento químico com símbolo N, número atômico 7 e massa atômica 14 u. É um gás incolor, inodoro e insípido em condições normais. É um dos elementos mais abundantes na Terra e desempenha um papel fundamental na química da vida. O nitrogênio é utilizado na produção de fertilizantes e em aplicações de resfriamento e inertização.", 
            "imagem":"assets/img/elements/nitrogenio.jpg"},
            {"titulo":"Fósforo",
            "texto":"O fósforo é um elemento químico com símbolo P, número atômico 15 e massa atômica 31 u. É um sólido que pode ser branco, vermelho ou preto. É essencial para a vida e desempenha um papel importante em moléculas como o DNA e o ATP. O fósforo é utilizado na produção de fertilizantes, na indústria química e na fabricação de fósforos.",
            "imagem":"assets/img/elements/fosforo.jpg"}
        ];

        const dotcontainer = document.getElementById("dtdots");

        for(l = 0;l<contentBar.length;l++){
            var dotItem = document.createElement('img');
            dotItem.src = 'assets/img/dot_black.svg.png';
            dotItem.width = '10px';
            dotItem.className = 'dots';
            dotcontainer.appendChild(dotItem);
        }

        const dots = document.querySelectorAll('img[class="dots"]');

        let i = 0;

        setConteudo();
        
        btnLeft.addEventListener("click", voltar);
        btnRight.addEventListener("click", avancar);

        function setConteudo() {
            destaqueTittle.textContent = contentBar[i].titulo;
            destaqueTxt.textContent = contentBar[i].texto;
            destaqueImg.src = contentBar[i].imagem;
            for(l=0;l<dots.length;l++){dots[l].style.width = "10px";}
            dots[i].style.width = "20px";
        }

        function voltar() {
            if (i > 0) {
                i--;
            }
            if (i <= 0) {
                btnLeft.setAttribute('disabled', true);
            } else {
                btnRight.removeAttribute('disabled');
            }
            setConteudo();
        }

        function avancar() {
            if (i < contentBar.length - 1) {
                i++;
            }
            if (i >= contentBar.length - 1) {
                btnRight.setAttribute('disabled', true);
            } else {
                btnLeft.removeAttribute('disabled');
            }
            setConteudo();
        }