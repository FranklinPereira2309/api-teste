let {instrutores} = require('../bancodedados');

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}

const listarInstrutoresId = (req, res) => {
    const { id } = req.params;

    
    
    const instrutor = instrutores.find((inst)=> {
        return inst.id === Number(id);

    });

    if(!instrutor) {
        return res.status(404).json({mensagem: 'Instrutor não encontrado!'});
    }


    return res.status(200).json(instrutor);

        
}

const cadastrarInstrutor = (req, res) => {
    const {nome, email, status} = req.body;

    if(!nome || !email) {
        return res.status(400).json({mensagem: "Preencha todos os campos!"});
    }

    const instrutorObj = {
        id: instrutores.length +1,
        nome: nome,
        email: email,
        status: status ?? true
    } 

    instrutores.push(instrutorObj);

    return res.status(201).json(instrutorObj);
}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const {nome, email, status} = req.body;

    const instrutor = instrutores.find((inst) => {
        return inst.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({mensagem: "Instrutor não encontrado!"});
    }

    if(!nome || !email || status === undefined) {
        return res.status(400).json({mensagem: "Preencha os campos!"});
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
}

const atualizarStatusInstrutor = (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    const instrutor = instrutores.find((inst) => {
        return inst.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({mensagem: "Instrutor não encontrado!"});
    }

    if(status === undefined) {
        return res.status(400).json({mensagem: "Preencha o Status!"});
    }

    instrutor.status = status;

    return res.status(204).send();


}

const excluirInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((inst) => {
        return inst.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({mensagem: "Instrutor não encontrado!"});
    }

    instrutores = instrutores.filter((inst) => {
        return inst.id !== Number(id);
    })

    return res.status(204).send();

}

module.exports = {
    listarInstrutores,
    listarInstrutoresId,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
}