# Documentação da API de Short Links

A API de Short Links permite que os usuários criem links curtos para URLs longas.

## Endpoints da API

A seguir, estão listados os endpoints disponíveis na API:

### `POST /shorten`

Este endpoint é usado para encurtar uma URL longa.

#### Parâmetros da Requisição

| Nome | Tipo | Descrição |



| `url` | String | **Obrigatório.** A URL longa a ser encurtada. |

#### Resposta da Requisição

| Código | Tipo | Descrição |



| 200 | Object | Retorna o link encurtado. |

| 400 | Object | Retorna uma mensagem de erro se o parâmetro `url` estiver faltando ou se a URL fornecida for inválida. |

#### Exemplo de Requisição

```

POST https://api.meudominio.com/shorten

Content-Type: application/json

{

"url": "https://www.meusite.com.br/minhapagina"

}

```

#### Exemplo de Resposta

```

HTTP/1.1 200 OK

Content-Type: application/json

{

"shortLink": "https://meudominio.com/a1b2c3"

}

```

### `GET /:id`

Este endpoint é usado para redirecionar o usuário para a URL longa correspondente ao link encurtado.

#### Parâmetros da Requisição

| Nome | Tipo | Descrição |

| --- | --- | --- |

| `id` | String | **Obrigatório.** O ID do link encurtado. |

#### Resposta da Requisição

Redireciona o usuário para a URL longa correspondente.

#### Exemplo de Requisição

```

GET https://meudominio.com/a1b2c3

```

## Exemplos de Uso

Aqui estão alguns exemplos de como usar a API de Short Links.

### Exemplo 1: Encurtar uma URL

**Requisição:**

```

POST https://api.meudominio.com/shorten

Content-Type: application/json

{

"url": "https://www.meusite.com.br/minhapagina"

}

```

**Resposta:**

```

HTTP/1.1 200 OK

Content-Type: application/json

{

"shortLink": "https://meudominio.com/a1b2c3"

}

```

## Considerações Finais

A API de Short Links é uma maneira simples e eficaz de encurtar URLs longas para torná-las mais fáceis de compartilhar e memorizar. Se você tiver alguma dúvida ou problema com a API, entre em contato conosco pelo email `suporte@meudominio.com`.

## Guia de Instalação

Para instalar a API de Short Links em seu servidor, siga as etapas abaixo:

1. Clone o repositório da API de Short Links do GitHub: ```git clone https://github.com/meudominio/shortlinks.git```

2. Instale as dependências usando o NPM:

  ``` 

  cd shortlinks

  npm install

   ````

  

  

  

  

3. Configure as variáveis de ambiente no arquivo `.env`:

```


URL_DB=mongodb://localhost:27017/shortlinks

```

4. Inicie o servidor:

```

npm start

```

## Autor

A API de Short Links foi desenvolvida por Neto. Você pode entrar em contato comigo pelo meu email `netoff197@gmail.com`

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE.md para obter mais informações.


