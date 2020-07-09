function exer_2_9(){
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
            nome: "",
            nome_eixo: "Função da onda u(i)",
            cor: "#d11507",
            borda: "#d11507",
            dados: u[250],
            tracado: [0,0],
            limites:[-0.8 ,0.5],
            posicao: 'left',
            tipo: 'linear',
            linha_v: 140, 
        }
    ];

    var nome_x = "Coordenada i da grade";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }
    gera_grafico("Exercicio 2.9", nome_x, 1,intervalo_x, funcoes,false, "exer-2-9", false, false,true);

}
