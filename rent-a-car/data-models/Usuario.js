import EnumPapelUsuario from "../enums/EnumPapelUsuario.js";

export default class Usuario {
    constructor() {
        this.id = null;
        this.nome = "";
        this.papel = EnumPapelUsuario.CLIENTE;
        this.email = "";
    }
}