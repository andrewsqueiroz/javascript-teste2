class ContatoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');

        this._inputIndex = null
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
    
    adicionaEditar(event) {
        event.preventDefault();
        if (this._inputIndex === null) {
            this.adiciona()
        } else {
            this.editar() 
        }
    }

    adiciona() {
        debugger
        this._listaContatos.adiciona(this._criaContato());
        this._contatosView.update(this._listaContatos);

        let contatos = this._listaContatos.contatos.map(x => {
            return {name: x._name, cpf: x._cpf, phone: x._phone, email: x._email}
        })
        StorageHelper.save(contatos)

        this._limpaFormulario();
        this.closePopup()
    }

    editar() {
        debugger

        let contatoEditado = {
            name: this._inputName.value,
            cpf: this._inputCpf.value,
            phone: this._inputPhone.value,
            email: this._inputEmail.value
        }

        this._listaContatos.editar(contatoEditado, this._inputIndex)

        let contatos = this._listaContatos.contatos.map(x => {
            return {name: x._name, cpf: x._cpf, phone: x._phone, email: x._email}
        })
        StorageHelper.save(contatos)
        this._contatosView.update(this._listaContatos);

        this._limpaFormulario();
        this.closePopup()
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
        document.querySelector('#popUp').classList.add('open');
        document.querySelector('#popUp').classList.add('edit');
        document.querySelector('#main').classList.add('open');
        document.querySelector('#btnForm').innerHTML = 'Editar'

        let contato = this._listaContatos.contatos.filter((x , i) => {
            if (index === i) { return x }
        })[0]
        console.log(contato)
        this._inputName.value = contato._name
        this._inputCpf.value = contato._cpf
        this._inputPhone.value = contato._phone
        this._inputEmail.value = contato._email

        this._inputIndex = index
    }

    openNew() {
        document.querySelector('#popUp').classList.add('open');
        document.querySelector('#main').classList.add('open');
        document.querySelector('#btnForm').innerHTML = 'Incluir'
        this._limpaFormulario()
    }

    closePopup() {
        document.querySelector('#popUp').classList.remove('open');
        document.querySelector('#popUp').classList.remove('edit');
        document.querySelector('#main').classList.remove('open');
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
        this._inputIndex = null
        this._inputName.focus();   
    }
}