Questão 01
Resposta - C Service

Questão 02
Resposta - B Organizar o código por funcionalidade (feature), colocando todos os arquivos relacionados a uma feature
(controller, service, etc.) juntos em um mesmo módulo.


Questão 03
Resposta - Na etapa 3 (injeção de dependência), o código fica bem menos dependente um do outro. Na etapa 2, para uma parte do código funcionar, ela cria uma instância do código que ela precisa para rodar; por exemplo, para o service funcionar, ele cria um objeto do repository, deixando assim tudo muito acoplado e difícil de manusear, consequentemente dificultando testes.
Já na etapa 3, o service não cria uma instância do repository, ele apenas importa, fazendo com que os testes fiquem melhores, já que o acoplamento não é tão forte quanto antes. 

Questão 04
Resposta - D Receber requisições HTTP, chamar a camada de serviço e formatar a resposta.

Questão 05
Resposta - A Performance lenta da API devido ao uso do Fastify

Questão 06
Resposta - D A dependência é passada como um argumento para o construtor da classe

Questão 07
Resposta - A Routes recebe a requisição http do front e direciona para a função correspondente no controller (a função de deletar). O Controller manda para o Service para ele aplicar as regras de negócio (ver se o id é válido, etc). O Service manda para o Repository, que se comunica diretamente com o Banco de Dados e realiza o comando DELETE. Depois disso tudo, uma mensagem é mandada para o view avisando que o usuário foi deletado.

Questão 08
Resposta - D Uma classe de modelo que acumula tanto a lógica de negócio quanto a lógica de acesso a dados.

Questão 09
Resposta - C Ser a única camada responsável pelo acesso aos dados (buscar, salvar, etc.)

Questão 10
Resposta - C O "Acoplamento Forte", onde uma classe cria diretamente as instâncias de suas dependências.
