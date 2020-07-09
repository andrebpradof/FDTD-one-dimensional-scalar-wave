function exer_2_5(S, n) {
    
    var S = 0.5; // Fator de estabilidade Courant
    var n = 100;
    var N = makeArr(3, 80, n);
    
    var Erro = calcVelocidadeErro(n,S,N); // erro percentual de velocidade de fase

    // Configuracoes do grafico
    var funcoes = [
        {
            nome: "S = "+S,
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#009900",
            borda: "#009900",
            dados: Erro,
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
    gera_grafico("", nome_x, 1, N, funcoes,true, "exer-2-5",false, false,false);
}