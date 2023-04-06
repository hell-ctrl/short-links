<h1>Documentação da api de Short Links</h1>

<p>Esta é a documentação da API de Short Links, que permite aos usuários criar links curtos a partir de URLs longas.</p>

<h2>Visão geral</h2>

<p>A API tem os seguintes endpoints:</p>

<ul> 

  <li><code><strong>`/short`</strong></code>: cria um link curto para uma URL longa.</li>

  <li><code><strong>`/short:id`</strong></code>: redireciona para a URL correspondente ao link curto.</li>

</ul>

<h2>Endpoins</h2>

<code><h3>`/short`</h3></code>

<p>Cria um link curto para uma URL longa.</p>

<p><strong>Requisição</strong></p>

<code><strong>`POST /short`</strong></code>

<h3>Corpo da Requisição:</h3>

<pre>{

  "url": "https://www.exemplo.com/caminho/para/a/página"

}

</pre>

<h3>Respostas:</h3>

<ul>

  <li>200 OK: o link curto foi criado com sucesso.</li>

  <li>400 Bad Request: a solicitação está faltando informações obrigatórias ou contém informações inválidas.</li>

  <li>500 Error: ocorreu um erro no servidor.</li>

</ul>

<h3>Corpo da resposta:</h3>

<pre>{

  "original_url": "https://example.com",

  "shorted_link": "https://www.meusite.com/abc123"

}

</pre>

<code><h3>`/short/:id`</h3></code>

<p>Redireciona para a URL correspondente ao link curto.</p>

<p><strong>Requisição</strong></p>

<code><strong>`GET /short/:id`</strong></code>

<h3>Respostas:</h3>

<ul>

  <li>404 Not Found: o link curto não foi encontrado.</li>

  <li>500 Error: ocorreu um erro no servidor</li>

</ul>

<h2>Exemplos de uso:</h2>

<h3>Nodejs</h3>

<pre class="highlight"><code class="language-javascript">const axios = require('axios');

const longUrl = 'https://www.exemplo.com/caminho/para/a/página';

axios.post('https://exemplo.com/api/shorten', { url: longUrl })

  .then(response => {

    console.log('URL encurtada:', response.data.shortUrl);

  })

  .catch(error => {

    console.error('Erro ao encurtar URL:', error.message);

  });

const axios = require('axios');

const longUrl = 'https://www.exemplo.com/caminho/para/a/página';

axios.post('https://exemplo.com/api/shorten', { url: longUrl })

  .then(response => {

    console.log('URL encurtada:', response.data.shortUrl);

  })

  .catch(error => {

    console.error('Erro ao encurtar URL:', error.message);

  });

</code></pre>

<h2>Licença</h2>

<p>Esta API está licenciada sob a licença MIT. Leia o arquivo <a href="./license.md">LICENSE</a> para mais informações.</p>
