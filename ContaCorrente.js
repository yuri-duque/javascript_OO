import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _saldo = 0;
    cliente = new Cliente();

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

        return;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}