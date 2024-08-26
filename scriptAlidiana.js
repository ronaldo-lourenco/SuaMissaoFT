const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;

const perguntas =[
    {
        enunciado : "Você concorda com o uso de agrotóxicos na agricultura, mesmo sabendo dos seus possíveis impactos na saúde humana e ambiental?",
        alternativas : [
            {
                texto: "Sim, concordo. Acredito que os agrotóxicos são essenciais para aumentar a produção de alimentos e garantir a segurança alimentar da população. Além disso, as tecnologias e os controles atuais minimizam os riscos.",
                afirmacao: "Geralmente pessoas ligadas ao agronegócio, que priorizam a produção em larga escala e a rentabilidade, podem apresentar essa resposta. Podem ter uma visão mais otimista em relação às tecnologias e aos mecanismos de controle." 
            },
            {
                texto: "Não, não concordo. Acredito que os riscos à saúde humana e ao meio ambiente superam os benefícios da produção em larga escala. Existem alternativas mais sustentáveis, como a agricultura orgânica, que podem garantir a produção de alimentos saudáveis sem a necessidade de agrotóxicos." ,
                afirmacao: " Pessoas preocupadas com a saúde, o meio ambiente e a sustentabilidade tendem a apresentar essa resposta. Geralmente valorizam a produção de alimentos saudáveis e a preservação dos recursos naturais."
            }
        ]
    },
    {
        enunciado : "Como você avalia a relação entre o desmatamento e o uso de agrotóxicos?",
        alternativas : [
            {
                texto: "Acredito que o desmatamento e o uso de agrotóxicos são processos distintos, embora possam ocorrer em conjunto. O desmatamento é necessário para expandir a fronteira agrícola e atender à demanda por alimentos, enquanto os agrotóxicos são ferramentas importantes para proteger as culturas.",
                afirmacao: "Indivíduos que tendem a priorizar a produção agrícola em detrimento da preservação ambiental podem apresentar essa resposta. Podem ter uma visão mais fragmentada dos problemas ambientais."
            },
            {
                texto: "O desmatamento e o uso de agrotóxicos estão intimamente ligados. O desmatamento abre caminho para a expansão da monocultura e o uso intensivo de agrotóxicos, o que contamina o solo, a água e a biodiversidade." ,
                afirmacao: "Pessoas com consciência ambiental e social tendem a ver a relação entre desmatamento e agrotóxicos como um problema complexo e interligado. Valorizam a preservação da biodiversidade e a sustentabilidade." 
            }
        ]
    },
    {
        enunciado : "Você acredita que as empresas de agrotóxicos têm responsabilidade social e ambiental?",
        alternativas : [
            {
                texto: "Sim, acredito que as empresas têm a responsabilidade de desenvolver produtos mais seguros e de investir em tecnologias que minimizem os impactos ambientais. Além disso, devem contribuir para o desenvolvimento das comunidades onde atuam.",
                afirmacao: "Pessoas que valorizam a responsabilidade social e ambiental das empresas, mas que ainda acreditam no papel do agronegócio para o desenvolvimento econômico."
            },
            {
                texto: "Não, acredito que o principal objetivo das empresas de agrotóxicos é o lucro, e elas estão mais preocupadas em maximizar seus lucros do que em proteger a saúde e o meio ambiente." ,
                afirmacao: "Pessoas críticas em relação ao modelo econômico atual e que desconfiam das grandes empresas. Valorizam a produção local e a economia solidária."
            }
        ]
    },
    {
        enunciado : "Qual a sua opinião sobre a regulamentação do uso de agrotóxicos no Brasil?",
        alternativas : [
            {
                texto: "Acredito que a legislação brasileira é adequada e que as agências reguladoras atuam de forma eficiente para garantir a segurança dos produtos.",
                afirmacao: "Indivíduos que confiam nas instituições governamentais e que acreditam que a legislação atual é suficiente para garantir a segurança alimentar e ambiental."
            },
            {
                texto: "Acredito que a legislação brasileira é muito permissiva e que os interesses das empresas de agrotóxicos influenciam as decisões do governo. É necessário fortalecer a fiscalização e aumentar os requisitos para a registro de novos produtos." ,
                afirmacao: "Pessoas que desconfiam das instituições governamentais e que acreditam que a legislação brasileira precisa ser reformulada para proteger a saúde e o meio ambiente."
            }
        ]
    },
    {
        enunciado : "Você acredita que a agricultura familiar pode ser uma alternativa mais sustentável ao agronegócio?",
        alternativas : [
            {
                texto: "Sim, acredito que a agricultura familiar é mais sustentável, pois utiliza menos agrotóxicos e preserva a biodiversidade. Além disso, contribui para a segurança alimentar e o desenvolvimento local.",
                afirmacao: "Pessoas que valorizam a produção de alimentos saudáveis, a preservação da biodiversidade e o desenvolvimento local."
            },
            {
                texto: "Não, acredito que a agricultura familiar não tem a mesma capacidade de produção do agronegócio e não consegue atender à demanda por alimentos da população." ,
                afirmacao: "Indivíduos que priorizam a produção em larga escala e a segurança alimentar, e que podem subestimar a importância da agricultura familiar para a sustentabilidade."
            }
        ]
    }    
] ;

let atual = 0 ;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPerguntas(){
    if (atual >= perguntas.length){
        mostraResultado() ;
        return ;
    } ;
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent = perguntaAtual.enunciado ;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
} ;

mostraPerguntas() ;

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button") ;
        botaoAlternativas.textContent = alternativa.texto ;
        botaoAlternativas.addEventListener("click", ()=>respostaFinal(alternativa)) ;
        caixaAlternativas.appendChild(botaoAlternativas) ;
    } ;
} ;

function respostaFinal(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal   += afirmacao + " " ;
    atual++ ;
    mostraPerguntas() ;    
} ;

function mostraResultado(){
    caixaPerguntas.textContent    = "Em 2049..." ;
    textoResultado.textContent    = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}