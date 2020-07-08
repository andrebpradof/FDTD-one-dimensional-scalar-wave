function exer_2_4(S, n) {
	var k = 0;
	var tau = 0;
	var N = makeArr(1, 10, n);
	var at = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);
	var Vp = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);

	for (var i = 0; i <= n; i++) {
		if (N[i] <= N_transition(S)) {
			k = math.pi;
			tau = zeta(N[i], S);
			at[i] = -math.log(-tau - math.sqrt((tau ** 2) - 1));
		}
		else {
			k = math.acos(zeta(N[i], S))
		}
		Vp[i] = (2 * math.pi) / (N[i] * k);
	}

    var funcoes = [
        {
            nome: "Constante de atenuação",
            nome_eixo: "Constante de atenuação (nepers / célula da grade)",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: at,
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
    var nome_x = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";

    gera_grafico("Exercicio 2.4", nome_x, 2, N, funcoes,false, "exer-2-4", false, false);

}