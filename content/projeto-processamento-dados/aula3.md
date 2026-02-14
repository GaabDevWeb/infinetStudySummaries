DISCIPLINA: Projeto de Bloco – Fundamentos do Processamento de Dados  
PROFESSOR: Ricardo Garcia  
DATA DA AULA: 13/02/2026  
TEMA DA AULA: Revisão metodologia de projeto, variáveis em Python, fundamentos de SQL, bancos relacionais vs não relacionais, ferramentas e pipeline de dados  
TIPO: Aula expositiva (revisão + técnica)  
ORIGEM: https://drive.google.com/file/d/1zu7GQ2HIPrK450Yw_Bw4oJnB293A4Gtd/view

---

## 1 Tema e Escopo

- **Tema**: Revisão de metodologia de projeto, fundamentos de variáveis em Python, fundamentos de SQL, diferença entre bancos relacionais e não relacionais, ferramentas de acesso a banco de dados e posição do projeto no pipeline de dados (origem → processamento → destino).
- **Problema que resolve**: falta de visão integrada entre sintaxe (Python/SQL), escolha de tecnologia de banco (relacional vs não relacional), ferramentas do dia a dia e o lugar do projeto de bloco no ciclo de vida dos dados (ETL e consumo por ferramentas de BI/visualização).
- **Para que serve**: permitir revisão rápida de variáveis em Python e conceitos iniciais de SQL; entender por que se escolhe um banco relacional ou não relacional; saber que SQL padrão é portável e que cada fabricante tem extensões (T-SQL, PL/SQL); localizar o projeto na “origem” dos dados (banco + processamento) em relação a ferramentas como Looker (destino/visualização).
- **Inclui**:
  - revisão metodologia tradicional x ágil;
  - variáveis em Python (definição, atribuição, tipos básicos, operações, entrada/saída, conversão, comparações);
  - SQL: o que é, conceitos (tabela, coluna, linha, chave primária/estrangeira), DDL/DML, tipos de dados, constraints, CREATE TABLE, SELECT/INSERT/UPDATE/DELETE;
  - bancos relacionais (SQL Server, Oracle, MySQL, PostgreSQL) x não relacionais (MongoDB — documentos/JSON);
  - SQL padrão x T-SQL (Microsoft), PL/SQL (Oracle);
  - cache x persistência em disco;
  - pipeline de dados: origem → processamento → destino (Looker como ferramenta de destino);
  - ferramentas: SSMS, DBeaver, SQL Developer, etc.; primeira entrega Live Coding (02/03).
- **Não inclui**:
  - detalhe completo de todas as disciplinas de Python e SQL (são vistas nas matérias específicas);
  - configuração passo a passo de cada ferramenta;
  - sintaxe avançada de triggers, procedures ou Python dentro do banco.

- **Classificação da aula**: **híbrida** (técnica + conceitual + carreira).

---

## 2 Contexto na Disciplina

- **Onde entra**:
  - terceira aula do bloco; segue revisão de metodologia de projeto e antecipa uso integrado de Python e SQL no projeto e nas avaliações (Live Coding).
- **Pré-requisitos**:
  - noção de projeto de software (tradicional x ágil) e do papel do projeto de bloco (aula anterior);
  - interesse em programação e banco de dados; não é obrigatório dominar Python ou SQL ainda.
- **Dependências futuras**:
  - disciplinas de Python (variáveis, tipos, input/print, conversão) e de SQL (DDL, DML, constraints);
  - primeira entrega Live Coding (02/03); integração Python + banco de dados em projetos ETL e análise.

---

## 3 Visão Conceitual Geral

O professor retoma rapidamente a metodologia de projeto (tradicional x ágil) e o papel de perfis em dados (engenheiro de dados, cientista de dados, analista BI). Em seguida situa o **pipeline de dados**: existe uma **origem** (onde os dados são armazenados e processados — banco de dados, ETL), um **processamento** (transformação, carga) e um **destino** (ferramentas de visualização/BI, ex.: Looker). O projeto de bloco foca na **origem**: como armazenar, acessar e preparar dados com **SQL** e **Python** para que ferramentas downstream consumam esses dados.

