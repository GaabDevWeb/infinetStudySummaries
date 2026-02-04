DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 27/01/2026
TEMA DA AULA: Introdução à visualização de dados e ao Looker Studio no bloco Fundamentos do Processamento de Dados  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1y3hd14B6_GYEVNJSmf9rwcJcEK6G8XaV/view

---

### 1 Tema e Escopo

- **Tema**: Introdução à disciplina `Fundamentos do Processamento de Dados` com foco em **visualização de dados no Looker Studio (antigo Google Data Studio)** e visão geral de **avaliação por competências (TP/AT) e presença**.
- **Problema que resolve**: Como transformar grandes volumes de dados em informações compreensíveis, visuais e acionáveis, dentro da estrutura acadêmica do bloco de entrada.
- **Para que serve**:
  - Entender o papel do **cidadão de dados**.
  - Compreender o ciclo **dado → informação → insight → ação**.
  - Construir um **primeiro relatório** no Looker Studio a partir de Google Sheets.
  - Entender **como a disciplina será avaliada** (TPs, AT, presença mínima).
- **Inclui**:
  - Conceitos de *cidadão de dados* e acessibilidade de dados.
  - Processo de extração de valor dos dados.
  - Conceitos iniciais de visualização de dados e dashboards.
  - Introdução ao Looker Studio (o que é, características, conectores).
  - Diferença entre **métrica**, **dimensão** e **agregação**.
  - Regras de **TPs, AT, presença** e cronograma do trimestre.
- **Não inclui** (nesta aula):
  - Detalhes de SQL (isso começa na etapa 5 em diante).
  - Modelagem de banco de dados.
  - Power BI ou outras ferramentas além de menção superficial.

> **Lacuna declarada**: a aula menciona que SQL será trabalhado (operadores, `GROUP BY`, `HAVING`, etc.), mas **não entra em detalhe técnico** ainda. Esses conteúdos são “não cobertos” aqui, apenas contextualizados.

---

### 2 Contexto na Disciplina

- **Onde entra**:
  - Primeira aula do bloco de entrada, na disciplina de **visualização de dados e SQL** (terça e quinta).
  - Parte do bloco `Fundamentos do Processamento de Dados`, que combina:
    - Python (segunda e quarta).
    - Visualização de dados + SQL (terça e quinta, com este professor).
    - Projeto (sexta, integrando todas as disciplinas ao longo de dois trimestres).
- **Pré-requisitos esperados**:
  - Nenhum conhecimento prévio formal em TI é exigido (a aula assume **nível iniciante**).
  - Apenas saber operar minimamente um navegador, acessar o `infnet.online` e usar conta Google do Infnet.
- **Dependências futuras**:
  - Os conceitos de **métrica**, **dimensão** e **visualização** são base para:
    - TPs de visualização de dados (ex.: Hermann’s Cake and Coffee Shop).
    - Projeto integrador (uso de dashboards como entregáveis).
  - A familiaridade com o Looker Studio e tratamento de dados é base para:
    - Uso posterior de outras ferramentas (como Power BI) em disciplinas futuras.
  - A disciplina de SQL (a partir da etapa 5) usará a mesma lógica de **extrair, selecionar e resumir dados** que você começa a ver aqui visualmente.

---

### 3 Visão Conceitual Geral

1. **Dados estão em toda parte** (transações bancárias, apps, redes sociais, sensores, serviços de streaming, governo, etc.).
2. Sem organização, ferramental e análise, esses dados **não geram valor**.
3. Surge a figura do **cidadão de dados**: qualquer profissional que tem acesso a dados e ferramentas simples para analisar, visualizar e tomar decisões melhores.
4. A **visualização de dados** é a etapa final de um ciclo:
   - Coletar dados → Transformar em informação → Analisar → Comunicar → Agir.
5. O **Looker Studio** (antigo Google Data Studio) é uma ferramenta online, gratuita, focada em:
   - Conectar-se a várias fontes (Google Sheets, CSV, bancos, etc.).
   - Processar/transformar dados básicos.
   - Construir dashboards, relatórios e painéis interativos.
6. Em qualquer dashboard, aparecem dois tipos de campos:
   - **Dimensões** (categorias, descrições).
   - **Métricas** (números que medem algo nessas categorias), possivelmente agregadas (soma, média, contagem, etc.).
