function exer_2_9(){

    // Fator de estabilidade Courant
    var S = function (i) {
        if(i < 140)
            return 1;
        else 
            return 0.25;
    }

    I = 200;
    N = 400;

    // Calculo FDTD
    var u = fdtd(S,I,N,p_gauss);

    // Configuracoe dos grafico
    var funcoes = [
        {
            nome: "Função da onda",
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

    // Configuracao do eixo x
    var nome_x = "Coordenada i da grade";

    var intervalo_x = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x[index] = index;
    }
    // Gerar o grafico
    gera_grafico("", nome_x, 1,intervalo_x, funcoes,false, "exer-2-9", false, false,true);

}
