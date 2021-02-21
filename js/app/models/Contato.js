class Contato {
    constructor(name, cpf, phone, email) {
        this._name = name;
        this._cpf = cpf;
        this._phone = phone;
        this._email = email;
        Object.freeze(this);
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
}