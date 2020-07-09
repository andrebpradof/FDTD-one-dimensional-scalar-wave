function exer_2_6(S, n) {

    var S =1/math.sqrt(2); // Fator de estabilidade Courant
    var n = 100;
    var N = makeArr(3, 80, n);
    var Vp = calcVelocidadeErro(n,S,N);

    // Configuracoes do grafico
    var funcoes = [
        {
            nome: "S = "+parseFloat(S).toFixed(2),
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#d11507",
            borda: "#d11507",
            dados: Vp,
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        }
    ];

    // Configuracao do eixo x
    var nome_x = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";
    // Gerar o grafico
    gera_grafico("", nome_x, 1, N, funcoes,true, "exer-2-6", false, false,false);
}