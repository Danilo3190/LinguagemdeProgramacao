
// Classe representando um paciente// Questao 1
class Paciente {
    constructor(nome, idade, especialidade, pressao) {
        this.nome = nome;
        this.idade = idade;
        this.especialidade = especialidade;
        this.pressao = pressao;
    }

    estaEmRisco() {
        return this.idade > 60 && this.pressao > 14.0;
    }
}

// Classe responsável por armazenar e analisar os pacientes
class Clinica {
    constructor() {
        this.pacientes = []; // vetor de pacientes
    }

    lerPacientes() {
        for (let i = 0; i <5; i++) {
            const nome = prompt(`Nome do paciente ${i + 1}:`);
            const idade = parseInt(prompt("Idade:"));
            const especialidade = prompt("Especialidade:");
            const pressao = parseFloat(prompt("Pressão arterial:"));
            this.pacientes.push(new Paciente(nome, idade, especialidade, pressao));
        }
    }

    pacienteMaiorPressao() {
        if (this.pacientes.length === 0) return null;
        return this.pacientes.reduce((maior, atual) =>
            atual.pressao > maior.pressao ? atual : maior
        );
    }

    contarPacientesRisco() {
        return this.pacientes.filter(p => p.estaEmRisco()).length;
    }

    mediaIdadeCardiologia() {
        const cardiologistas = this.pacientes.filter(p =>
            p.especialidade.toLowerCase() === "cardiologia"
        );
        if (cardiologistas.length === 0) return 0;
        const soma = cardiologistas.reduce((acc, p) => acc + p.idade, 0);
        return soma / cardiologistas.length;
    }

    analisar() {
        const maior = this.pacienteMaiorPressao();
        alert(
            `Paciente com maior pressão: ${maior ? maior.nome : "Nenhum encontrado"}\n` +
            `Quantidade de pacientes em risco: ${this.contarPacientesRisco()}\n` +
            `Média de idade (cardiologia): ${this.mediaIdadeCardiologia().toFixed(1)}`
          );
          
    }
}

// Função principal para executar a análise
function executarAnalise() {
    const clinica = new Clinica();
    clinica.lerPacientes();
    clinica.analisar();
}

// Chame essa função para começar
executarAnalise();



///questao 2
function lerDados() {
    let nomes = [];
    let pressao = [];

    for (let i = 0; i < 3; i++) {
        nomes.push(prompt(`Digite o nome do paciente ${i + 1}:`));
        pressao[i] = [];
        for (let j = 0; j < 4; j++) {
            pressao[i][j] = parseFloat(prompt(`Digite a pressão sistólica do paciente ${nomes[i]} no dia ${j + 1}:`));
        }
    }

    return { nomes, pressao };
}

function pacienteMaiorMedia(nomes, pressao) {
    let maiorMedia = 0;
    let paciente = " ";

    for (let i = 0; i < nomes.length; i++) {
        let soma = pressao[i].reduce((acc, val) => acc + val, 0);
        let media = soma / pressao[i].length;
        if (media > maiorMedia) {
            maiorMedia = media;
            paciente = nomes[i];
        }
    }

    return paciente;
}

function totalMedicoesElevadas(pressao) {
    let total = 0;

    for (let i = 0; i < pressao.length; i++) {
        for (let j = 0; j < pressao[i].length; j++) {
            if (pressao[i][j] > 14.0) {
                total++;
            }
        }
    }

    return total;
}

function mediaPorDia(pressao) {
    let medias = [];

    for (let j = 0; j < pressao[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < pressao.length; i++) {
            soma += pressao[i][j];
        }
        medias.push(soma / pressao.length);
    }

    return medias;
}

function analisarPressao() {
    let { nomes, pressao } = lerDados();
    
    alert(`Paciente com maior média de pressão: ${pacienteMaiorMedia(nomes, pressao)}`);
    alert(`Número total de medições acima de 14.0 mmHg: ${totalMedicoesElevadas(pressao)}`);
    alert(`Média de pressão arterial por dia: ${mediaPorDia(pressao).map(m => m.toFixed(2)).join(", ")}`);
}

analisarPressao();



