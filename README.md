# Plataforma Educacional Musical com Acompanhamento de Desempenho – Clássica Academy

## Descrição do Projeto
Este projeto tem como objetivo desenvolver uma plataforma educacional voltada ao ensino musical, focada principalmente em instrumentos de cordas, como violino, viola e violoncelo. A plataforma permite que os usuários tenham acesso a cursos organizados em partes teóricas e práticas, além de quizes para avaliação do aprendizado.

O sistema registra as respostas dos alunos, calcula o desempenho obtido em cada curso e armazena um histórico completo dessas informações. A partir desses dados, o usuário pode acompanhar sua evolução por meio de gráficos e indicadores apresentados em uma dashboard interativa.

## Objetivo
Oferecer um ambiente digital que facilite o aprendizado musical, permitindo que alunos acompanhem seu próprio desempenho, identifiquem pontos de melhoria e tenham uma visão clara de sua evolução ao longo do tempo.

## Tecnologias Utilizadas
- HTML, CSS e JavaScript  
- Chart.js para visualização de dados  
- Node.js  
- Express  
- Banco de dados SQL  
- Git e GitHub para versionamento  

## Funcionalidades
- Cadastro e login de usuários  
- Acesso a cursos de diferentes instrumentos  
- Separação dos cursos em parte teórica e prática  
- Realização de quizes para avaliação do aprendizado  
- Dashboard com gráficos de desempenho por instrumento  

## Funcionamento do Sistema
O usuário acessa a plataforma por meio de um navegador web e realiza seu cadastro ou login. Após a autenticação, ele pode acessar os cursos disponíveis conforme os instrumentos liberados em sua conta.

Durante o estudo, o aluno responde quizes relacionados à parte teórica ou prática do curso. As respostas são enviadas ao backend, processadas e armazenadas no banco de dados. Com base nesses dados, o sistema gera métricas que são exibidas em uma dashboard, permitindo ao usuário acompanhar seu desempenho de forma visual e intuitiva.

## Banco de Dados
O banco de dados foi estruturado para armazenar e relacionar as principais informações do sistema, contendo tabelas como:
- usuario
- auxiliar usuario_instrumento
- instrumento  
- quiz
- auxiliar respostas
- resposta  
- quiz  
- respostas  

Essa estrutura permite o controle do acesso aos cursos, o registro das respostas dos quizzes e a geração de relatórios e indicadores de desempenho do usuário.
