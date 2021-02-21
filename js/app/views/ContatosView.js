class ContatosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
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
                        <td>
                            <button onclick="contatoController.openEdit(${index})"> Editar </button>
                            <button onclick="contatoController.excluir(${index})"> Excluir </button>
                        </td>
                    </tr>
                `).join('')}                
            </tbody>

        </table>
        `;
    }
}
