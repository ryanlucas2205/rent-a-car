import EnumTipoContato from "../enums/EnumTipoContato.js";

export default class ContatoComplementar{
    constructor(){
this.id = null;
this.tipo = EnumTipoContato.EMAIL;
this.informacaoDeContato = "";
    }
}