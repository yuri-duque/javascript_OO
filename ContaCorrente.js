import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._saldo = 0;
        this._cliente = cliente;
    }

    agencia;
    _saldo = 0;
    _cliente;

    set cliente(cliente) {
        if (cliente instanceof Cliente)
            this._cliente = cliente;
    }

    get saldo() {
        this._saldo;
    }

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}