São apresentados dois blocos de conteúdo resumidos em mapas mentais: (1) **Variáveis em Python** — nome que armazena valor, atribuição, tipos básicos (int, float, str, bool), operações, `print`/`input`, conversão de tipos, comparações e operadores lógicos; (2) **SQL** — linguagem para criar, consultar e manipular dados em bancos relacionais, conceitos de tabela/coluna/linha, chaves, DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), consulta (SELECT), tipos e constraints.

Em paralelo, a aula esclarece: **bancos relacionais** (SQL Server, Oracle, MySQL, PostgreSQL) usam **SQL** como linguagem padrão; **bancos não relacionais** (ex.: MongoDB) armazenam em formato de documentos (ex.: JSON) e têm linguagem própria. A escolha entre relacional e não relacional depende dos **requisitos do projeto** (estrutura fixa e relacionamentos → relacional; flexibilidade de esquema → não relacional). Existe **SQL padrão** (portável) e **extensões por fabricante** (T-SQL, PL/SQL). Ferramentas como **SSMS**, **DBeaver** e **SQL Developer** são usadas para conectar e operar nos bancos; é possível usar mais de um banco no mesmo projeto, mas em geral o núcleo da solução fica em uma tecnologia. Também se discute **cache** x **persistência em disco**: cache é para dados acessados com frequência (mais rápido); persistência é para dados que precisam ficar gravados. **Live Coding**: primeira entrega em 02/03; acesso por e-mail/link; concentração durante a prova (ferramenta monitora uso).

---

## 4 Ideias-Chave (máx. 7)

1. **Pipeline de dados: origem → processamento → destino**
   - **Importância**: define onde o projeto de bloco atua (origem: banco + SQL/Python) e onde ficam ferramentas como Looker (destino/visualização).
   - **Onde cai em prova**: perguntas sobre ETL, ciclo de vida dos dados, papel de ferramentas de BI.
   - **Onde aparece na prática**: desenho de soluções em que dados nascem no banco, são transformados (Python/ETL) e consumidos por dashboards ou relatórios.
   - **Impacto de não entender**: confundir “processamento de dados” só com visualização e não com armazenamento e transformação na origem.

2. **Variáveis em Python: nome que armazena valor; atribuição; tipos; input retorna str**
   - **Importância**: base de qualquer programa em Python; erro em tipo ou conversão quebra scripts e provas.
   - **Onde cai em prova**: questões sobre `input()` retornando string, necessidade de `int()`/`float()` para cálculos, e uso de `print` com múltiplos argumentos.
   - **Onde aparece na prática**: scripts que leem entrada do usuário, fazem contas e exibem resultado.
   - **Impacto de não entender**: `idade = input("Idade: ")` e depois `idade + 1` gera erro; esquecer conversão é erro comum em prova.

3. **SQL: linguagem para criar, consultar e manipular dados em bancos relacionais**
   - **Importância**: padrão dos bancos relacionais; DDL (estrutura) e DML (dados) + SELECT são o mínimo para provas e projetos.
   - **Onde cai em prova**: CREATE TABLE com constraints, SELECT/WHERE, INSERT/UPDATE/DELETE, tipos (INTEGER, VARCHAR, DATE, etc.).
   - **Onde aparece na prática**: criação de tabelas, inserção e atualização de registros, consultas para relatórios e ETL.
   - **Impacto de não entender**: não conseguir escrever tabela com chave primária/estrangeira ou confundir DDL com DML.

4. **Bancos relacionais (SQL) x não relacionais (ex.: MongoDB — documentos)**
   - **Importância**: decisão de arquitetura; relacional para estrutura e relacionamentos bem definidos; não relacional para flexibilidade de esquema.
   - **Onde cai em prova**: diferença de modelo, quando usar um ou outro, formato de armazenamento (tabelas x documentos).
   - **Onde aparece na prática**: escolha de banco em projeto novo ou migração.
   - **Impacto de não entender**: usar banco relacional onde o requisito pede flexibilidade, ou o contrário.

