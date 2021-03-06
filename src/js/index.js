// Divide um intevalo
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
// Configuracoes para gerar grafico com o Chart.js 
function gera_grafico(titulo,titulo_x, n_funcoes, dados_x, dados_y,zero, elemento_id, scale_on, dual_line, line_v){

    if(line_v){
        linha_vertical = [{
            drawTime: "afterDatasetsDraw",
            id: "hline",
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value:  dados_y[0]['linha_v'],
            borderColor: "black",
            borderWidth: 3,
            borderDash: [3,3]
        }]
    }
    else{
        linha_vertical = [];
    }
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
    else if(dual_line){
        var yAxes_dados = [];

        yAxes_dados = [{
            id: dados_y[0]['id'],
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
        },
        {
            id: dados_y[4]['id'],
            position: dados_y[4]['posicao'],
            ticks: {
                max: dados_y[4]["limites"][4],
                min: dados_y[4]["limites"][0]
            },
            type: dados_y[4]["tipo"],
            scaleLabel: {
                display: true,
                labelString: dados_y[4]["nome_eixo"]
            }
        }];
        for (var i = 0; i <= n_funcoes-1; i++) {
           
            dados[i] = {
                label: dados_y[i]["nome"],
                backgroundColor: dados_y[i]["cor"],
                borderColor: dados_y[i]["borda"],
                data: dados_y[i]["dados"],
                fill: false,
                yAxisID: dados_y[i]['id'],
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
            annotation: {
                annotations: linha_vertical,
            },
			scales: {
				xAxes: [{
                    display: true,
					ticks: {
                        maxTicksLimit: 20,
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

// Executa os graficos depois que a página carregar
window.onload = function() {
    exer_2_4();  //Exercicio 2.4
    exer_2_5();  //Exercicio 2.5
    exer_2_6();  //Exercicio 2.6
    exer_2_7();  //Exercicio 2.7
    exer_2_8();  //Exercicio 2.8
    exer_2_9();  //Exercicio 2.9
    exer_2_10(); //Exercicio 2.10    
    exer_2_11(); //Exercicio 2.11
};