# dindin-project
Desenvolvimento de uma página web para uma escola que oferece cursos na área financeira. O projeto abrange o desenvolvimento do Front-end, Back-end e DevOps. Este repositório comporta o pojeto do Front-end com 5 pages (Registro, Home, Detalhes dos cursos, Controle e Erros) e integração de uma API para acesso ao Banco de Dados com informações sobre os cursos e aulas. 

Foram utilizados o axios e vuex para consumo da API e gerenciamento do estados das variáveis do Front-end. Foram criados dois serviços e módulos para consumo da API: cursos e aulas.

Os repositórios do Front-end e Back-end foram divididos para facilitar a etapa de testes. O projeto Back-end encontra-se no seguinte repositório: https://github.com/willian465/api-curso.git.

O Front-end foi publicado na Azure Web no link, mas não foi feito o deployment a tempo:
https://dindinfp.scm.azurewebsites.net/

O Back-end foi publicado na Azure Web no link:
https://dindincursos.azurewebsites.net/V1/cursos/

O banco de dados foi publicado no AWS

Os verbos do protocolo HTTP que foram implementados:
- GET:
- POST:
- DELETE:
- PUT:

Foram criadas as tabelas no banco de dados:
- Cursos:
- Aulas:

Foram criadas duas pipelines no Azure Devops, mas não foram integradas com os testes dos códigos:
- dindin1: de Front para testes do Jest;
- dindin2: de Back para testes de .NET Core
