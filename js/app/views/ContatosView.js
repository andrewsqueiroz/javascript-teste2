class ContatosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th></th>
                </tr>
            </thead>
        
            <tbody>
                ${model.contatos.map((n, index) => `
                    <tr>
                        <td>${n.name}</td>
                        <td>${n.cpf}</td>
                        <td>${n.phone}</td>
                        <td>${n.email}</td>
                        <td class="actionColum">
                            <button onclick="contatoController.openEdit(${index})"> 
                                <span class="icon edit"></span>
                            </button>
                            <button onclick="contatoController.excluir(${index})"> 
                                <svg class="icon close"></svg>
                            </button>
                        </td>
                    </tr>
                `).join('')}                
            </tbody>

        </table>
        `;
    }
}
