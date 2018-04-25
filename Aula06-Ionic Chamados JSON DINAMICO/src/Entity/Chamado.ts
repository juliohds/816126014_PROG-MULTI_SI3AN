import { Fila } from "./Fila";

export class Chamado{
    descricao: string;
    dt_abertura: string;
    status: string;
    dt_fechamento: string;
    fila: Fila;

    constructor(desc, dataA, dataF, status, fila: Fila){
        this.descricao = desc;
        this.status = status;
        this.dt_abertura = dataA;
        this.dt_fechamento = dataF;
        this.fila = fila;
    }
}