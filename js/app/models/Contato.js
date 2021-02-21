class Contato {
    constructor(name, cpf, phone, email) {
        this._name = name;
        this._cpf = cpf;
        this._phone = phone;
        this._email = email;
    }

    get name() {
        return this._name;
    }
    
    get cpf() {
        return this._cpf;
    }
    
    get phone() {
        return this._phone;
    }

    get email() {
        return this._email;
    }

    set editar (data) {
        this._name = data.name;
        this._cpf = data.cpf;
        this._phone = data.phone;
        this._email = data.email;
    }
}