7. Do ponto de vista acadêmico, o aprendizado aqui é **avaliado por competências**:
   - **TPs (Testes de Performance)**: pré-requisito obrigatório, sem nota oficial.
   - **AT (Assessment)**: prova/trabalho com nota.
   - **Presença mínima de 75%** exigida pelo MEC, acompanhada nas lives.

---

### 4 Ideias-Chave (máx. 7)

1. **Cidadão de dados**  
   - **Importância**: define o papel que qualquer profissional pode assumir ao usar dados no dia-a-dia, sem ser um cientista de dados “full”.  
   - **Prova**: costuma aparecer em perguntas conceituais (“defina”, “caracterize”, “explique a diferença”).  
   - **Prática**: uso de dashboards, relatórios, planilhas e ferramentas como Looker Studio para tomar decisões no trabalho.  
   - **Impacto de não entender**: tratar dados como “coisa do TI” apenas, perdendo a conexão entre o que a ferramenta mostra e o que deve ser decidido.

2. **Processo de extração de valor dos dados**  
   - **Importância**: organiza a forma de pensar o fluxo completo de dados até ação.  
   - **Prova**: perguntas de ordenação de etapas, identificação de falhas (“em qual etapa o processo está quebrado?”).  
   - **Prática**: quando algo falha (dados ruins, insight errado, ação sem efeito), você identifica em qual etapa parou.  
   - **Impacto de não entender**: pular direto para “fazer gráfico bonito” sem garantir dados limpos e interpretação correta.

3. **Visualização de dados e dashboards**  
   - **Importância**: é a forma como informação chega ao tomador de decisão; se a visualização for ruim, a decisão tende a ser ruim.  
   - **Prova**: questões perguntando “qual gráfico é mais adequado” ou “qual painel responde melhor ao objetivo do negócio”.  
   - **Prática**: desenhar painéis que respondem perguntas claras do negócio (ex.: “quais produtos mais vendem?”).  
   - **Impacto de não entender**: painéis cheios de gráficos mas que ninguém usa ou entende.

4. **Looker Studio como ferramenta de visualização**  
   - **Importância**: ferramenta principal das primeiras etapas; aprender a usá-la é requisito para TP1.  
   - **Prova**: enunciados pedindo passo a passo de conexão a planilha, criação de gráficos, definição de dimensões/métricas.  
   - **Prática**: construção de relatórios como o da confeitaria Hermann’s (vendas por produto e tipo).  
   - **Impacto de não entender**: dificuldade para executar TP/AT e para acompanhar demonstrações em aula.

5. **Métricas, dimensões e agregações**  
   - **Importância**: são o “vocabulário” base de qualquer relatório; quase tudo em BI gira em torno disso.  
   - **Prova**: identificar se um campo é métrica ou dimensão, escolher agregação correta, interpretar contagem x soma x média.  
   - **Prática**: escolher corretamente o que vai no eixo, legenda, fatias de pizza, filtros, etc.  
   - **Impacto de não entender**: gráficos errados (ex.: tratar nome de produto como métrica, somar campos que não deveriam ser somados).

6. **Avaliação por TPs e AT, com presença mínima**  
   - **Importância**: define como você é aprovado; ignorar isso leva à reprovação mesmo com bom entendimento técnico.  
   - **Prova**: pode aparecer de forma indireta, cobrando se o aluno entende sequência TP→AT, obrigatoriedade e consequências de não entregar.  
   - **Prática**: planejar agenda para entregar 3 TPs + AT em cada disciplina, dentro dos prazos, mantendo presença ≥ 75%.  
   - **Impacto de não entender**: perder direito ao AT, necessidade de reintegra, reprovação por falta.

7. **Estrutura do trimestre e do bloco de entrada**  
   - **Importância**: explica como disciplinas se encaixam (Python, Visualização/SQL, Projeto) e como o projeto usa tudo.  
   - **Prova**: pode aparecer em questões de contexto (“o que o projeto integra?”, “como os TPs se distribuem?”).  
   - **Prática**: usar o projeto para consolidar o aprendizado, saber quando esperar TPs/ATs e que tipo de entrega é exigida.  
   - **Impacto de não entender**: tratar cada disciplina isolada, sem aproveitar a integração entre elas.

---

### 5 Conceitos Essenciais — Explicação Operacional

#### 5.1 Cidadão de dados

- **Definição operacional**  
  Pessoa que:
  - tem **acesso a dados** em formato analisável (planilhas, relatórios, bases);
  - tem **acesso a ferramentas** (Looker Studio, planilhas, dashboards);
  - tem **interesse em extrair conhecimento** dos dados;
  - busca **gerar valor** para si, para o negócio ou para a comunidade.

