function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var aux;
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        aux = parseFloat(startValue + (step * i)).toFixed(2);
        arr.push(parseFloat(aux));
      }
    
      return arr;
}

function gera_grafico(titulo,titulo_x, n_funcoes, dados_x, dados_y,zero, elemento_id, scale_on){

    var dados = [];
    if(scale_on){
        var yAxes_dados;
        yAxes_dados = [{
            position: dados_y[0]['posicao'],
            ticks: {
                max: dados_y[0]["limites"][1],
                min: dados_y[0]["limites"][0]
            },
            type: dados_y[0]["tipo"],
            scaleLabel: {
                display: true,
                labelString: dados_y[0]["nome_eixo"]
            }
        }];

        for (var i = 0; i <= n_funcoes-1; i++) {
          
            dados[i] = {
                label: dados_y[i]["nome"],
                backgroundColor: dados_y[i]["cor"],
                borderColor: dados_y[i]["borda"],
                data: dados_y[i]["dados"],
                fill: false,
                borderDash: dados_y[i]["tracado"],
            }
            
        }
    }
    else{
        var yAxes_dados = [];
        for (var i = 0; i <= n_funcoes-1; i++) {
            yAxes_dados[i] = {
                id: i,
                position: dados_y[i]['posicao'],
                ticks: {
                    max: dados_y[i]["limites"][1],
                    min: dados_y[i]["limites"][0]
                },
                type: dados_y[i]["tipo"],
                scaleLabel: {
                    display: true,
                    labelString: dados_y[i]["nome_eixo"]
                }
            };

            dados[i] = {
                label: dados_y[i]["nome"],
                backgroundColor: dados_y[i]["cor"],
                borderColor: dados_y[i]["borda"],
                data: dados_y[i]["dados"],
                fill: false,
                yAxisID: i,
                borderDash: dados_y[i]["tracado"],
            }
        }
    }
    
    var config = {
		type: 'line',
		data: {
			labels: dados_x,
			datasets: dados
		},
		options: {
            bezierCurve: false,
			responsive: true,
			title: {
				display: true,
				text: titulo
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			elements: {
				point: {
					radius: 0
                },
                line: {
                    tension: 0
                }
			},

			scales: {
				xAxes: [{
                    display: true,
					ticks: {
                        callback: function (value, index, values) {
                            if(Number.isInteger(value)){
                                return value;
                            }
                            return "";
                        }
                    },
					scaleLabel: {
						display: true,
						labelString: titulo_x
					},
				}],
				yAxes: yAxes_dados
			}
		}
    };

    var ctx = document.getElementById(elemento_id).getContext('2d');
	window.myLine = new Chart(ctx, config);
}


window.onload = function() {
    exer_2_4(1/math.sqrt(2), 100);
    exer_2_5(1/2, 100);
    exer_2_6(1/math.sqrt(2), 100);
    exer_2_8(0.5,1,v);
    exer_2_9(0.5,1,f_gauss);
    exer_2_10();
    exer_2_11();
};