5. **SQL padrão (portável) x T-SQL (Microsoft) e PL/SQL (Oracle)**
   - **Importância**: o que se aprende em SQL serve em todos os relacionais; cada fabricante adiciona extensões específicas.
   - **Onde cai em prova**: perguntas sobre “SQL” vs “T-SQL” vs “PL/SQL” e portabilidade.
   - **Onde aparece na prática**: trocar de Oracle para PostgreSQL ou SQL Server — o núcleo em SQL padrão tende a funcionar; funções proprietárias não.
   - **Impacto de não entender**: achar que “só sabe MySQL” e não conseguir trabalhar com outro banco relacional.

6. **Ferramentas de acesso: SSMS (SQL Server), SQL Developer (Oracle), DBeaver (múltiplos)**
   - **Importância**: no dia a dia usa-se uma ferramenta para conectar, escrever e executar SQL; DBeaver conecta em vários bancos.
   - **Onde cai em prova**: associação ferramenta–banco (ex.: SSMS para SQL Server).
   - **Onde aparece na prática**: desenvolvimento e suporte em diferentes clientes/bancos.
   - **Impacto de não entender**: não saber como conectar ao banco em ambiente de prova ou estágio.

7. **Live Coding (02/03): entrega em janela de tempo, sem abrir outras coisas**
   - **Importância**: primeira entrega prática do projeto de bloco; formato próximo a processo seletivo.
   - **Onde cai em prova**: a própria atividade é a “prova”; concentração e foco no ambiente são exigidos.
   - **Onde aparece na prática**: testes técnicos de empresa com monitoramento.
   - **Impacto de não entender**: perder prazo ou ser penalizado por uso de outros recursos durante a prova.

---

## 5 Conceitos Essenciais — Explicação Operacional

### Conceito 1 – Variável em Python

- **Definição operacional**: nome (identificador) que armazena um valor em memória; em Python não é obrigatório declarar tipo explicitamente.
- **Quando usar**: sempre que precisar guardar um valor para usar depois (entrada do usuário, resultado de conta, texto).
- **Quando NÃO usar**: não usar nomes vagos (`x`, `a`) ou palavras reservadas (`if`, `for`, `class`).
- **Como reconhecer**: atribuição com `=`, ex.: `idade = 18`; pode ser reatribuída (`contador = 0` depois `contador = 1`).
- **Relação com outros**: `input()` retorna string; para número é preciso `int()` ou `float()`; `type(idade)` retorna o tipo.
- **❌ Erro comum**: fazer `idade = input("Idade: ")` e depois `print(idade + 1)` sem converter: `input()` retorna `str`, soma com inteiro dá erro.
- **⚠️ Pegadinha de prova**: “O que retorna `input()`?” — sempre string.
- **🧪 Como testar**: escrever um script que leia nome e idade, converta idade para int e imprima “Nome tem X anos”.
- **🛠️ Aplicação mínima correta**:
  1. `nome = input("Digite seu nome: ")`
  2. `idade = int(input("Digite sua idade: "))`
  3. `print(nome, idade)` ou `print("Olá", nome)`
- **📏 Critério verificável**: o programa roda sem erro de tipo e exibe o que foi pedido.

---

### Conceito 2 – Tipos básicos e operações em Python

- **Definição operacional**: `int` (inteiros), `float` (decimais), `str` (texto), `bool` (True/False); operadores `+ - * / % ** //`; comparação `== != > < >= <=`; lógicos `and`, `or`, `not`.
- **Quando usar**: para cálculos use `int`/`float`; para texto `str`; para condições `bool` e comparações.
- **Quando NÃO usar**: não misturar str com número em operação aritmética sem conversão.
- **Regra**: `a / b` é divisão real; `a // b` é divisão inteira; `a % b` é resto; `a ** b` é potência.
- **❌ Erro comum**: `print("5" + 3)` — concatenar string com int sem converter.
- **🛠️ Exemplo do material**: `a = 10`, `b = 3` → `a / b` → 3.333...; `a // b` → 3; `a % b` → 1; `a ** b` → 1000.

