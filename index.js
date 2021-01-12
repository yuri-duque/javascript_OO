import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(1001, cliente2);

conta1.depositar(1000);
conta1.sacar(500);

conta2.depositar(500);
conta2.transferir(200, conta1);

console.log(conta1);
console.log(conta2);