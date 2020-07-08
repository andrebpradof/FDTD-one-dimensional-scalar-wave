function N_transition(S){
    return (2*math.pi*S)/math.acos(1-2*(S**2));
}

function zeta(N, S){
    return 1+(1/(S**2))*(math.cos((2*math.pi*S)/N)-1)
}

function calc_parte1(n, S){
    var k = 0;
	var tau = 0;
	var N = makeArr(1, 10, n);
	var at = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);
	var Vp = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);

	for (var i = 0; i <= n; i++) {
		if (N[i] <= N_transition(S)) {
			k = math.pi;
			tau = zeta(N[i], S);
			at[i] = -math.log(-tau - math.sqrt((tau ** 2) - 1));
		}
		else {
			k = math.acos(zeta(N[i], S))
		}
		Vp[i] = (2 * math.pi) / (N[i] * k);
    }

    var dados = [];
    dados[0] = Vp;
    dados[1] = at;
    
    return dados;
}

function fdtd(S, I, N, s){
    var u = Array.apply(null, Array(N)).map(Number.prototype.valueOf, 0);
    for(var j = 0; j < N; j++){
        u[j] = Array.apply(null, Array(I)).map(Number.prototype.valueOf, 0);
    }
    //console.log(u);
    u[0][0] = s(0, S(0));

    for(var n = 1; n < N; n++){
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

var f_gauss = function(n, S){
    return math.exp(-((n*S-40)**2)/200);
}

var v = function(n,S){
    return um(n) - um(n-(40/S));
}