---

### Conceito 3 – SQL: DDL e DML

- **Definição operacional**: **DDL** (definição): CREATE, ALTER, DROP. **DML** (manipulação): INSERT, UPDATE, DELETE. **Consulta**: SELECT.
- **Quando usar**: CREATE TABLE para criar estrutura; INSERT para inserir; UPDATE para alterar; DELETE para remover; SELECT para consultar.
- **Quando NÃO usar**: não usar DELETE sem WHERE em produção (apaga tudo); não confundir UPDATE com INSERT.
- **Como reconhecer**: comandos que alteram estrutura são DDL; comandos que alteram dados são DML; SELECT só lê.
- **❌ Erro comum**: esquecer WHERE em UPDATE ou DELETE e alterar/apagar todos os registros.
- **🛠️ Aplicação mínima** (exemplo do slide):
  - `CREATE TABLE matricula (id INTEGER PRIMARY KEY, aluno_id INTEGER NOT NULL, ... FOREIGN KEY (aluno_id) REFERENCES alunos(id));`
  - `SELECT id, nome, email FROM alunos WHERE id = 1;`
  - `INSERT INTO alunos (id, nome, email, data_nascimento) VALUES (1, 'Ana', 'ana@faculdade.edu', '2006-05-10');`
  - `UPDATE alunos SET email = 'ana.silva@faculdade.edu' WHERE id = 1;`
  - `DELETE FROM alunos WHERE id = 1;`

---

### Conceito 4 – Tabela, coluna, linha, chave primária, chave estrangeira

- **Definição operacional**: **Tabela**: como planilha com regras definidas. **Coluna (campo)**: identificador e tipo do dado. **Linha (registro)**: um item completo. **Chave primária**: identifica unicamente cada linha. **Chave estrangeira**: cria relacionamento entre tabelas (referência à chave primária de outra tabela).
- **Quando usar**: chave primária em toda tabela; chave estrangeira quando uma tabela referencia outra (ex.: matricula referencia alunos e disciplinas).
- **Quando NÃO usar**: não deixar chave primária nula ou duplicada; não criar FK sem tabela referenciada existir.
- **❌ Erro comum**: criar tabela “matricula” com FK para `alunos(id)` antes de criar a tabela `alunos`.

---

### Conceito 5 – Banco relacional x não relacional

- **Definição operacional**: **Relacional**: dados em tabelas com colunas e linhas; relacionamentos por chaves; linguagem SQL (SQL Server, Oracle, MySQL, PostgreSQL). **Não relacional (ex.: MongoDB)**: armazenamento em documentos (ex.: JSON); esquema mais flexível; linguagem própria, não SQL puro.
- **Quando usar relacional**: estrutura bem definida, muitos relacionamentos, integridade forte (ex.: CRM, ERP).
- **Quando usar não relacional**: estrutura variável, flexibilidade de esquema, dados em formato documento.
- **Relação**: requisitos do projeto mandam; não é “um é melhor que o outro” — são modelos diferentes. Em alguns casos é possível simular características de um no outro (ex.: coluna JSON em banco relacional).
- **❌ Erro comum**: dizer que “MongoDB usa SQL” — não; usa linguagem de consulta própria.
- **⚠️ Pegadinha de prova**: “Qual banco usa SQL?” — os relacionais; MongoDB não.

---

### Conceito 6 – SQL padrão x T-SQL x PL/SQL

