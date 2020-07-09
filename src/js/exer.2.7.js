function exer_2_7() {

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

    var u_0 = fdtd(S_0, I, N_0, v);
    var u_1 = fdtd(S_1, I, N_1, v);
    var u_2 = fdtd(S_2, I, N_2, v)
    
    var funcoes_a = [
        {
            nome: "S = "+S[0],
            nome_eixo: "Função da onda u(i)",
            cor: "#d11507",
            borda: "#d11507",
            dados: u_0[parseInt(150/S[0])],
            tracado: [4,4],
            limites:[-0.5 ,1.5],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "S = "+S[1],
            nome_eixo: "",
            cor:"#007bf5",
            borda: "#007bf5",
            dados: u_1[parseInt(150/S[1])],
            tracado: [0,0],
            limites:[-0.5 ,1.5],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    var funcoes_b = [
        {
            nome: "S = "+S[0],
            nome_eixo: "Função da onda u(i)",
            cor: "#d11507",
            borda: "#d11507",
            dados: u_0[parseInt(150/S[0])],
            tracado: [4,4],
            limites:[-0.5 ,1.5],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "S = "+S[2],
            nome_eixo: "",
            cor:"#007bf5",
            borda: "#007bf5",
            dados: u_2[parseInt(150/S[2])],
            tracado: [0,0],
            limites:[-0.5 ,1.5],
            posicao: 'right',
            tipo: 'linear',
        }
    ];

    var nome_x = "Coordenada i da grade";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }

    gera_grafico("Exercicio 2.7-a", nome_x, 2,intervalo_x, funcoes_a,false, "exer-2-7-a", true, false,false);
    gera_grafico("Exercicio 2.7-b", nome_x, 2,intervalo_x, funcoes_b,false, "exer-2-7-b", true, false,false);
}