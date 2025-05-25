let templates = [
    {
        "Nome": "Introdução",
        "Conteudo": "Olá! Me chamo [Seu Nome] e serei o responsável por te ajudar com essa solicitação.",
        "Selecionado": false
    },
    {
        "Nome": "Solicitar mais detalhes",
        "Conteudo": "Você poderia, por gentileza, fornecer mais detalhes sobre o problema? Isso nos ajudará a entender melhor o cenário.",
        "Selecionado": false
    },
    {
        "Nome": "Solicitar passo a passo",
        "Conteudo": "Poderia descrever o passo a passo que levou ao erro, incluindo quais telas ou opções foram utilizadas?",
        "Selecionado": false
    },
    {
        "Nome": "Solução para erro de autenticação",
        "Conteudo": "O erro de autenticação geralmente está relacionado a credenciais incorretas ou permissões insuficientes. Recomendamos verificar se o usuário possui o papel necessário atribuído no sistema.",
        "Selecionado": false
    },
    {
        "Nome": "Solução para falha de conexão com banco de dados",
        "Conteudo": "Identificamos que a falha de conexão pode estar relacionada a restrições de rede ou parâmetros incorretos no arquivo de configuração. Verifique se o host, porta e credenciais estão corretos.",
        "Selecionado": false
    },
    {
        "Nome": "Solução para erro de atualização de sistema",
        "Conteudo": "Esse erro ocorre quando há conflito entre versões do pacote. A sugestão é realizar um backup e reinstalar o componente afetado usando a versão compatível.",
        "Selecionado": false
    },
    {
        "Nome": "Encaminhar para especialista",
        "Conteudo": "Estou encaminhando o seu chamado para um especialista da área responsável, que poderá te auxiliar com maior profundidade técnica.",
        "Selecionado": false
    },
    {
        "Nome": "Confirmação de resolução",
        "Conteudo": "Realizamos os testes e não identificamos novos erros. Poderia, por favor, confirmar se o problema também foi resolvido do seu lado?",
        "Selecionado": false
    },
    {
        "Nome": "Solicitar agendamento de call",
        "Conteudo": "Para entendermos melhor o cenário, você poderia disponibilizar um horário para agendarmos uma call e analisarmos em tempo real?",
        "Selecionado": false
    },
    {
        "Nome": "Mensagem final com agradecimento",
        "Conteudo": "Agradecemos por entrar em contato conosco. Estamos à disposição para qualquer outra dúvida ou necessidade futura.",
        "Selecionado": false
    },
    {
        "Nome": "Mensagem temporária enquanto investigamos",
        "Conteudo": "Recebemos sua solicitação e já estamos investigando o problema com a equipe técnica. Em breve retornaremos com uma atualização.",
        "Selecionado": false
    },
    {
        "Nome": "Assinatura",
        "Conteudo": "Atenciosamente,\n[Seu Nome]\nEquipe de Suporte Técnico",
        "Selecionado": false
    }
];


const container = document.getElementById("templateCheckboxes");

templates.forEach((template, index) => {
    container.innerHTML += `
        <label>
            <input type="checkbox" data-index="${index}" ${template.Selecionado ? "checked" : ""}>
            ${template.Nome}
        </label><br>
    `;
});
  
function gerarMensagem() {
    const checkboxes = document.querySelectorAll('#templateCheckboxes input[type="checkbox"]');
    const mensagemPartes = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const index = checkbox.getAttribute('data-index');
            const template = templates[index];
            if (template) {
                mensagemPartes.push(template.Conteudo);
            }
        }
    });

    const mensagemFinal = mensagemPartes.join('\n\n');
    document.getElementById('output').value = mensagemFinal;
}

function copiarParaClipboard() {
    var copiaTexto = document.getElementById("output");
    copiaTexto.select(); 
    navigator.clipboard.writeText(copiaTexto.value);
    alert("Copiado para ctrl c!");
}

function mudarParaNoturno() {
    const elemento = document.getElementById("modo-noturno");
    elemento.addEventListener("click", () => {
        document.body.classList.toggle("modo-noturno");
});
}

mudarParaNoturno();