- **Definição operacional**: **SQL padrão**: convenção que permite escrever código que funciona em vários bancos relacionais. **T-SQL**: SQL da Microsoft (SQL Server). **PL/SQL**: SQL da Oracle. MySQL e PostgreSQL têm suas extensões. Aprender o **SQL padrão** permite migrar entre bancos; extensões são específicas do fabricante.
- **Quando usar**: em projeto novo ou genérico, priorizar SQL padrão para portabilidade; usar T-SQL/PL/SQL quando o projeto já está naquela tecnologia e precisa de recurso proprietário.
- **Relação**: desenvolvedor “T-SQL” = foco Microsoft; “PL/SQL” = foco Oracle; “SQL” genérico = portável.
- **❌ Erro comum**: achar que código T-SQL roda igual em PostgreSQL sem ajustes.

---

### Conceito 7 – Cache x persistência em disco

- **Definição operacional**: **Persistência**: dados gravados em disco, permanentes. **Cache**: cópia de dados em memória (ou camada rápida) para acesso mais frequente; reduz tempo de resposta e acessos ao disco.
- **Quando usar cache**: dados muito acessados (sessão de usuário, configurações, resultados de consulta quente). Quando usar persistência: dados que precisam permanecer (transações, cadastros).
- **Não confundir**: “mais barato armazenar em cache” não é comparação direta — são funções diferentes; volume em disco costuma ser muito maior; custo de memória (cache) pode ser alto conforme tamanho e momento de mercado.
- **Na prática**: banco de dados usa cache internamente para performance; aplicações usam Redis etc. para cache; ETL persiste em banco.

---

## 6 Procedimento / Execução (quando aplicável)

**Revisão rápida para prova/Live Coding (Python — variáveis):**

1. Abrir ambiente Python (IDLE, VS Code, etc.).
2. Escrever leitura de dois valores (ex.: nome e idade), converter idade para `int`.
3. Imprimir mensagem usando nome e idade.
4. Testar: rodar e conferir se não há erro de tipo.
- **Erro típico**: não converter `input()` para número antes de operação aritmética.
- **Evidência de acerto**: saída correta sem TypeError.

**Revisão rápida para prova (SQL — consulta e DML):**

1. Conectar ao banco (ferramenta disponível no ambiente).
2. Escrever `SELECT colunas FROM tabela WHERE condição`.
3. Se pedir alteração: `UPDATE tabela SET col = valor WHERE condição` ou `INSERT INTO tabela (cols) VALUES (vals)`.
- **Erro típico**: UPDATE/DELETE sem WHERE.
- **Evidência de acerto**: consulta retorna os dados esperados; UPDATE/DELETE afeta só os registros desejados.

**Não coberto nesta aula**: procedimento completo de instalação de cada ferramenta ou criação de projeto ETL ponta a ponta — declarado como não coberto.

---

## 7 Exemplos Relevantes

- **Exemplo 1 – Variáveis e input (material/slide)**  
  `nome = input("Digite seu nome: ")`  
  `idade = int(input("Digite sua idade: "))`  
  `print(nome, idade)`  
  Fixação: `input()` sempre retorna string; para número é obrigatório `int()` ou `float()`.

- **Exemplo 2 – Operações aritméticas (material/slide)**  
  `a = 10`, `b = 3` → `a / b` → 3.333...; `a // b` → 3; `a % b` → 1; `a ** b` → 1000.  
  Fixação: divisão inteira (`//`) e resto (`%`) vs divisão real (`/`).

- **Exemplo 3 – Conversão (material/slide)**  
  `idade_texto = "19"` → `idade = int(idade_texto)` → `print(idade + 1)` → 20.  
  Fixação: conversão explícita antes de operações numéricas.

- **Exemplo 4 – CREATE TABLE com FK (material/slide)**  
  Tabela `matricula` com `id`, `aluno_id`, `disciplina_id`, `data_matricula`, com PRIMARY KEY e FOREIGN KEY para `alunos` e `disciplinas`.  
  Fixação: constraints e relacionamento entre tabelas.

- **Exemplo 5 – Pipeline e Looker (transcrição)**  
  Origem (banco + ETL) → processamento → destino (Looker, Power BI, etc.). O projeto de bloco trabalha na origem; Looker consome dados já preparados.  
  Fixação: posição do projeto no ciclo de vida dos dados.

