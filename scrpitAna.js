const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;

const perguntas =[
    {
        enunciado : "Você considera que a educação ambiental nas escolas pode contribuir para a formação de cidadãos mais conscientes e engajados na defesa do meio ambiente e dos direitos humanos?",
        alternativas : [
            {
                texto: "Sim, a educação ambiental é fundamental para formar cidadãos conscientes e engajados na defesa do meio ambiente e dos direitos humanos. Ao aprender sobre os impactos de nossas ações no planeta e sobre os direitos das comunidades tradicionais, as pessoas podem se tornar agentes de transformação e contribuir para a construção de um futuro mais sustentável.",
                afirmacao: "Entende que a educação ambiental é fundamental para formar cidadãos conscientes sobre os problemas ambientais e sociais."
            },
            {
                texto: "Não, a educação ambiental é importante, mas não é suficiente para resolver os problemas ambientais e sociais. É preciso mudar o modelo de desenvolvimento econômico e investir em tecnologias limpas." ,
                afirmacao: "Considera a educação ambiental como um assunto secundário e menos importante."
            }
        ]
    },
    {
        enunciado : "Você acredita que o uso excessivo de agrotóxicos na agricultura está diretamente ligado ao aumento de casos de câncer e outras doenças em comunidades rurais? Por quê?",
        alternativas : [
            {
                texto: "Sim, acredito que existe uma forte correlação entre o uso intenso de agrotóxicos e o aumento de doenças como câncer, problemas respiratórios e malformações congênitas. Os agrotóxicos são substâncias químicas tóxicas que contaminam o solo, a água e os alimentos, expondo as pessoas a substâncias cancerígenas e prejudicando a saúde a longo prazo.",
                afirmacao: "Preocupa-se com a saúde pública e os impactos do uso de agrotóxicos na população, especialmente em comunidades rurais." 
            },
            {
                texto: "Não, acredito que a relação entre o uso de agrotóxicos e o aumento de doenças é complexa e envolve outros fatores, como genética, estilo de vida e acesso à saúde. É preciso mais estudos para estabelecer uma relação causal clara." ,
                afirmacao: "Acredita que os estudos sobre os impactos dos agrotóxicos são tendenciosos e que os riscos são exagerados."
            }
        ]
    },
    {
        enunciado : "Você considera que o desmatamento em larga escala contribui para o aumento de casos de assédio e violência contra povos indígenas e comunidades tradicionais?",
        alternativas : [
            {
                texto: "Sim, o desmatamento invade territórios indígenas e de comunidades tradicionais, violando seus direitos e colocando suas vidas em risco. A disputa por terras, a exploração ilegal de recursos naturais e a criminalização de defensores ambientais são consequências diretas do desmatamento, gerando um ambiente de violência e insegurança.",
                afirmacao: "Acredita que o desmatamento é um crime ambiental e que os responsáveis devem ser punidos."
            },
            {
                texto: "Não, acredito que a violência contra povos indígenas e comunidades tradicionais é um problema social complexo com diversas causas, e o desmatamento é apenas um dos fatores. A desigualdade social, a discriminação e a falta de políticas públicas eficazes também contribuem para esse problema." ,
                afirmacao: "Acredita que a mídia exagera os problemas ambientais e sociais com o objetivo de manipular a opinião pública." 
            }
        ]
    },
    {
        enunciado : "Você acha que as empresas que exploram recursos naturais em áreas de floresta deveriam ser responsabilizadas pelos danos ambientais e sociais causados?",
        alternativas : [
            {
                texto: "Sim, as empresas têm responsabilidade social e ambiental e devem ser responsabilizadas pelos danos causados por suas atividades. A exploração de recursos naturais deve ser feita de forma sustentável, respeitando os direitos humanos e o meio ambiente.",
                afirmacao: "Acredita que as empresas têm o dever de reparar os danos causados ao meio ambiente e às comunidades."
            },
            {
                texto: "Não, as empresas são responsáveis por gerar empregos e riquezas para a sociedade. É preciso encontrar um equilíbrio entre o desenvolvimento econômico e a proteção ambiental." ,
                afirmacao: "Acredita que o desenvolvimento econômico é fundamental para gerar empregos e melhorar a qualidade de vida."
            }
        ]
    },
    {
        enunciado : "Você acredita que a mídia desempenha um papel importante na denúncia de casos de assédio e maus tratos em áreas rurais e na conscientização sobre os impactos do desmatamento? Por quê?",
        alternativas : [
            {
                texto: "Sim, a mídia tem um papel fundamental na denúncia de abusos e na divulgação de informações sobre os impactos ambientais e sociais. A cobertura jornalística pode gerar pressão sobre as autoridades e a sociedade para que medidas sejam tomadas para proteger os direitos humanos e o meio ambiente.",
                afirmacao: "Acredita no papel da mídia como um quarto poder e na sua importância para a construção de uma sociedade mais justa e igualitária."
            },
            {
                texto: "Não, a mídia muitas vezes exagera os problemas e cria uma visão negativa do setor agrícola. É preciso ter cuidado para não generalizar e prejudicar a imagem de produtores responsáveis." ,
                afirmacao: "Questiona a imparcialidade dos jornalistas e a veracidade das informações divulgadas."
            }
        ]
    },
    {
        enunciado : "Você acha que as políticas públicas brasileiras são eficazes no combate ao desmatamento e na proteção dos direitos dos povos indígenas e comunidades tradicionais?",
        alternativas : [
            {
                texto: "Não, as políticas públicas brasileiras têm sido ineficazes no combate ao desmatamento e na proteção dos direitos dos povos indígenas e comunidades tradicionais. O desmatamento tem aumentado nos últimos anos, e os conflitos por terra se intensificaram.",
                afirmacao: "Acredita que o governo tem tomado medidas importantes para combater o desmatamento e proteger os direitos dos povos indígenas e comunidades tradicionais."
            },
            {
                texto: "Sim, o governo brasileiro tem feito esforços para combater o desmatamento e proteger os direitos dos povos indígenas. No entanto, é preciso mais investimento e ações concretas para alcançar resultados mais efetivos." ,
                afirmacao: "Acredita que as políticas públicas são ineficazes e que os interesses econômicos estão acima da proteção ambiental e dos direitos humanos."
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