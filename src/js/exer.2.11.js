function func(n, S){
    if (n > 74)
        return 0
    else
        return math.exp(-((((n-60)/(5))**2)));
}

function calcWavef(S1, S2, N, K){

    var U = Array.apply(null, Array(N+1)).map(Number.prototype.valueOf, 0);
    for(var j = 0; j < N+1; j++){
        U[j] = Array.apply(null, Array(K+1)).map(Number.prototype.valueOf, 0);
    }
    for(var n = 0; n < N; n++){
        if (n == 90)
            U[n][0] = func(n, S2);
        else
            U[n][0] = func(n, S1);
    }
    for(var i=0; i < K; i++)
        U[0][i] = 0;

    for(var n = 1; n < N; n++){
        for(var i = 1;i < K; i++)
            if (i == 90){
                U[n+1][i] = (S2**2)*(U[n][i+1] - 2*U[n][i] + U[n][i-1]) + 2*U[n][i] - U[n-1][i];
            }
            else{
                U[n+1][i] = (S1**2)*(U[n][i+1] - 2*U[n][i] + U[n][i-1]) + 2*U[n][i]- U[n-1][i];
            }
    }   
    return U
}
function exer_2_11(){
   /* var S_0 = function (i) {
        return 1;
    }
    
    var S_1 = function (i) {
        return 1.075;
    }*/

    var I = 220;
    var N = 220;
        
    /*var s = function(n,S){
        if (n > 74/S)
            return 0;
        else
            return math.exp(-((((n-60)/(5))**2)));
    }*/

    var S0 = 1;
    var S1 = 1.075;
    
    //var u_0 = fdtd(S_0,I,N,s);
    //var u_1 = fdtd(S_1,I,N,s);
    U = calcWavef(S0, S1, N, I);
    
    var funcoes_a = [
        {
            nome: "n = 200",
            nome_eixo: "Função da onda u(i)",
            cor: window.chartColors.blue,
            borda: window.chartColors.blue,
            dados: U[190].slice(0, 161),
            tracado: [0,0],
            limites:[-1 ,1.2],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 190",
            nome_eixo: "Função da onda",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: U[200].slice(0, 161),
            tracado: [2,2],
            limites:[-1 ,1],
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
            dados: U[190].slice(70, 111),
            tracado: [0,0],
            limites:[-0.8 ,0.8],
            posicao: 'left',
            tipo: 'linear',
        },
        {
            nome: "n = 190",
            nome_eixo: "Função da onda",
            cor: window.chartColors.red,
            borda: window.chartColors.red,
            dados: U[200].slice(70, 111),
            tracado: [2,2],
            posicao: 'left',
            tipo: 'linear',
        }
    ];

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
    gera_grafico("Exercicio 2.11-a", nome_x, 2,intervalo_x_a, funcoes_a,false, "exer-2-11-a", true, false,false);
    gera_grafico("Exercicio 2.11-b", nome_x, 2,intervalo_x_b, funcoes_b,false, "exer-2-11-b", true, false,false);
    
}