- **Exemplo 6 – Vários bancos no mesmo projeto (transcrição)**  
  É possível usar Oracle + MySQL + PostgreSQL em um projeto (ex.: transacional em um, analítico em outro), com custo e complexidade maiores; em geral o core fica em uma tecnologia. DBeaver permite conectar em vários.  
  Fixação: requisitos de negócio definem; consultor precisa conhecer mais de um banco.

---

## 8 Diferenças e Confusões Comuns

- **SQL (linguagem) x SQL Server / MySQL / Oracle (produto)**  
  SQL é a linguagem; SQL Server é um SGBD da Microsoft. Aprender SQL permite usar em vários SGBDs relacionais.

- **DDL x DML**  
  DDL mexe na estrutura (CREATE, ALTER, DROP). DML mexe nos dados (INSERT, UPDATE, DELETE). SELECT é consulta (às vezes agrupado ao DML).

- **Banco relacional x não relacional**  
  Relacional: tabelas, SQL, estrutura rígida. Não relacional (ex.: MongoDB): documentos, esquema flexível, linguagem própria. Escolha por requisito, não por “moda”.

- **Cache x armazenamento persistente**  
  Cache: acesso rápido, dados frequentemente acessados, pode ser volátil. Persistência: dados que precisam ficar gravados. Não são “alternativas de preço” simples; são funções diferentes.

- **input() em Python**  
  Sempre retorna string. Quem acha que retorna número erra em prova ao fazer `idade + 1` sem converter.

---

## 9 Como Cai em Prova

- **Formato típico**:
  - questões sobre tipo de retorno de `input()` em Python;
  - diferença entre `/`, `//` e `%` em Python;
  - identificar DDL vs DML em SQL;
  - CREATE TABLE com PRIMARY KEY e FOREIGN KEY;
  - quando usar banco relacional vs não relacional;
  - SQL padrão vs T-SQL/PL/SQL;
  - papel de ferramentas (SSMS, DBeaver) e do pipeline (origem/destino).
- **Tipo de enunciado**:
  - “O que retorna `input()`?”; “Qual operador retorna o resto da divisão?”;
  - “Qual comando altera a estrutura da tabela?”; “O que é chave estrangeira?”;
  - cenários de escolha de banco (estrutura fixa x flexível).
- **Erro cobrado**:
  - tratar `input()` como número; confundir DDL com DML; usar UPDATE/DELETE sem WHERE; dizer que MongoDB usa SQL.
- **Armadilha comum**:
  - alternativas que misturam “linguagem SQL” com “produto SQL Server”; alternativas que dizem que cache “substitui” banco de dados.
- **Avaliação prática (Live Coding)**: critério é executar corretamente o que for pedido (leitura de entrada, cálculo, saída; ou escrita de SQL) no tempo e ambiente definidos.

---

## 10 Pontos de Atenção

- **Live Coding (02/03)**: prazo e janela de acesso são rígidos; não abrir outras abas/aplicativos durante a prova (ferramenta monitora).
- **input() retorna string**: sempre converter com `int()` ou `float()` quando for fazer conta.
- **UPDATE/DELETE sem WHERE**: altera ou apaga todos os registros da tabela — erro grave em produção e em prova.
- **Chave estrangeira**: tabela referenciada deve existir; tipo e significado da coluna devem bater com a PK referenciada.
- **Não inventar sintaxe**: SQL e Python têm regras exatas; “quase certo” costuma dar erro em ambiente de prova.
- **Ferramenta x banco**: saber qual ferramenta usar para qual banco (SSMS → SQL Server; SQL Developer → Oracle; DBeaver → vários) evita perder tempo na prática.

---

## 11 Checklist de Domínio

