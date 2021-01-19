export class Conta{
    constructor(saldoInicial, cliente, agencia){
        debugger;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;        
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
