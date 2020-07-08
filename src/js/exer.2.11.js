function exer_2_11(){
    var S = function(i){
        return 1.0005;
    }

    var I = 220;
    var N = 400;

    var s = function(n){
        return math.exp(-((n-60)**2)/(2*(10**2)));
    }

    u = fdtd(S,I,N,s);

    var funcoes_a = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u[200],
            tracado: [0,0],
            limites:[-0.6 ,1.4],
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
            limites:[-0.2 ,1.2],
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
            limites:[-0.2 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

    var funcoes_b = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: u[200].slice(0, 21),
            tracado: [0,0],
            limites:[-0.000004 ,0.000004],
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

    var nome_x = "";

    var intervalo_x_a = [];
    var intervalo_x_b = [];

    for (let index = 0; index <= I; index++) {
        intervalo_x_a[index] = index;
    }
    for (let index = 0; index <= 20; index++) {
        intervalo_x_b[index] = index;
    }
    gera_grafico("Exercicio 2.11", nome_x, 3,intervalo_x_a, funcoes_a,false, "exer-2-11-a", true);
    gera_grafico("Exercicio 2.11", nome_x, 3,intervalo_x_b, funcoes_b,false, "exer-2-11-b", true);

}