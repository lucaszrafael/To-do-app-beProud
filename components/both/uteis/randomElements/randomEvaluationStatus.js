//Retorna um status de avaliação aleatório
//Útil nos processos de população do banco de dados
RandomStatusEval = function(){
    var items = [
        {_id: "evaluation", labelPtMasc: "Em avaliação"},
        {_id: "approved", labelPtMasc: "Aprovado", labelPtFem: "Aprovada"},
        {_id: "reproved", labelPtMasc: "Reprovado", labelPtFem: "Reprovada"},
        {_id: "auto-approved", labelPtMasc: "Auto-aprovado", labelPtFem: "Auto-reprovada"}
    ]
    return RandomItem(items)
}