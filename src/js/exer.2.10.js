function exer_2_10(){
    var S = function (i) {
        if(i < 140)
            return 1;
        else 
            return 0.25;
    }

    I = 200;
    N = 400;

    var u = fdtd(S,I,N,f_gauss);

    var funcoes = [
        {
            nome: "ARRUMAR",
            nome_eixo: "Função da onda",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: u[250],
            tracado: [0,0],
            limites:[-0.8 ,0.5],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

    var nome_x = "";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }
    gera_grafico("Exercicio 2.10", nome_x, 1,intervalo_x, funcoes,false, "exer-2-10", false, false);

}
