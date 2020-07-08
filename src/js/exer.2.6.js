function exer_2_6(S, n) {
    var N = makeArr(3, 80, n);
    var Vp = Array.apply(null, Array(N.length)).map(Number.prototype.valueOf, 0); 
    
    var k = 0;
    for(var i=0; i <= N.length-1; i++){
        k = math.acos(zeta(N[i], S));
        Vp[i] = (2*math.pi)/(N[i]*k);
    }
    for(var i=0; i <= N.length-1; i++){
        Vp[i] = 100*(1-Vp[i]);
    }

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

    gera_grafico("Exercicio 2.6", nome_x, 1, N, funcoes,true, "exer-2-6", false);
}