- **Quando usar esse conceito**  
  - Ao falar de quem deve usar dashboards (não só TI, mas áreas de negócio).
  - Ao justificar o uso de ferramentas simples (Looker Studio) para usuários não técnicos.

- **Quando NÃO usar**  
  - Para se referir a um cientista de dados “full” (formação específica, estatística avançada, programação pesada).

- **Como reconhecer**  
  - No material: expressões como “cientista de dados cidadão”, “data citizen”, “pessoas da linha de frente usando dados”.
  - Em exemplos: gerente de cafeteria que lê relatórios de vendas, profissional de marketing que acompanha painéis.

- **Relação com outros conceitos**  
  - Depende de **acessibilidade de dados** e de **ferramentas** simples.
  - Atua no processo de extração de valor dos dados, geralmente nas etapas de análise e ação.

- ❌ **Erro comum real**  
  Confundir **cidadão de dados** com “usuário que só recebe relatório pronto” sem interpretá-lo. Cidadão de dados **participa ativamente** da análise e da decisão.

- ⚠️ **Pegadinha de prova**  
  Enunciado que descreve alguém que **só produz dados** (ex.: digitador) mas não analisa nem toma decisão — isso **não** é cidadão de dados.

- 🧪 **Como testar entendimento**  
  Pergunta: “O dono da Hermann’s que acompanha um dashboard de vendas e decide estoque com base nos gráficos é um exemplo de quê?” → resposta correta: **cidadão de dados**.

- 🛠️ **Aplicação mínima correta**  
  - Identificar, em um caso real, quem está agindo como cidadão de dados (quem lê o painel e toma decisão).

- 📏 **Critério verificável de acerto**  
  - Definição cita **acesso a dados**, **ferramentas** e **tomada de decisão**. Se faltar qualquer uma dessas partes, a definição está incompleta.

---

#### 5.2 Processo de extração de valor dos dados

- **Definição operacional**  
  Cadeia de etapas:
  1. **Coletar dados**.
  2. **Transformar dados em informação** (limpar, organizar, dar significado).
  3. **Analisar informações** para obter insights.
  4. **Comunicar insights** (relatórios, dashboards, apresentações).
  5. **Tomar atitudes** com base nesses insights.

- **Quando usar**  
  - Para organizar um projeto de dados, do zero até a ação.
  - Para diagnosticar por que um relatório não está funcionando (problema pode ser em qualquer etapa).

- **Quando NÃO usar**  
  - Para descrever apenas o fluxo técnico de um banco de dados (ETL detalhado, pipelines complexos) — aqui é uma visão mais conceitual e de negócio.

- **Como reconhecer**  
  - Aparição explícita dessa sequência; menções a “sem análise os dados não têm valor” indicam foco nas etapas 2–5.

- **Relação com outros conceitos**  
  - A **visualização de dados** vive principalmente na etapa 4 (comunicar insights).
  - O **Looker Studio** é uma ferramenta que atua nas etapas 2, 3 e 4.

- ❌ **Erro comum real**  
  Começar pela etapa 4 (já querer montar gráfico) com dados sujos ou incompletos, gerando visualização “bonita, porém errada”.

- ⚠️ **Pegadinha de prova**  
  Questão que troca a ordem das etapas (ex.: comunicar antes de analisar, agir antes de coletar).

- 🧪 **Como testar entendimento**  
  - Dado um cenário, pedir ao aluno para apontar **em qual etapa** o processo está falhando (ex.: dados incorretos → problema na etapa 1 ou 2).

- 🛠️ **Aplicação mínima correta**  
  - Antes de montar um painel para um TP, checar explicitamente: “já coletei?”, “já limpei e organizei?”, “sei que pergunta quero responder?”.  

- 📏 **Critério verificável de acerto**  
  - O aluno consegue **ordenar corretamente** as 5 etapas e **dar um exemplo** concreto de cada uma relacionado à aula.

---

#### 5.3 Visualização de dados e dashboards

- **Definição operacional**  
  - Visualização de dados: uso de **representações gráficas, mapas e outros elementos visuais** para comunicar informação.  
  - Dashboard/relatório: **conjunto organizado de visualizações** que responde a objetivos específicos do negócio.

- **Quando usar**  
  - Para comunicar resultados de análises a pessoas que não vão ler tabelas detalhadas.
  - Em avaliações (TPs, AT) como forma de entregar a análise pedida.

