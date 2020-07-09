function exer_2_6(S, n) {
    var N = makeArr(3, 80, n);
    var Vp = calcVelocidadeErro(n,S,N);

    var funcoes = [
        {
            nome: "S = "+parseFloat(S).toFixed(2),
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: window.chartColors.green,
            borda: window.chartColors.green,
            dados: Vp,
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        }
    ];
    var nome_x = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";

    gera_grafico("Exercicio 2.6", nome_x, 1, N, funcoes,true, "exer-2-6", false, false,false);
}