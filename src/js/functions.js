
// Calculo do indicador de resolucao no eixo x (N de transicao)
function N_transition(S){
    return (2*math.pi*S)/math.acos(1-2*(S**2));
}

// Calculo de Zeta
function calcZeta(N, S){
    return 1+(1/(S**2))*(math.cos((2*math.pi*S)/N)-1)
}

// Funcao para o calculo da velocidade de fase numerica normalizada
// Utilizada no exer 2.4
function calcVelocidadeAtenuacao(n, S, N){
    var k = 0; // Numero da onda
    var zeta = 0;
	var atenuacao = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0); // Constante de atenuacao
	var Vp = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0); // Velocidade de fase numerica normalizada

    // Calculo do vetor da velocidade
	for (var i = 0; i <= n; i++) {
		if (N[i] <= N_transition(S)) {
			k = math.pi;
			zeta = calcZeta(N[i], S);
			atenuacao[i] = -math.log(-zeta - math.sqrt((zeta ** 2) - 1));
		}
		else {
			k = math.acos(calcZeta(N[i], S))
		}
		Vp[i] = (2 * math.pi) / (N[i] * k);
    }

    var dados = []; // para retornar os valores
    dados[0] = Vp;
    dados[1] = atenuacao;
    
    return dados;
}

// Fincao para o calculo do erro percentual de velocidade de fase
// Utilizada nos exercicios 2.5 e 2.6
function calcVelocidadeErro(n, S, N){
    var Vp = Array.apply(null, Array(N.length)).map(Number.prototype.valueOf, 0); 
    
    var k = 0;
    for(var i=0; i <= N.length-1; i++){
        k = math.acos(calcZeta(N[i], S));
        Vp[i] = (2*math.pi)/(N[i]*k);
    }
    for(var i=0; i <= N.length-1; i++){
        Vp[i] = 100*(1-Vp[i]);
    }
    
    return Vp;
}

// Calculo do FDTD
function fdtd(S, I, N, s){
    var u = Array.apply(null, Array(N)).map(Number.prototype.valueOf, 0); // funcao da onda
    for(var j = 0; j < N; j++){
        u[j] = Array.apply(null, Array(I)).map(Number.prototype.valueOf, 0);
    }
    u[0][0] = s(0, S(0));

    for(var n = 1; n < N; n++){ // Condicoes de contorno
        u[n][0] = s(n, S(0));
        
        for(var i = 1; i < I-1; i++){
            if(n == 1){
                u[n][i] = (S(i)**2)*(u[n-1][i+1] - 2*u[n-1][i] + u[n-1][i-1]) + 2*u[n-1][i];
            }
            else{
                u[n][i] = (S(i)**2)*(u[n-1][i+1] - 2*u[n-1][i] + u[n-1][i-1]) + 2*u[n-1][i] - u[n-2][i];
            }
        }
    }

    return u;
}

var um = function(t){
    if(t >= 0)
        return 1;
    else
        return 0;
}

// pulso gaussiano
var p_gauss = function(n, S){
    return math.exp(-((n*S-40)**2)/200);
}

// Pulso retangular
var p_retangular = function(n,S){
    return um(n) - um(n-(40/S));
}