- **Quando NÃO usar**  
  - Quando um número simples resolve (ex.: “qual o total de vendas do mês?” pode ser um scorecard apenas).
  - Quando não há dados confiáveis; primeiro é preciso resolver qualidade de dados.

- **Como reconhecer**  
  - Termos como `relatório`, `painel`, `dashboard`, gráficos de pizza, barras, scorecards e filtros.

- **Relação com outros conceitos**  
  - Usa **dimensões** na parte categórica (rótulos, eixos, fatias) e **métricas** nos valores.
  - É o principal ponto de atuação do **Looker Studio** nessa disciplina.

- ❌ **Erro comum real**  
  Escolher visualizações que **não respondem ao objetivo do negócio** (ex.: gráfico de barras empilhadas complexo quando uma tabela simples seria mais clara).

- ⚠️ **Pegadinha de prova**  
  Questão que dá um objetivo de negócio e pede para escolher a visualização adequada; respostas que ignoram o público ou o tipo de dado costumam estar erradas.

- 🧪 **Como testar entendimento**  
  - Dado o objetivo “entender quais tipos de produto mais vendem (bolo, cupcake, pão, cookie)”, o aluno escolhe um gráfico de pizza por tipo + um scorecard com total de vendas.

- 🛠️ **Aplicação mínima correta**  
  - Em um TP, criar:
    - Pelo menos **um gráfico por produto**.
    - Um **segundo gráfico por tipo de produto**.
    - Um **scorecard** com o total geral.

- 📏 **Critério verificável de acerto**  
  - Cada gráfico responde claramente a uma **pergunta de negócio** declarada (“quais produtos mais vendem?”, “quais categorias mais vendem?”).

---

#### 5.4 Looker Studio (Google Data Studio) 

- **Definição operacional**  
  Ferramenta web do Google (antes chamada `Google Data Studio`, renomeada para `Looker Studio` em 2022) que permite:
  - **Conectar** a diversas fontes de dados (Google Sheets, CSV, bases, etc.).
  - **Processar** dados simples (agrupar, filtrar, criar campos calculados).
  - **Visualizar** dados em dashboards interativos e relatórios.

- **Quando usar**  
  - Quando os dados já estão em fontes que o Google consegue conectar (ex.: Google Sheets, BigQuery).
  - Para construir rapidamente painéis compartilháveis via link.

- **Quando NÃO usar**  
  - Para transformação pesada de dados ou integrações complexas (não é uma ferramenta de ETL robusta).
  - Quando a organização exige outra ferramenta padrão (ex.: somente Power BI).

- **Como reconhecer**  
  - URLs `https://lookerstudio.google.com/`.
  - Termos como `relatório em branco`, `adicionar dados ao relatório`, conectores, etc.

- **Relação com outros conceitos**  
  - É a ferramenta central para **operacionalizar métricas, dimensões e visualizações** nesta disciplina.
  - Usa dados de planilhas (`Google Sheets`) e arquivos (`CSV`) que você prepara previamente.

- ❌ **Erro comum real**  
  Acessar o Looker Studio com **conta pessoal** (ex.: Gmail pessoal), em vez da **conta institucional do Infnet**, perdendo acesso ou permissões.

- ⚠️ **Pegadinha de prova**  
  Enunciado que mostra acesso com conta errada ou com dados em formato inadequado (vários dados em uma mesma célula), pedindo para identificar o erro.

- 🧪 **Como testar entendimento**  
  - Perguntar: “Qual conta você deve usar para acessar o Looker Studio associado ao Infnet?” → resposta: **usuário institucional do Infinite/Infnet** (não Gmail pessoal).

- 🛠️ **Aplicação mínima correta**  
  - Criar um relatório, conectar à planilha `DS - Coffee Shop` no Google Sheets e gerar pelo menos dois gráficos e um scorecard.

- 📏 **Critério verificável de acerto**  
  - O aluno consegue **abrir o Looker Studio**, **adicionar uma fonte de dados** e **criar ao menos um gráfico** sem auxílio.

---

#### 5.5 Métricas, dimensões e agregações

- **Definição operacional**  
  - **Dimensão**: campo categórico usado para **agrupamento ou descrição** (ex.: nome do produto, tipo de produto, país, dispositivo).  
  - **Métrica**: campo numérico que **mede algo** e normalmente é **agregado** (ex.: quantidade vendida, receita, número de usuários).  
  - **Agregação**: forma de combinar vários valores de métrica para uma mesma dimensão (ex.: `COUNT`, `SUM`, `AVG`). 

