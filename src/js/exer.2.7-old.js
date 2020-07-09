function exer_2_7(n){

    var S = [];
    S[0] = 0.7;
    S[1] = 0.8;
    S[2] = 0.9;
    S[3] = 0.99;

    var Vp = [];
    var at = [];
    var Vpe = [];

    var N = makeArr(1, 10, n);

    for(var i = 0; i < 4; i++){
        var dados = calcVelocidadeAtenuacao(n,S[i],N);
        Vp[i] = dados[0];
        at[i] = dados[1];
    }

    for(var i = 0; i < 4; i++){
        Vpe[i] = calcVelocidadeErro(n,S[i],N);
    }

    var funcoes_a = [
        {
            nome: "S = 0.7",
            nome_eixo: "Constante de atenuação (nepers / célula da grade)",
            cor: "#7a1b0c",
            borda: "#7a1b0c",
            dados: at[0],
            tracado: [5,5],
            limites:[0 ,6],
            posicao: 'left',
            tipo: 'linear',
            id: 'A'
        },
        {
            nome: "S = 0.8",
            cor: "#a51b0b",
            borda: "#a51b0b",
            dados: at[1],
            tracado: [5,5],
            tipo: 'linear',
            id: 'A'
        },
        {
            nome: "S = 0.9",
            cor: "#d11507",
            borda: "#d11507",
            dados: at[2],
            tracado: [5,5],
            tipo: 'linear',
            id: 'A'
        },
        {
            nome: "S = 0.99",
            cor: "#ff0000",
            borda: "#ff0000",
            dados: at[3],
            tracado: [5,5],
            tipo: 'linear',
            id: 'A'
        },
        {
            nome: "S = 0.7",
            nome_eixo: "Velocidade de fase numérica (normalizada para c)",
            cor: "#214077",
            borda: "#214077",
            dados: Vp[0],
            tracado: [5,0],
            limites: [0, 2],
            posicao: 'right',
            tipo: 'linear',
            id: 'B'
        },
        {
            nome: "S = 0.8",
            cor: "#2156a2",
            borda: "#2156a2",
            dados: Vp[1],
            tracado: [5,0],
            tipo: 'linear',
            id: 'B'
        },
        {
            nome: "S = 0.9",
            cor: "#1b6cd0",
            borda: "#1b6cd0",
            dados: Vp[2],
            tracado: [5,0],
            tipo: 'linear',
            id: 'B'
        },
        {
            nome: "S = 0.99",
            cor: "#0083ff",
            borda: "#0083ff",
            dados: Vp[3],
            tracado: [5,0],
            tipo: 'linear',
            id: 'B'
        }
    ];

    var funcoes_b = [
        {
            nome: "S = "+S[0],
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#008000",
            borda: "#008000",
            dados: Vp[0],
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        },
        {
            nome: "S = "+S[1],
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#008000",
            borda: "#008000",
            dados: Vp[1],
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        },
        {
            nome: "S = "+S[2],
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#008000",
            borda: "#008000",
            dados: Vp[2],
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        },
        {
            nome: "S = "+S[3],
            nome_eixo: "Erro da Velocidade de Fase (%)",
            cor: "#008000",
            borda: "#008000",
            dados: Vp[3],
            tracado: [0,0],
            limites:[10**-2 ,10**2],
            posicao: 'left',
            tipo: 'logarithmic',
            zero: true
        }
    ]
    var nome_x_a = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";
    var nome_x_b = "Densidade de amostragem da grade (pontos por comprimento de onda do espaço livre)";

    gera_grafico("Exercicio 2.7a", nome_x_a, 8, N, funcoes_a,false, "exer-2-7-a", false, true);
    //gera_grafico("Exercicio 2.7b", nome_x_b, 4, N, funcoes_b,false, "exer-2-7-b", false, true);
}