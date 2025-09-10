export class ContatoController {
    
    constructor(contatoService) {
        this.contatoService = contatoService;
    }

    async getContatos(request, reply) {
        const contatos = this.contatoService.getAllContatos();
        return reply.send(contatos);
    }

    async getContatoById(request, reply) {
        const { id } = request.params;
        const contato = this.contatoService.getContatoById(id);

        if (!contato) {
            return reply.code(404).send({ message: 'Contato não encontrado' });
        }
        return reply.send(contato);
    }
    //Adicionar um novo método no ContatoController para lidar com a requisição, chamar o serviço e enviar a resposta (retorne //404 Not Found se o e-mail não for encontrado).

    async getContatoByEmail(request, reply) {
        const { email } = request.params;
        const contato = this.contatoService.getContatoByEmail(email);

        if (!contato) {
            return reply.code(404).send({ message: 'Email não encontrado' });
        }
        return reply.send(contato);
    }




    async createContato(request, reply) {
        const novoContato = this.contatoService.createContato(request.body);

        if (novoContato === null) {
            return reply.code(400).send({message: 'O campo nome deve ter pelo menos 3 caracteres.'})
        }
        return reply.code(201).send(novoContato);

    //O Controller, por sua
    //vez, deve capturar isso e retornar uma resposta com status 400 Bad Request e uma mensagem
    //apropriada.
    }

    async updateContato(request, reply) {
        const { id } = request.params;
        const contatoAtualizado = this.contatoService.updateContato(id, request.body);

        if (!contatoAtualizado) {
            return reply.code(404).send({ message: 'Contato não encontrado' });
        }
        return reply.send(contatoAtualizado);
    }

    async deleteContato(request, reply) {
        const { id } = request.params;
        const sucesso = this.contatoService.deleteContato(id);

        if (!sucesso) {
            return reply.code(404).send({ message: 'Contato não encontrado' });
        }
        return reply.code(204).send();
    }
}