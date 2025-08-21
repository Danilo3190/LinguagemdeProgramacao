// Preenche a matriz 50x50 com números aleatórios entre 15 e 24
function entrada(mat) {
    for (let i = 0; i < 50; i++) {
      mat[i] = [];
      for (let j = 0; j < 50; j++) {
        mat[i][j] = Math.floor(Math.random() * 10) + 15; // números entre 15 e 24
      }
    }
  }
  
  // Conta quantos elementos estão entre 1 e 50 (inclusive)
  function somaEntre1e50(mat) {
    let contador = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] >= 1 && mat[i][j] <= 50) {
          contador++;
        }
      }
    }
    return contador;
  }
  
  // Exibe a matriz em formato legível
  function exibeMatriz(mat) {
    let saida = '';
    for (let i = 0; i < mat.length; i++) {
      saida += mat[i].join(' ') + '\n';
    }
    alert(saida);
  }
  
  // Função principal
  function Exe1() {
    let mat = [];
    entrada(mat);
    alert(`🔢 Quantidade de elementos entre 1 e 50: ${somaEntre1e50(mat)}`);
    exibeMatriz(mat);
  }
  
  Exe1();
  