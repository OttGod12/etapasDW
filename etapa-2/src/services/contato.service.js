import { ContatoRepository } from '../repositories/contato.repository.js';

export class ContatoService {

    constructor() {
        this.contatoRepository = new ContatoRepository();
    }

    getAllContatos() {
        return this.contatoRepository.findAll();
    }

    getContatoById(id) {
        return this.contatoRepository.findById(id);
    }

    createContato(contatoData) {
        return this.contatoRepository.create(contatoData);
    }

    updateContato(id, contatoData) {
        return this.contatoRepository.update(id, contatoData);
    }

    deleteContato(id) {
        return this.contatoRepository.remove(id);
    }
}