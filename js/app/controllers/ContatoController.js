class ContatoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');

        this._listaContatos = new ListaContatos();
        this._contatosView = new ContatosView($('#contatosView'));
        this._contatosView.update(this._listaContatos);
    }

    loadContatos() {
        let contatos = StorageHelper.getContatos()
        debugger
        if (contatos?.length > 0) {
            this._setContatos(contatos)
            return false
        }

        let listContatos = StorageHelper.loadContatos()
        listContatos.then(data => {
            console.log(data)
            this._setContatos(data)
        })
    }

    _setContatos(data) {
        data.forEach(contato => {
            this._listaContatos.adiciona(
                new Contato(
                    contato.name,
                    contato.cpf,
                    contato.phone,
                    contato.email
                )
            );
        });
        StorageHelper.save(data)
        this._contatosView.update(this._listaContatos);
    }
    
    adiciona(event) {
        event.preventDefault();
        debugger
        this._listaContatos.adiciona(this._criaContato());
        this._contatosView.update(this._listaContatos);

        let contatos = this._listaContatos.contatos.map(x => {
            return {name: x._name, cpf: x._cpf, phone: x._phone, email: x._email}
        })
        StorageHelper.save(contatos)

        this._limpaFormulario();
    }

    excluir(index) {
        debugger
        console.log(index)
        this._listaContatos.excluir(index);
        let contatos = this._listaContatos.contatos.map(x => {
            return {name: x._name, cpf: x._cpf, phone: x._phone, email: x._email}
        })
        StorageHelper.save(contatos)
        this._contatosView.update(this._listaContatos);
    }

    openEdit(index) {
        let contato = this._listaContatos.contatos.filter((x , i) => {
            if (index === i) { return x }
        })[0]
        console.log(contato)
        this._inputName.value = contato._name
        this._inputCpf.value = contato._cpf
        this._inputPhone.value = contato._phone
        this._inputEmail.value = contato._email
    }
    
    _criaContato() {
        return new Contato(
            this._inputName.value,
            this._inputCpf.value,
            this._inputPhone.value,
            this._inputEmail.value
        );    
    }
    
    _limpaFormulario() {
        this._inputName.value = '';
        this._inputCpf.value = '';
        this._inputPhone.value = '';
        this._inputEmail.value = '';
        this._inputName.focus();   
    }
}