- [ ] Sei **definir** variável em Python e dizer que `input()` retorna string.
- [ ] Sei **explicar** diferença entre `/`, `//` e `%` e quando usar `int()`/`float()` após `input()`.
- [ ] Sei **reconhecer** DDL (CREATE, ALTER, DROP) e DML (INSERT, UPDATE, DELETE) e SELECT.
- [ ] Sei **reconhecer** chave primária e chave estrangeira em CREATE TABLE.
- [ ] Sei **reconhecer** quando um problema pede banco relacional vs não relacional.
- [ ] Sei **aplicar** (se aplicável): escrever script Python que lê nome e idade e imprime; escrever SELECT com WHERE e INSERT/UPDATE/DELETE com WHERE.
- [ ] Sei **evitar** UPDATE/DELETE sem WHERE e uso de `input()` como número sem conversão.

---

## 12 Auto-Teste

1. O que retorna `input()` em Python? O que fazer para usar o valor em uma soma?
2. Diferencie `a / b`, `a // b` e `a % b` em Python (com a, b inteiros).
3. DDL e DML: dê dois exemplos de comando de cada.
4. O que é chave estrangeira? Como ela se relaciona com chave primária?
5. Em uma frase: quando tende a ser melhor usar banco relacional e quando não relacional?
6. SQL padrão, T-SQL e PL/SQL: qual é portável entre bancos e qual é de fabricante?
7. O projeto de bloco está na “origem”, no “processamento” ou no “destino” do pipeline de dados? E o Looker?

Mini exercício aplicável:

- Escreva em Python: ler nome e idade (inteira); imprimir “Nome tem idade anos”. Garanta que não haja erro de tipo.
- Escreva em SQL: criar uma tabela `curso` com `id` (chave primária), `nome` (obrigatório), `carga_horaria` (inteiro). Inserir um registro de exemplo.

---

## 13 Resumo Estratégico Consolidado

A aula revisa metodologia de projeto e apresenta dois pilares técnicos resumidos em mapas mentais: **variáveis em Python** (atribuição, tipos, operações, `input`/`print`, conversão, comparações) e **SQL** (conceitos de tabela, DDL/DML, tipos, constraints, CREATE TABLE e comandos de manipulação). Situa o projeto no **pipeline de dados** (origem: banco + SQL/Python; destino: ferramentas como Looker). Esclarece **bancos relacionais** (SQL) x **não relacionais** (ex.: MongoDB), **SQL padrão** x **T-SQL/PL/SQL**, e o uso de **ferramentas** (SSMS, DBeaver, SQL Developer). Reforça **Live Coding** em 02/03 e a necessidade de concentração durante a prova. Para prova: dominar tipo de `input()`, conversão, operadores Python, DDL vs DML, chaves e WHERE em UPDATE/DELETE.

---

## 14 Resumo em 5 Linhas

1. Variáveis em Python armazenam valor; `input()` sempre retorna string — é preciso `int()` ou `float()` para números.
2. SQL é a linguagem dos bancos relacionais: DDL (estrutura), DML (dados), SELECT (consulta); tabela tem colunas, linhas, chave primária e pode ter chave estrangeira.
3. Bancos relacionais (SQL Server, Oracle, MySQL, PostgreSQL) usam SQL; não relacionais (ex.: MongoDB) usam documentos e linguagem própria; a escolha depende dos requisitos do projeto.
4. SQL padrão é portável; T-SQL (Microsoft) e PL/SQL (Oracle) são extensões por fabricante; ferramentas como SSMS e DBeaver acessam os bancos.
5. O projeto de bloco atua na origem do pipeline (banco + processamento com SQL/Python); ferramentas como Looker ficam no destino (visualização). Live Coding em 02/03 — manter foco durante a prova.

---

## 15 Palavras-Chave

- Variável (Python)
- input / print
- int, float, str, bool
- Conversão de tipo (int(), float())
- DDL / DML
- SELECT / INSERT / UPDATE / DELETE
- CREATE TABLE
- Chave primária / Chave estrangeira
- Banco relacional / Não relacional
- SQL / T-SQL / PL/SQL
- Pipeline de dados / ETL / Origem / Destino
- Looker / Visualização de dados
- SSMS / DBeaver / SQL Developer
- Cache / Persistência
- Live Coding