- **Quando usar**  
  - Sempre que criar ou interpretar um gráfico no Looker Studio ou em qualquer dashboard.

- **Quando NÃO usar**  
  - Não tratar campos puramente textuais como métricas (ex.: nome do cliente não é algo a somar).

- **Como reconhecer**  
  - No Looker Studio: campos aparecem tipados como `DIMENSION` ou `METRIC` e têm uma agregação padrão (`SUM`, `COUNT`, etc.).

- **Relação com outros conceitos**  
  - São a “camada lógica” acima dos dados brutos; o **processo de extração de valor** depende de saber que métrica medir em qual dimensão.

- ❌ **Erro comum real**  
  - Deixar a agregação padrão (`Record Count`) em casos onde se deveria usar a métrica correta (`Number Sold`).  
  - Soma de métricas que não fazem sentido (ex.: somar temperaturas).

- ⚠️ **Pegadinha de prova**  
  - Questões que pedem para escolher se um campo é métrica ou dimensão, ou que trocam os papéis nos exemplos.

- 🧪 **Como testar entendimento**  
  - Dado o campo `Product Name` e o campo `Number Sold`, perguntar qual é a dimensão e qual é a métrica, e qual agregação usar para ver total vendido.

- 🛠️ **Aplicação mínima correta**  
  - Em um gráfico de pizza:
    - **Dimensão**: `Product Name` ou `Product Type`.
    - **Métrica**: `Number Sold` com agregação `SUM`.

- 📏 **Critério verificável de acerto**  
  - O aluno nunca usa campos textuais como métrica e escolhe agregações coerentes com o significado do campo.

---

#### 5.6 Avaliação por TPs, AT e presença

- **Definição operacional**  
  - **TP (Teste de Performance)**: exercício obrigatório, sem nota numérica oficial; é **pré-requisito** para poder realizar o **AT**.  
  - **AT (Assessment)**: avaliação principal (prova/trabalho) que **gera nota** na disciplina.  
  - **Presença**: exigência de **≥ 75%** de participação nas aulas, inclusive nas lives EAD, conforme MEC.

- **Quando usar**  
  - Para planejar o estudo e as entregas ao longo do trimestre.

- **Quando NÃO usar**  
  - Não confundir TP de uma disciplina com TP de outra; cada disciplina tem seus próprios TPs e ATs.

- **Como reconhecer**  
  - Enunciados “TP1, TP2, TP3”, “AT de visualização de dados e SQL”, “rein-tegra de AT”, calendário do trimestre.

- **Relação com outros conceitos**  
  - TPs normalmente exigem aplicação prática de **métricas, dimensões, dashboards, SQL** etc.

- ❌ **Erro comum real**  
  - Não entregar um TP, perdendo o direito de fazer o AT; confiar apenas em assistir gravação sem participar das lives, arriscando presença.

- ⚠️ **Pegadinha de prova**  
  - Questão que afirma que “TPs valem nota oficial” — isso é incorreto nesta disciplina; o que vale nota é o AT (embora TPs possam ter feedback e correção).

- 🧪 **Como testar entendimento**  
  - Pergunta: “Um aluno entregou todos os TPs, mas não entregou o AT. Ele pode ser aprovado?” → resposta: **não**, pois AT é obrigatório.

- 🛠️ **Aplicação mínima correta**  
  - Registrar prazos de TP1, TP2, TP3 e AT no calendário e separar tempo de execução e revisão.

- 📏 **Critério verificável de acerto**  
  - O aluno sabe dizer **quantos TPs e quantos ATs** há na disciplina e **a função de cada um**.

---

### 6 Procedimento / Execução — Criar o Segundo Relatório no Looker Studio

Passo a passo básico baseado no caso da confeitaria Hermann’s:

1. **Baixar os dados da cafeteria**  
   - Acessar `https://github.com/Apress/google-data-studio-for-beginners/blob/main/DS%20-%20Coffee%20Shop.xlsx`.  
   - Clicar em **Download** para obter o arquivo `DS - Coffee Shop.xlsx`.  
   - (O professor também disponibiliza o arquivo no `infnet.online` — se já estiver lá, pode baixar por lá.)

