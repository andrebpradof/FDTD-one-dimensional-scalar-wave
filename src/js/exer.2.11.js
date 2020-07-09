function exer_2_11(){
    var I = 220;
    var N = 400;
    var S0 = 1;
    var S1 = 1.075;

    // Fator de estabilidade Courant
    var S = function(n){
        if(n != 90)
            return S0;
        else 
            return S1;
    }
    
    // Pulso
     var s = function(n,S){
        if (n > 74)
            return 0;
        else
            return math.exp(-((((n-60)/(5))**2)));
    }
    
    // Calculo FDTD
    var u = fdtd(S,I,N+1,s);
    
    // Configuracoes dos graficos
    var funcoes_a = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u[191].slice(0, 161),
            tracado: [0,0],
            limites:[-1 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 190",
            nome_eixo: "Função da onda",
            cor: "#d11507",
            borda: "#d11507",
            dados: u[201].slice(0, 161),
            tracado: [2,2],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

    var funcoes_b = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u[191].slice(70, 111),
            tracado: [0,0],
            limites:[-1 ,1],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 190",
            nome_eixo: "Função da onda",
            cor: "#d11507",
            borda: "#d11507",
            dados: u[201].slice(70, 111),
            tracado: [2,2],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

    // Configuracao do eixo x
    var nome_x = "Coordenada i da grade";

    var intervalo_x_a = [];
    var intervalo_x_b = [];

    for (var index = 0; index <= 160; index++) {
        intervalo_x_a[index] = index;
    }
    var cont = 0;
    for (var index = 70; index <= 110; index++) {
        intervalo_x_b[cont] = index;
        cont++;
    }
    // Gerar o grafico
    gera_grafico("(a)", nome_x, 2,intervalo_x_a, funcoes_a,false, "exer-2-11-a", true, false,false);
    gera_grafico("(b)", nome_x, 2,intervalo_x_b, funcoes_b,false, "exer-2-11-b", true, false,false);
    
}