# *Tutorial de instalação*

Meteor.js é um framework JavaScript completo que simplifica o desenvolvimento de aplicativos web em tempo real. Neste projeto utilizamos Blaze, que é a biblioteca de template padrão do Meteor.js. O projeto atual utiliza a versão 2.13.3 do Meteor.Js, para tanto é necessário primeiramente fazer a instalação da versão 14.21.3 do Node.JS.

## *1.	Instalação do Node.JS*
**a.**	Acesse a página: [Instalação Node](https://nodejs.org/en/blog/release/v14.21.3)<br>
**b.**	Escolha uma das opções segundo seu sistema operacional. Na criação do projeto foi instalado:<br>
**c.**	Windows 64-bit Installer: [Download Link](https://nodejs.org/dist/v14.21.3/node-v14.21.3-x64.msi)<br>
**d.**	Após fazer o download do arquivo, siga as instruções de instalação.<br>
**e.**	Abra o prompt de comando e digite ```node --version```<br>
**f.**	Caso a instalação tenha sido bem-sucedida, aparecerá a versão do node que foi instalado. Caso contrário, reinicie o computador. <br>
Caso o problema persistir, desinstale o node, acesse novamente a página e veja se seguiu os passos corretamente.

## *2.	Instalação do Meteor.JS*
**a.**	Acesse a página: [Documentação de Instalação MeteorJS](https://docs.meteor.com/install.html)<br>
**b.**	Abra o prompt de comando para instalar o Meteor.Js na versão 2.13.3:<br>
**c.**	Digite: ```npm install -g meteor@2.13.3```<br>
**d.**	Abra a pasta do projeto pelo prompt de comando<br>
**e.**	Digite meteor<br>
**f.**	Aguarde a configuração do projeto. Caso dê problemas devido à internet, pressione CTRL+C para cancelar. Depois digite “meteor”. Siga o procedimento até que o projeto seja configurado.<br>
**g.**	Acesse o projeto através do endereço: http://localhost:3000<br>

# 📁 *Acesso ao projeto*

## *1.	 Configuração do Ambiente de Desenvolvimento*
Para uma experiência de desenvolvimento mais eficiente, é recomendável configurar um ambiente de desenvolvimento adequado. Use um editor de código adequado, como o Visual Studio Code, que oferece suporte aprimorado para o desenvolvimento Meteor.

### *Visual Studio Code*
**a.** Acesse a página: [Visual Studio](https://code.visualstudio.com/)
**b.** Faça o download e instale o Visual Studio Code de acordo com seu sistema operacional.
**c.** Abra o Visual Studio Code e instale extensões úteis para o desenvolvimento Meteor, como "Meteor Tools".

## *4. Criando um Novo Projeto Meteor*
Vamos adicionar um passo para criar um novo projeto Meteor para que os desenvolvedores possam começar rapidamente.

**a.** Abra o prompt de comando na pasta onde você deseja criar o novo projeto.<br>
**b.** Digite: ```meteor create nome-do-projeto```<br>
**c.** Navegue até o diretório do projeto: ```cd nome-do-projeto```<br>
**d.** Inicie o Meteor: ```meteor```<br>

## *5. Estrutura básica do Projeto Meteor*
**client:** Contém arquivos específicos do lado do cliente, como modelos Blaze, folhas de estilo e arquivos JavaScript.<br>
**server:** Contém arquivos específicos do lado do servidor.<br>
**imports:** Uma pasta recomendada para armazenar arquivos compartilhados entre o cliente e o servidor.<br>
**public:** Armazena arquivos estáticos acessíveis diretamente pelo navegador.<br>

## *6. Adicionando Pacotes Meteor*
Para adicionar pacotes no Meteor.JS, você pode acessar a plataforma https://atmospherejs.com, onde poderá identificar diversos pacotes para utilizar no projeto.
Exemplo de comando: ```meteor add aldeed:collection2```

## *7. Gerenciamento de Dependências com npm*
O Meteor usa o npm para gerenciar as dependências do projeto. Para instalar pacotes npm no projeto Meteor, utilize o comando abaixo:

```
meteor npm install nome-do-pacote
```
