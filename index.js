class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    depositar(valor) {
        if (valor > 0)
            conta1.saldo += valor;
        else
            console.log('O valor não pode ser depositado indisponivel!')
    }

    sacar(valor) {
        if (conta1.saldo >= valor)
            conta1.saldo -= valor;
        else
            console.log('Saldo indisponivel!')
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const conta1 = new ContaCorrente();
conta1.saldo = 0;
conta1.agencia = 1001;

conta1.depositar(100);

let valorSacado = 200;
conta1.sacar(valorSacado);


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const conta1 = new ContaCorrente();
conta1.saldo = 0;
conta1.agencia = 1001;



const cliente3Nome = "Alice";
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;
console.log(cliente1, cliente2);