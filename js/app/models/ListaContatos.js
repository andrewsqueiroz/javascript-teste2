class ListaContatos {
    
    constructor() {
        this._contatos = [];
    }
    
    adiciona(contato) {
        this._contatos.push(contato);
    }

    excluir(index) {
        this._contatos.splice(index, 1);
    }

    editar(data, index) {
        this._contatos[index]._name = data.name
        this._contatos[index]._cpf = data.cpf
        this._contatos[index]._phone = data.phone
        this._contatos[index]._email = data.email
        //Contato.editar(data)
    }
    
    get contatos() {
        return [].concat(this._contatos);
    }
}