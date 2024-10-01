import EnumTipoContato from "../enums/EnumTipoContato.js";

export default class contatoComplementar {
    constructor(){
        this.id = null;
        this.tipo = EnumTipoContato.TELEFONE;
        this.informacaoDeContato = "";
    }
}