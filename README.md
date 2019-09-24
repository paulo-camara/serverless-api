# serverless-api

## Criado com

* [serverless](https://github.com/serverless/serverless) - Framework Javascript de construção de micro-serviços por eventos ou rotas.
* [serverless-offiline](https://github.com/dherault/serverless-offline) - Biblioteca Javascript de emulação de Lambda λ e Api Gateway localmente.

## Criando api com serveless aws

Projeto criado para aprendizado de funcionamento de api serverless, lambdas, api gateway entre outros serviços.

## Configurando keys aws para deploy

Digite o seguinte comando no terminal:

`` serverless  config credentials -o --provider aws --key KEY --secret SECRET_KEY`` 

## Deploy na Aws

Para fazer o deploy, digite o seguinte comando no terminal:

``serverless deploy``

## Rodando api local

Para rodar api localmente, digite o seguinte comando no terminal:

``npm start``

O comando acima irá subir a api em ``http://localhost:4000``, caso deseje trocar a porta, altere no arquivo ``serverless.yml`` a variavel ``custom > serverless-offline > port``
