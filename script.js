let templates = [
    {
        "Nome": "Introducao",
        "Conteudo": "Me chamo [Usuario] e estou como responsável pelo seu problema.",
        "Selecionado": false
    },
    {
        "Nome": "Pedir detalhes",
        "Conteudo": "Por favor, poderia fornecer mais detalhes sobre o seu problema?",
        "Selecionado": false
    },
    {
        "Nome": "Pedir passo a passo",
        "Conteudo": "Poderia descrever o passo a passo para reproduzir o problema?",
        "Selecionado": false
    },
    {
        "Nome": "Solucao para problema X",
        "Conteudo": "Para resolver o problema X, tente as seguintes etapas: [Instrução].",
        "Selecionado": false
    },
    {
        "Nome": "Solucao para problema Y",
        "Conteudo": "A solução para o problema Y é a seguinte: [Instrução].",
        "Selecionado": false
    },
    {
        "Nome": "Solucao para problema Z",
        "Conteudo": "Para o problema Z, siga os seguintes passos: [Instrução].",
        "Selecionado": false
    },
    {
        "Nome": "Assinatura",
        "Conteudo": "Atenciosamente, [Seu Nome].",
        "Selecionado": false
    }
];
  
  
function gerarMensagem() {
  
}
  
function copiarParaClipboard() {
    var copiaTexto = document.getElementById("myInput");
    copiaTexto.select(); 
    navigator.clipboard.writeText(copiaTexto.value);
    alert("Copiado para ctrl c!");
}