2. **Carregar a planilha no Google Sheets**  
   - Acessar `https://docs.google.com/spreadsheets/u/0/?tgif=d`.  
   - Clicar em **Planilha em branco**.  
   - Menu `Arquivo` → `Importar` → guia **Fazer upload**.  
   - Clicar em **Procurar**, selecionar `DS - Coffee Shop.xlsx`, clicar em **Importar dados**.  
   - Dar o nome **`DS - Coffee Shop`** à planilha.  
   - Verificar se cada célula contém **apenas um dado** (importante para limpeza de dados).

3. **Criar o relatório no Looker Studio**  
   - Acessar `https://lookerstudio.google.com/`.  
   - Clicar em **Relatório em branco**.  
   - Na janela “Adicionar dados ao relatório”, escolher **Google Planilhas**.  
   - Clicar em **AUTORIZAR** (caso seja a primeira vez).  
   - No lado esquerdo, clicar em **TODOS OS ITENS** e selecionar a planilha `DS - Coffee Shop`.  
   - Clicar em **Adicionar**.  
   - Na janela “You are about to add data to this Report”, clicar em **ADICIONAR AO RELATÓRIO**.  
   - Clicar em **Layout de formato livre** para ter liberdade de posicionar elementos.

4. **Ajustar a métrica principal na tabela**  
   - Selecionar a tabela padrão que o Looker criou.  
   - Verificar se a dimensão está como `Product Name`.  
   - Em **Métrica**, trocar `Record Count` por **`Number Sold`**.

5. **Criar o gráfico de pizza por produto**  
   - Inserir um **gráfico de pizza (pie)**.  
   - **Dimensão**: `Product Name`.  
   - **Métrica**: `Number Sold` (agregação padrão `SUM`).  
   - Produtos esperados (nomes em inglês com equivalentes em português):  
     - `Lunch Bun` – Pão de Almoço  
     - `Banana Loaf` – Pão de Banana  
     - `Lavender Cupcake` – Cupcake de Lavanda  
     - `Traditional Chocolate Cake` – Bolo de Chocolate Tradicional  
     - `Pink Champagne Cupcake` – Cupcake Rosa de Champanhe  
     - `Salted Caramel Cookies` – Biscoitos de Caramelo Salgado  
     - `Belgian Chocolate Cupcake` – Cupcake de Chocolate Belga  
     - `Raspberry Loaf` – Pão de Framboesa  
     - `Vanilla Sponge Cake` – Bolo de Baunilha  
     - `Sicilian Lemon Cake` – Bolo de Limão Siciliano

6. **Duplicar o gráfico de pizza por tipo de produto**  
   - Duplicar o gráfico de pizza criado no passo anterior.  
   - Trocar a **dimensão** para `Product Type`.  
   - Manter a **métrica** `Number Sold`.  
   - Tipos esperados: `Cupcake` (bolinho), `Loaf` (pão), `Cake` (bolo), `Cookie` (biscoito).

7. **Criar o Scorecard (visão geral)**  
   - Inserir um **Scorecard** para mostrar o **total de vendas** (`Number Sold`).  
   - Configurar a métrica `Number Sold` com agregação `SUM`.

8. **Salvar o relatório**  
   - Nomear o relatório como **`Segundo Relatório Looker Studio`**.  
   - Verificar se todos os gráficos estão mostrando dados consistentes.

- ❌ **Erro típico de execução**  
  - Esquecer de trocar `Record Count` por `Number Sold`, resultando em contagem de linhas em vez de quantidade vendida.

- ✅ **Sinal de execução correta**  
  - O somatório de `Number Sold` no Scorecard bate com o valor total esperado na planilha.

---

### 7 Exemplos Relevantes

- **Exemplo central: Confeitaria e Cafeteria Hermann’s**
  - **Objetivo de negócio**: aumentar o volume de vendas da cafeteria.
  - **Situação atual**:
    - O dono registra receitas em Excel.
    - O contador lança no sistema contábil.
    - No fim da semana, é gerado um relatório dos produtos mais vendidos, que guia o pedido de ingredientes.
  - **Problemas**:
    - Decisões são tomadas apenas **uma vez por semana**.
    - O dono **não tem clareza** de como usar planilhas; depende do contador.
  - **Uso do Looker Studio**:
    - Trazer os dados para o Google Sheets e conectá-los ao Looker Studio.
    - Criar painéis que mostram:
      - Vendas por produto.
      - Vendas por tipo de produto.
      - Total de vendas.
    - Permitir que o dono acompanhe **em tempo menor** (quase em tempo real), sem depender do contador.
  - **O que esse exemplo fixa**:
    - Mostra o papel do **cidadão de dados**.
    - Ilustra o processo de **extrair valor dos dados** até a ação.
    - Demonstra na prática o uso de **dimensões** (produto, tipo) e **métricas** (quantidade vendida).

