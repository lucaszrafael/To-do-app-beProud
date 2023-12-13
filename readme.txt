Tutorial de instalação

Meteor.js é um framework JavaScript completo que simplifica o desenvolvimento de aplicativos web em tempo real. Neste projeto utilizamos Blaze, que é a biblioteca de template padrão do Meteor.js. O projeto atual utiliza a versão 2.13.3 do Meteor.Js, para tanto é necessário primeiramente fazer a instalação da versão 14.21.3 do Node.JS.

1.	Instalação do Node.JS
a.	Acesse a página: https://nodejs.org/en/blog/release/v14.21.3
b.	Escolha uma das opções segundo seu sistema operacional. Na criação do projeto foi instalado:
c.	Windows 64-bit Installer: https://nodejs.org/dist/v14.21.3/node-v14.21.3-x64.msi
d.	Após fazer o download do arquivo, siga as instruções de instalação.
e.	Abra o prompt de comando e digite “node --version”
f.	Caso a instalação tenha sido bem-sucedida, aparecerá a versão do node que foi instalado. Caso contrário, reinicie o computador. 
Caso o problema persistir, desinstale o node, acesse novamente a página e veja se seguiu os passos corretamente.

2.	Instalação do Meteor.JS
a.	Acesse a página: https://docs.meteor.com/install.html
b.	Abra o prompt de comando para instalar o Meteor.Js na versão 2.13.3:
c.	Digite: npm install -g meteor@2.13.3
d.	Abra a pasta do projeto pelo prompt de comando
e.	Digite meteor
f.	Aguarde a configuração do projeto. Caso dê problemas devido à internet, pressione CTRL+C para cancelar. Depois digite “meteor”. Siga o procedimento até que o projeto seja configurado.
g.	Acesse o projeto através do endereço: http://localhost:3000

DICAS

1.	 Configuração do Ambiente de Desenvolvimento
Para uma experiência de desenvolvimento mais eficiente, é recomendável configurar um ambiente de desenvolvimento adequado. Use um editor de código adequado, como o Visual Studio Code, que oferece suporte aprimorado para o desenvolvimento Meteor.

Visual Studio Code
a. Acesse a página: https://code.visualstudio.com/
b. Faça o download e instale o Visual Studio Code de acordo com seu sistema operacional.
c. Abra o Visual Studio Code e instale extensões úteis para o desenvolvimento Meteor, como "Meteor Tools".

4. Criando um Novo Projeto Meteor
Vamos adicionar um passo para criar um novo projeto Meteor para que os desenvolvedores possam começar rapidamente.

a. Abra o prompt de comando na pasta onde você deseja criar o novo projeto.
b. Digite: meteor create nome-do-projeto
c. Navegue até o diretório do projeto: cd nome-do-projeto
d. Inicie o Meteor: meteor

5. Estrutura básica do Projeto Meteor
client: Contém arquivos específicos do lado do cliente, como modelos Blaze, folhas de estilo e arquivos JavaScript.
server: Contém arquivos específicos do lado do servidor.
imports: Uma pasta recomendada para armazenar arquivos compartilhados entre o cliente e o servidor.
public: Armazena arquivos estáticos acessíveis diretamente pelo navegador.
6. Adicionando Pacotes Meteor
Para adicionar pacotes no Meteor.JS, você pode acessar a plataforma https://atmospherejs.com, onde poderá identificar diversos pacotes para utilizar no projeto.
Exemplo de comando: meteor add aldeed:collection2

7. Gerenciamento de Dependências com npm
O Meteor usa o npm para gerenciar as dependências do projeto. Para instalar pacotes npm no projeto Meteor, utilize o comando abaixo:

meteor npm install nome-do-pacote

