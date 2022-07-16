# IMDB Painel (Fork buscando filmes API imdb)

Repositório referente ao #7DaysOfCode da Alura :)

Projeto desenvolvido durante o evento #7DaysOfCode da Alura. 

Veja o resultado final em: https://emeath.github.io/Repo1_7DaysOfCode_Alura/

---

### Usando o painel

Para realizar a busca, é necessário usar uma chave fornecida pelo serviço do [IMDb](https://imdb-api.com/api), após inserido a key, ficara armazenada em memória para as demais buscas.

##### O end-point para buscar filmes

```
https://imdb-api.com/pt-BR/API/SearchMovie/{{Sua chave aqui}}/inception
```

Para os campos de notas, e sinopse (descrição) é necessário usar mais um end-point, ou usar outro diferente desse que traga esses dados.

### Sugestões

- [ ] Adicionar um back end para persistir os filmes favoritos com autenticação JWT
- [ ] Aplicar alguns patterns, refatorar [meu](https://github.com/src-rodrigues) código feio para classes
- [ ] Adicionar um feedback para o usuário que a API está processando a requisição, e impedi-lo de ativar funções no painel


