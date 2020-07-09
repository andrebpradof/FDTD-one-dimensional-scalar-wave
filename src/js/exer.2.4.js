function exer_2_4() {

    var S =1/math.sqrt(2); // Fator de estabilidade Courant
    var n = 100;

    var N = makeArr(1, 10, n);
    // Calculo da velocidade de fase e da constante de atenuacao
    var dados = calcVelocidadeAtenuacao(n,S,N); 

    var Vp = dados[0]; // Velocidade de fase
    var atenuacao = dados[1]; // Constante de atenuacao

    // Configuracoes do grafico
    var funcoes = [
        {
            nome: "Constante de atenuação",
            nome_eixo: "Constante de atenuação (nepers / célula da grade)",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: atenuacao,
            tracado: [5,5],
            limites:[0 ,6],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "Velocidade de fase numérica",
            nome_eixo: "Velocidade de fase numérica (normalizada para c)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: Vp,
            tracado: [5,0],
            limites: [0, 2],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    // Configuracao do eixo x
    var nome_x = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";

    // Gerar o grafico
    gera_grafico("", nome_x, 2, N, funcoes,false, "exer-2-4", false, false,false);

}