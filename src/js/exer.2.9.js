function exer_2_9(S0,S1, s){
    var S_0 = function(i){
        return S0;
    }

    var S_1 = function(i){
        return S1;
    }

    var I = 200;
    var N = parseInt(I/S0);
    var N_2 = parseInt(I/S1);

    var u_1 = fdtd(S_0, I, N, s);
    var u_2 = fdtd(S_1, I, N, s);

    var funcoes = [
        {
            nome: "S = "+S0,
            nome_eixo: "Função da onda",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u_1[parseInt(150/S0)],
            tracado: [0,0],
            limites:[-0.5 ,1.5],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "S = "+S1,
            nome_eixo: "",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: u_2[parseInt(150/S1)],
            tracado: [5,5],
            limites:[-0.5 ,1.5],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    var nome_x = "";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }
    gera_grafico("Exercicio 2.9", nome_x, 2,intervalo_x, funcoes,false, "exer-2-9", true);
}