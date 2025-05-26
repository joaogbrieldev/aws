# Repository To Store My Knowledge and Learnings with AWS

````markdown
# Explicação dos Comandos AWS S3

## 1. **Criar Bucket**

### Comando:

```bash
aws s3api create-bucket --bucket ew-hello-bucket
```
````

- **Descrição**: Este comando cria um novo bucket no Amazon S3 chamado `ew-hello-bucket`.
- **Detalhes**:
  - `aws s3api`: Usa a interface de baixo nível da AWS para gerenciar buckets.
  - `create-bucket`: Especifica a ação de criar um bucket.
  - `--bucket`: Define o nome do bucket a ser criado.

---

## 2. **Fazer Upload de um Arquivo para o Bucket**

### Comando:

```bash
aws s3 cp hello.txt s3://ew-hello-bucket
```

- **Descrição**: Este comando copia o arquivo `hello.txt` do sistema local para o bucket S3 chamado `ew-hello-bucket`.
- **Detalhes**:
  - `aws s3 cp`: Usa a interface de alto nível para copiar arquivos.
  - `hello.txt`: Caminho do arquivo local a ser enviado.
  - `s3://ew-hello-bucket`: Caminho no S3 onde o arquivo será armazenado.

---

## 3. **Baixar um Arquivo do Bucket**

### Comando:

```bash
aws s3 cp s3://ew-hello-bucket/hello.txt h.txt
```

- **Descrição**: Este comando copia o arquivo `hello.txt` do bucket `ew-hello-bucket` para o arquivo local chamado `h.txt`.
- **Detalhes**:
  - `aws s3 cp`: Usa a interface de alto nível para copiar arquivos.
  - `s3://ew-hello-bucket/hello.txt`: Caminho no S3 do arquivo a ser baixado.
  - `h.txt`: Nome do arquivo local onde o conteúdo será salvo.

---

## 4. **Remover Arquivos Recursivamente de um Bucket**

### Comando:

```bash
aws s3 rm s3://ew-hello-bucket --recursive
```

- **Descrição**: Este comando remove todos os arquivos e diretórios dentro do bucket `ew-hello-bucket` de forma recursiva.
- **Detalhes**:
  - `aws s3 rm`: Usa a interface de alto nível para remover arquivos.
  - `s3://ew-hello-bucket`: Caminho do bucket onde os arquivos serão deletados.
  - `--recursive`: Indica que todos os objetos no bucket, incluindo os em subdiretórios, serão removidos.

---

## 5. **Excluir um Bucket**

### Comando:

```bash
aws s3api delete-bucket --bucket ew-hello-bucket
```

- **Descrição**: Este comando exclui o bucket `ew-hello-bucket`.
- **Importante**: Antes de excluir um bucket, é necessário garantir que ele esteja vazio.
- **Detalhes**:
  - `aws s3api`: Usa a interface de baixo nível para gerenciar buckets.
  - `delete-bucket`: Especifica a ação de excluir um bucket.
  - `--bucket`: Nome do bucket a ser deletado.

---

## Resumo do Fluxo:

1. **Criar um Bucket**: Criamos um local de armazenamento na AWS.
2. **Fazer Upload de um Arquivo**: Enviamos um arquivo local para o bucket.
3. **Baixar um Arquivo**: Recuperamos o arquivo do bucket para o sistema local.
4. **Remover Arquivos**: Limpamos o bucket ao deletar seus conteúdos.
5. **Excluir o Bucket**: Eliminamos o bucket após esvaziá-lo.

````

Você pode copiar e colar esse conteúdo em um arquivo markdown (`.md`) para visualização ou uso posterior.Aqui está o conteúdo formatado como markdown:

```markdown
# Explicação dos Comandos AWS S3

## 1. **Criar um Bucket**
### Comando:
```bash
aws s3api create-bucket --bucket ew-hello-bucket
````

- **Descrição**: Este comando cria um novo bucket no Amazon S3 chamado `ew-hello-bucket`.
- **Detalhes**:
  - `aws s3api`: Usa a interface de baixo nível da AWS para gerenciar buckets.
  - `create-bucket`: Especifica a ação de criar um bucket.
  - `--bucket`: Define o nome do bucket a ser criado.

---

## 2. **Fazer Upload de um Arquivo para o Bucket**

### Comando:

```bash
aws s3 cp hello.txt s3://ew-hello-bucket
```

- **Descrição**: Este comando copia o arquivo `hello.txt` do sistema local para o bucket S3 chamado `ew-hello-bucket`.
- **Detalhes**:
  - `aws s3 cp`: Usa a interface de alto nível para copiar arquivos.
  - `hello.txt`: Caminho do arquivo local a ser enviado.
  - `s3://ew-hello-bucket`: Caminho no S3 onde o arquivo será armazenado.

---

## 3. **Baixar um Arquivo do Bucket**

### Comando:

```bash
aws s3 cp s3://ew-hello-bucket/hello.txt h.txt
```

- **Descrição**: Este comando copia o arquivo `hello.txt` do bucket `ew-hello-bucket` para o arquivo local chamado `h.txt`.
- **Detalhes**:
  - `aws s3 cp`: Usa a interface de alto nível para copiar arquivos.
  - `s3://ew-hello-bucket/hello.txt`: Caminho no S3 do arquivo a ser baixado.
  - `h.txt`: Nome do arquivo local onde o conteúdo será salvo.

---

## 4. **Remover Arquivos Recursivamente de um Bucket**

### Comando:

```bash
aws s3 rm s3://ew-hello-bucket --recursive
```

- **Descrição**: Este comando remove todos os arquivos e diretórios dentro do bucket `ew-hello-bucket` de forma recursiva.
- **Detalhes**:
  - `aws s3 rm`: Usa a interface de alto nível para remover arquivos.
  - `s3://ew-hello-bucket`: Caminho do bucket onde os arquivos serão deletados.
  - `--recursive`: Indica que todos os objetos no bucket, incluindo os em subdiretórios, serão removidos.

---

## 5. **Excluir um Bucket**

### Comando:

```bash
aws s3api delete-bucket --bucket ew-hello-bucket
```

- **Descrição**: Este comando exclui o bucket `ew-hello-bucket`.
- **Importante**: Antes de excluir um bucket, é necessário garantir que ele esteja vazio.
- **Detalhes**:
  - `aws s3api`: Usa a interface de baixo nível para gerenciar buckets.
  - `delete-bucket`: Especifica a ação de excluir um bucket.
  - `--bucket`: Nome do bucket a ser deletado.

---

## Resumo do Fluxo:

1. **Criar um Bucket**: Criamos um local de armazenamento na AWS.
2. **Fazer Upload de um Arquivo**: Enviamos um arquivo local para o bucket.
3. **Baixar um Arquivo**: Recuperamos o arquivo do bucket para o sistema local.
4. **Remover Arquivos**: Limpamos o bucket ao deletar seus conteúdos.
5. **Excluir o Bucket**: Eliminamos o bucket após esvaziá-lo.

<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
