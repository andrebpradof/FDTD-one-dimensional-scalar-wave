function exer_2_5(S, n) {
    var N = makeArr(3, 80, n);
    var Vp = calcVelocidadeErro(n,S,N);

    var funcoes = [
        {
            nome: "S = "+S,
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#009900",
            borda: "#009900",
            dados: Vp,
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        }
    ];
    var nome_x = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";

    gera_grafico("Exercicio 2.5", nome_x, 1, N, funcoes,true, "exer-2-5",false, false,false);
}