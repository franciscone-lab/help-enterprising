let vendas = 0;

let listaProdutosVendidos = [];
let listaValoresProdutosVendidos = [];
function cadastrarVenda() {
  let nomeProduto = input_produto.value;
  let valorProduto = Number(input_valor_produto.value);

  listaProdutosVendidos.push(nomeProduto);
  listaValoresProdutosVendidos.push(valorProduto);
  vendas++;

  console.log(listaProdutosVendidos);
  console.log(listaValoresProdutosVendidos);
  console.log(vendas);
}

function listarVendas() {
  let valorTotalVendas = 0;
  div_nota_fiscal.innerHTML = `Vendas realizadas: ${vendas}<br/><br/>`;
  for (let contador = 0; contador < listaProdutosVendidos.length; contador++) {
    div_nota_fiscal.innerHTML += `Produto: ${listaProdutosVendidos[contador]}<br/>
                                          Valor: R$ ${listaValoresProdutosVendidos[contador].toFixed(2)}<br/><br/>`;
    valorTotalVendas += listaValoresProdutosVendidos[contador];
  }
  div_nota_fiscal.innerHTML += `Valor Total: R$ ${valorTotalVendas.toFixed(2)}`;
}

function limparVendas() {
  div_nota_fiscal.innerHTML = "";
  vendas = 0;
  listaProdutosVendidos = [];
  listaValoresProdutosVendidos = [];
}


const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [{
    label: 'Cotação Dólar 2021',
    data: [5.35, 5.41, 5.64, 5.56, 5.23],
    fill: false,
    borderColor: 'white',
    backgroundColor: "white",
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 5.2,
        max: 5.7
      }
    }
  }
};
Chart.defaults.color = 'white';
var myChartLine = new Chart(document.getElementById("myChartLine"), config);

const labelsBar = [2009, 2012, 2015, 2018, 2020];

const dataBar = {
  labels: labelsBar,
  datasets: [
    {
      label: "MEI no Brasil (Milhões)",
      backgroundColor: ["orange", "yellow", "blue"],
      borderColor: "black",
      data: [0.4, 2.6, 5.6, 7.7, 10],
    },
  ],
}

const configBar = {
  type: "bar",
  data: dataBar,
  options: { maintainAspectRatio: false },
}

Chart.defaults.color = 'white';
var myChartBar = new Chart(document.getElementById("myChartBar"), configBar);

//GRÁFICO DE PIZZA
const labelsPizza = ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"];

const dataPizza = {
  labels: labelsPizza,
  datasets: [
    {
      label: "Número de empresas ativas",
      backgroundColor: ["red", "yellow", "purple", "blue", "orange"],
      borderColor: ["red", "yellow", "purple", "blue", "orange"],
      data: [50, 23, 15, 8, 4],
    },
  ],
}

const configPizza = {
  type: "pie",
  data: dataPizza,
  options: { maintainAspectRatio: false },
}

var myChartPizza = new Chart(document.getElementById("myChartPizza"), configPizza);