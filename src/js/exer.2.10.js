function exer_2_10(){
    var S = function(i){
        return 1.0005;
    }

    var I = 220;
    var N = 400;

    var s = function(n){
        if(n > 120/1.0005)
            return 0;
        else
            return math.exp(-((((n-60)/(20))**2)));
    }

    u = fdtd(S,I,N,s);

    var funcoes_a = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u[200],
            tracado: [0,0],
            limites:[-0.3 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 210",
            nome_eixo: "Função da onda",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: u[210],
            tracado: [2,2],
            limites:[-0.3 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 220",
            nome_eixo: "Função da onda",
            cor: window.chartColors.green,
            borda: window.chartColors.green,
            dados: u[220],
            tracado: [4,4],
            limites:[-0.3 ,1.2],
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
            dados: u[200].slice(0, 21),
            tracado: [0,0],
            limites:[-0.04 ,0.04],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 210",
            nome_eixo: "Função da onda",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: u[210].slice(0, 21),
            tracado: [2,2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 220",
            nome_eixo: "Função da onda",
            cor: window.chartColors.green,
            borda: window.chartColors.green,
            dados: u[220].slice(0, 21),
            tracado: [4,4],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

    var nome_x = "Coordenada i da grade";

    var intervalo_x_a = [];
    var intervalo_x_b = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x_a[index] = index;
    }
    for (let index = 0; index <= 20; index++) {
        intervalo_x_b[index] = index;
    }
    gera_grafico("Exercicio 2.10", nome_x, 3,intervalo_x_a, funcoes_a,false, "exer-2-10-a", true, false,false);
    gera_grafico("Exercicio 2.10", nome_x, 3,intervalo_x_b, funcoes_b,false, "exer-2-10-b", true, false,false);

}