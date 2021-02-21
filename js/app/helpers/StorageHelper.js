class StorageHelper {
    
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static async loadContatos() {
        return await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
        .then(res =>  res.json())
        .catch(() => [])
    }

    static save(data) {
        localStorage.setItem('users', JSON.stringify(data));
    }
    
    static getContatos() {  
        return JSON.parse(localStorage.getItem('users'));
    }
    
}