class ContatosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table listaUserFull">
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

        <ul class="listaUserMobile">
            ${model.contatos.map((n, index) => `
                <li>
                    <div> <strong>Nome:</strong> ${n.name} </div>
                    <div> <strong>CPF:</strong> ${n.cpf} </div>
                    <div> <strong>Telefone:</strong> ${n.phone} </div>
                    <div> <strong>E-mail:</strong> ${n.email} </div>
                    <div class="mt10">
                        <button onclick="contatoController.openEdit(${index})"> 
                            <span class="icon edit"></span>
                        </button>
                        <button onclick="contatoController.excluir(${index})"> 
                            <svg class="icon close"></svg>
                        </button>
                    </div>
                </li>
            `).join('')} 
        </ul>
        `;
    }
}
