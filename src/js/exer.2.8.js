function exer_2_8(){
    var S = [1 , 0.99, 0.5];

    var S_0 = function(i){
        return 1;
    }

    var S_1 = function(i){
        return 0.99;
    }

    var S_2 = function(i){
        return 0.5;
    }

    var I = 200;
    var N_0 = parseInt(I/S[0]);
    var N_1 = parseInt(I/S[1]);
    var N_2 = parseInt(I/S[2]);

    var u_0 = fdtd(S_0, I, N_0, f_gauss);
    var u_1 = fdtd(S_1, I, N_1, f_gauss);
    var u_2 = fdtd(S_2, I, N_2, f_gauss);

    var funcoes_a = [
        {
            nome: "S = "+S[0],
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u_0[parseInt(150/S[0])],
            tracado: [0,0],
            limites:[-0.2 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "S = "+S[1],
            nome_eixo: "",
            cor: "#d11507",
            borda: "#d11507",
            dados: u_1[parseInt(150/S[1])],
            tracado: [5,5],
            limites:[-0.2 ,1.2],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    var funcoes_b = [
        {
            nome: "S = "+S[0],
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u_0[parseInt(150/S[0])],
            tracado: [0,0],
            limites:[-0.2 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "S = "+S[2],
            nome_eixo: "",
            cor: "#d11507",
            borda: "#d11507",
            dados: u_2[parseInt(150/S[2])],
            tracado: [5,5],
            limites:[-0.2 ,1.2],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    var nome_x = "Coordenada i da grade";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }
    gera_grafico("Exercicio 2.8-a", nome_x, 2,intervalo_x, funcoes_a,false, "exer-2-8-a", true, false,false);
    gera_grafico("Exercicio 2.8-b", nome_x, 2,intervalo_x, funcoes_b,false, "exer-2-8-b", true, false,);
}