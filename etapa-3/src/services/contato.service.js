export class ContatoService {

    constructor(contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    getAllContatos() {
        return this.contatoRepository.findAll();
    }

    getContatoById(id) {
        return this.contatoRepository.findById(id);
    }

    getContatoByEmail(email){
        const email = toString(email)
        return this.contatoRepository.findByEmail(email)
    }


    //Adicionar um novo método getContatoByEmail(email) no ContatoService que chama o repositório.


    //No método createContato, adicione uma validação para impedir a criação de um contato se o
    //campo nome tiver menos de 3 caracteres.
    //Se a validação falhar, o serviço deve lançar um erro (ou retornar null). 
    createContato(contatoData) {
        const index = contatoData;
        if (index.length < 3) return null;

        return this.contatoRepository.create(contatoData);

    }

    updateContato(id, contatoData) {
        return this.contatoRepository.update(id, contatoData);
    }

    deleteContato(id) {
        return this.contatoRepository.remove(id);
    }
}