- **Exemplos adicionais de métricas** (a partir do material):
  - Número de usuários de um site em determinado período.
  - Receita de vendas dos produtos online.
  - Número de erros mostrados em um sistema por dia.
  - Quantidade média de chuva em uma região.

- **Exemplos adicionais de dimensões**:
  - País de origem do usuário, tipo de dispositivo, categoria do produto.
  - Idade ou condição física dos participantes em um estudo médico.

> **Observação**: A aula traz **principalmente exemplos conceituais** e o caso Hermann’s. Não há exemplos completos de SQL ainda — isso é explicitamente deixado para aulas futuras (lacuna declarada).

---

### 8 Diferenças e Confusões Comuns

- **Métrica × Dimensão**
  - **Métrica**: número que mede algo (ex.: `Number Sold`, receita, temperatura).  
  - **Dimensão**: categoria ou descrição (ex.: nome do produto, tipo do produto, país).  
  - **Confusão típica**: tratar `Product Name` como métrica ou `Number Sold` como dimensão.

- **TP × AT**
  - **TP**: exercício de prática, obrigatório, sem nota oficial, pré-requisito para AT.  
  - **AT**: avaliação principal (prova/trabalho), com nota.  
  - **Confusão típica**: achar que fazer bem o TP é suficiente para ser aprovado sem AT.

- **Presença ao vivo × assistir gravação**
  - **Presença** é contada nas **lives ao vivo** (tempo de permanência, conexão à sala).  
  - Assistir à **gravação** é útil para estudo, mas **não substitui presença** segundo as regras do MEC.  
  - Confusão típica: acreditar que assistir gravado “compensa” faltas.

- **Looker Studio × planilha (Google Sheets / Excel)**
  - **Planilha**: onde os dados são armazenados, limpos e estruturados.  
  - **Looker Studio**: onde os dados já estruturados são **visualizados** e explorados.  
  - Confusão típica: tentar fazer toda a limpeza de dados apenas no Looker Studio; ideal é preparar bem a planilha antes.

---

### 9 Como Cai em Prova

- **Formatos típicos**:
  - Questões conceituais de múltipla escolha ou abertas sobre:
    - Definição de **cidadão de dados**.
    - As **5 etapas** do processo de extração de valor dos dados (ordem correta).
    - Diferença entre **métrica** e **dimensão**.
    - Características do **Looker Studio**.
  - Questões de cenário:
    - Caso semelhante à Hermann’s, perguntando **como o Looker Studio pode ajudar**.
    - Situações de avaliação: “O aluno não entregou TP2, o que acontece em relação ao AT?”.
  - Questões práticas descritivas:
    - “Descreva o passo a passo para criar um relatório no Looker Studio usando dados de uma planilha do Google.”

- **Erros cobrados / armadilhas comuns**:
  - Inverter métricas e dimensões.
  - Esquecer etapas do processo de dados.
  - Ignorar regra de **obrigatoriedade dos TPs** e **do AT**.
  - Dizer que presença pode ser compensada por assistir gravações.

- **Padrão de questão**:
  - Cenário de negócio → pergunta: “Quais métricas e dimensões você escolheria?”  
  - Descrição de fluxo de trabalho → identificar em qual etapa do processo de dados houve falha.

---

### 10 Pontos de Atenção

- **Não usar conta pessoal** no Looker Studio; usar sempre a conta institucional do Infnet.
- **Não deixar TPs para a última hora**; a disciplina trabalha com prazos e há vários TPs ao longo do trimestre.
- **Não confundir presença com visualização de gravação**; a chamada é feita nas lives.
- **Não confiar na agregação padrão** (`Record Count`); sempre verificar se a métrica correta está configurada.
- **Não misturar vários dados em uma célula** na planilha; isso inviabiliza filtros e agrupamentos.
- **Não tratar dashboards como “decoração”**; cada visual deve responder uma pergunta do negócio.

---

### 11 Checklist de Domínio

Marque mentalmente (ou no papel) se você consegue fazer cada item:

- **Conceitos**
  - [ ] Sei **definir** o que é um cidadão de dados.
  - [ ] Sei **explicar** o processo de extração de valor dos dados em 5 etapas.
  - [ ] Sei **reconhecer** nos exemplos o que é métrica e o que é dimensão.
  - [ ] Sei **explicar** em que o Looker Studio difere de uma planilha.
  - [ ] Sei **explicar** a diferença entre TP e AT e sua função na disciplina.

- **Aplicação**
  - [ ] Sei **criar** uma planilha no Google Sheets a partir de um `.xlsx` baixado.
  - [ ] Sei **conectar** essa planilha ao Looker Studio.
  - [ ] Sei **criar** um gráfico de pizza por produto e por tipo.
  - [ ] Sei **criar** um scorecard com total de vendas.

- **Erros comuns**
  - [ ] Sei **evitar** tratar campo textual como métrica.
  - [ ] Sei **evitar** deixar `Record Count` onde deveria estar `Number Sold`.

Se algum item está em dúvida, volte às seções 5 e 6.

---

### 12 Auto-Teste

**Perguntas abertas técnicas**

1. Explique, com suas palavras, o que é um **cidadão de dados** e dê um exemplo concreto fora do contexto da Hermann’s.
2. Liste e descreva as 5 etapas do processo de extração de valor dos dados, relacionando-as ao caso da confeitaria.
3. Diferencie **métrica** de **dimensão** e dê dois exemplos de cada, em qualquer contexto.
4. Descreva as principais características do **Looker Studio** e em que ele facilita o trabalho de um cidadão de dados.
5. Explique a diferença entre **TP** e **AT** nesta disciplina e por que os TPs são obrigatórios.

**Mini exercícios aplicáveis**

1. Dado o objetivo “entender quais tipos de produto mais vendem na cafeteria”, escolha:
   - ao menos **uma dimensão**,
   - ao menos **uma métrica** e
   - **um tipo de gráfico** adequado no Looker Studio.
2. Em uma planilha com colunas `Product Name`, `Product Type`, `Number Sold`, `Revenue`, monte verbalmente **dois gráficos** diferentes que responderiam perguntas distintas do negócio.

**Cenários de decisão (3–5)**

1. Um colega quer somar a coluna `Temperature` em um relatório. O que está errado nessa ideia?  
2. Um aluno acessa o Looker Studio com seu Gmail pessoal e não encontra suas fontes de dados. Qual é a ação correta?  
3. Você entregou TP1 e TP3, mas esqueceu TP2. Quais são as implicações para o AT?  
4. O gráfico de pizza mostra produtos, mas a métrica usada é `Record Count`. O que isso significa e o que você deveria configurar?  
5. O dono da cafeteria olha apenas o total semanal de vendas. Que **dimensão adicional** poderia ser útil para detalhar melhor o comportamento de vendas?

---

### 13 Resumo Estratégico Consolidado

A Aula 1 posiciona o aluno como **cidadão de dados**, mostrando que dados abundantes só geram valor quando passam por um processo estruturado de **coleta → organização → análise → comunicação → ação**. A ferramenta escolhida para visualização inicial é o **Looker Studio**, conectada principalmente a planilhas do **Google Sheets**, permitindo criar dashboards simples baseados em **métricas** e **dimensões**. O caso da **Confeitaria Hermann’s** ilustra como dashboards podem antecipar decisões de negócio que antes eram tomadas tardiamente via relatórios contábeis. Por fim, a aula detalha a estrutura de **avaliação por TPs e AT**, o cronograma do trimestre e a exigência de **presença mínima**, conectando o conteúdo técnico às exigências formais do curso.

---

### 14 Resumo em 5 Linhas

1. A aula apresenta o aluno como **cidadão de dados**, responsável por usar dados e ferramentas simples para tomar decisões melhores.  
2. Mostra o processo completo de extração de valor dos dados, da coleta até a ação, enfatizando a importância da **visualização** na comunicação.  
3. Introduz o **Looker Studio**, conectado ao Google Sheets, como ferramenta central para criar relatórios com **métricas**, **dimensões** e **agregações**.  
4. Usa o caso da **Confeitaria Hermann’s** para exemplificar como dashboards apoiam decisões de vendas e estoque.  
5. Explica como funcionam **TPs**, **AT** e **presença** na disciplina, indicando que TPs são obrigatórios e pré-requisito para o AT.

---

### 15 Palavras-Chave

- Cidadão de dados  
- Looker Studio (Google Data Studio)  
- Visualização de dados / Dashboard  
- Métrica  
- Dimensão  
- Agregação (`SUM`, `COUNT`, `AVG`)  
- Processo de extração de valor dos dados  
- TP (Teste de Performance)  
- AT (Assessment)  
- Presença mínima (75%)  

