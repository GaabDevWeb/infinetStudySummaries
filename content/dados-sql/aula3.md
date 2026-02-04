DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 03/02/2026 
TEMA DA AULA: Métricas, dimensões e agregações no Looker Studio com o caso Hermann's  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1SWxM7XrnZKefusk0F7UQyRp6oIZtV_dl/view

---

### 1 Tema e Escopo

- **Tema**: Continuação de `Fundamentos do Processamento de Dados` com foco em **Looker Studio** (antigo Google Data Studio), **escolha de informações para relatórios** e **conceitos de métrica, agregação e dimensão** aplicados ao caso da confeitaria Hermann's.
- **Problema que resolve**: Como sair de planilhas e dados brutos (como o arquivo `DS - Coffee Shop.xlsx`) para **relatórios interativos** que respondem perguntas claras do negócio (ex.: “quais produtos mais vendem?”) usando métricas e dimensões corretamente.
- **Para que serve**:
  - Entender **que informações** devem aparecer em um relatório para apoiar decisões reais.
  - Compreender, em nível operacional, o que são **métricas**, **dimensões** e **agregações**.
  - Aprender a **conectar planilhas ao Looker Studio** e a **criar gráficos básicos** (tabela, pizza, scorecard).
  - Reconhecer como um **dashboard bem desenhado** muda a rotina de decisão de um negócio (caso Hermann's).
- **Inclui**:
  - Revisão rápida do Looker Studio como ferramenta de visualização.
  - Critérios para escolher **quais informações** colocar em relatórios.
  - Passo a passo para **carregar dados no Google Sheets** e **conectar ao Looker Studio**.
  - Conceitos de **métrica**, **agregação** e **dimensão**, com exemplos práticos.
  - Construção de relatório da **Hermann's Cake and Coffee Shop** (produtos, tipos de produto, total de vendas).
- **Não inclui** (nesta aula):
  - Escrita de consultas SQL (isso entra em aulas de SQL/etapas posteriores).
  - Modelagem detalhada de banco de dados.
  - Construção de dashboards complexos com múltiplas páginas, filtros avançados ou blending de fontes.

> **Lacuna declarada**: a transcrição menciona que nas próximas aulas serão feitas atividades **mais práticas e aprofundadas** no Looker Studio e que, depois, entraremos em SQL. Nesta aula, a prática se limita a **importar dados, conectar ao Looker Studio e montar visualizações básicas**. Qualquer detalhe além do que está descrito em `aulaDoc1.txt`/`aulaDoc2.txt` e citado em aula é considerado **“não coberto aqui”**.

---

### 2 Contexto na Disciplina

- **Onde entra**:
  - Aula logo após o fechamento da **primeira etapa**: o professor retoma o ponto que não conseguiu mostrar (Looker Studio) e inicia a **etapa 2** com foco conceitual em métricas e dimensões.
  - Continua a trilha de **visualização de dados + SQL** dentro do bloco de entrada.
  - Liga o que foi visto sobre **cidadão de dados, ciclo dado → informação → insight → ação** à prática no Looker Studio.
- **Pré-requisitos esperados**:
  - Ter acompanhado a introdução à disciplina (aula 1) e entendido:
    - O papel do **cidadão de dados**.
    - O ciclo de extração de valor dos dados.
    - A ideia geral de visualização e dashboards.
  - Saber acessar:
    - `infnet.online` para baixar o arquivo `DS - Coffee Shop.xlsx`.
    - Sua conta Google institucional para usar **Google Sheets** e **Looker Studio**.
- **Dependências futuras**:
  - O entendimento de **métricas, agregações e dimensões** será base:
    - Para desenhos de dashboards mais complexos nas próximas aulas.
    - Para leitura e escrita de consultas SQL em disciplinas/etapas seguintes (SELECT, GROUP BY, HAVING).
  - A experiência com o caso da **Hermann's** será reusada:
    - Em TPs e ATs de visualização de dados.
    - Como analogia para outros domínios (e-commerce, esportes, saúde, etc.).

---

### 3 Visão Conceitual Geral

1. A disciplina sai da visão geral de “dados em todos os lugares” e entra em **como estruturar relatórios** que respondem a perguntas específicas do negócio.
2. O **Looker Studio** é apresentado como ferramenta central para:
   - Conectar dados (especialmente de **Google Sheets** e arquivos **CSV/Excel**).
   - Transformar esses dados em **gráficos e painéis interativos**.
3. Para que um relatório seja útil, é preciso **definir antes**:
   - O **objetivo do relatório** para a empresa.
   - As **informações necessárias** para apoiar esse objetivo.
   - O **nível de conhecimento em dados** do público-alvo.
   - A **forma mais adequada de apresentar os dados** (tabelas, gráficos, múltiplos painéis).
4. O caso da **Confeitaria e Cafeteria Hermann's** ilustra um cenário real:
   - Hoje, as decisões são tomadas **apenas no fim da semana**, a partir de relatórios do contador.
   - Com o Looker Studio, é possível **acessar dados atualizados** e visualizar rapidamente **produtos mais vendidos e tipos de produto**.
5. Conceitualmente, todos os gráficos no Looker Studio são construídos com:
   - **Dimensões**: categorias, nomes, descrições (ex.: `Product Name`, `Product Type`, país, tipo de dispositivo).
   - **Métricas**: números que medem algo nessas categorias (ex.: `Number Sold`, receita, número de usuários).
   - **Agregações**: funções que resumem métricas (ex.: `Count`, `Sum`, `Avg`), muitas vezes ao longo do tempo.
6. A partir dessa base, a aula começa a treinar **como pensar em métricas e dimensões** para diferentes contextos (vendas, esportes, saúde, sites, clima).
7. A ideia central é: **relatórios bons não são um monte de gráfico**; são gráficos construídos com **métricas e dimensões certas**, alinhados às **perguntas do negócio**.

---

### 4 Ideias-Chave (máx. 7)

1. **Relatórios precisam de objetivo de negócio claro**  
   - **Importância**: sem objetivo, o relatório vira um painel confuso que ninguém usa.  
   - **Prova**: questões que pedem para identificar **qual informação falta** em um relatório para atender um objetivo ou para **reformular** um painel a partir de um objetivo dado.  
   - **Prática**: antes de abrir o Looker Studio, perguntar: “Que decisão este relatório precisa apoiar?” (ex.: decidir o que produzir mais na Hermann's).  
   - **Impacto de não entender**: gasto de tempo construindo dashboards que não ajudam o gestor a decidir nada concreto.

2. **Caso Hermann's como exemplo de uso de dados**  
   - **Importância**: traduz conceitos abstratos (métrica, dimensão, dashboard) em um negócio real de confeitaria e cafeteria.  
   - **Prova**: cenários perguntando como melhorar o processo atual de decisão da Hermann's usando relatórios; identificação de métricas/dimensões relevantes.  
   - **Prática**: pensar em **produtos, tipos de produto, períodos de venda** e **totais vendidos** como insumos para o relatório.  
   - **Impacto de não entender**: dificuldade em conectar o que é visto em sala com problemas reais de negócio.

3. **Looker Studio como ferramenta para conectar planilhas e visualizar dados**  
   - **Importância**: é o ambiente onde o aluno vai praticar visualização com dados de planilha.  
   - **Prova**: passos de conexão a uma planilha Google, criação de gráfico de pizza ou scorecard, troca de métrica em uma tabela.  
   - **Prática**: usar a planilha `DS - Coffee Shop` no Google Sheets e conectá-la ao Looker Studio para montar o primeiro relatório.  
   - **Impacto de não entender**: dificuldade para acompanhar atividades práticas e para entregar TPs/ATs que envolvam relatórios.

4. **Métricas**  
   - **Importância**: são os números que realmente medem o que importa (vendas, temperatura, pontos, usuários, etc.).  
   - **Prova**: identificar métricas em diferentes cenários; escolher qual métrica é mais adequada para uma pergunta (ex.: contagem vs. soma).  
   - **Prática**: usar `Number Sold` como métrica em gráficos da Hermann's e entender o que está sendo contado/somado.  
   - **Impacto de não entender**: interpretar de forma errada o que o gráfico mostra (ex.: confundir número de registros com número de vendas).

5. **Agregação de métricas**  
   - **Importância**: mostra **como** os números são resumidos (total, média, contagem, comparação de períodos).  
   - **Prova**: perguntas sobre diferenças entre `Count`, `Sum` e `Avg`, ou sobre como interpretar um gráfico de vendas por dia/semana/mês.  
   - **Prática**: analisar se as vendas **aumentaram ou diminuíram** em determinado período, e comparar semanas ou meses.  
   - **Impacto de não entender**: chegar a conclusões erradas porque comparou métricas com agregações diferentes ou inadequadas.

6. **Dimensões**  
   - **Importância**: são as categorias que organizam as métricas e dão contexto (produto, tipo de produto, país, dispositivo, faixa etária, etc.).  
   - **Prova**: distinguir métrica de dimensão em exemplos; escolher dimensões adequadas para um relatório específico.  
   - **Prática**: usar `Product Name` e `Product Type` para analisar as vendas na Hermann's de forma mais rica do que apenas “total de bolos vendidos”.  
   - **Impacto de não entender**: relatórios sem corte adequado (ex.: saber só o total de vendas, sem saber **o que** vendeu melhor).

7. **Escolha de visualização (tabela, pizza, scorecard) a partir de métricas e dimensões**  
   - **Importância**: cada tipo de gráfico responde melhor a um tipo de pergunta.  
   - **Prova**: questões do tipo “qual gráfico é mais adequado para...?” ou análise de dashboards mal construídos.  
   - **Prática**: usar tabela para detalhe por produto, gráfico de pizza para proporção por produto/tipo, scorecard para visão geral de total de vendas.  
   - **Impacto de não entender**: uso de gráficos inadequados (por exemplo, pizza com muitas categorias irrelevantes, dificultando a leitura).

---

### 5 Conceitos Essenciais — Explicação Operacional

#### 5.1 Looker Studio como ferramenta de visualização conectada a planilhas

- **Definição operacional**  
  Ferramenta online (via navegador) que permite:
  - Conectar-se a fontes de dados (ex.: **Google Sheets**, arquivos CSV/Excel via upload, outros conectores).
  - Criar **relatórios e painéis interativos** com gráficos, tabelas, filtros e scorecards.
  - Compartilhar esses relatórios com outras pessoas, mantendo uma fonte de verdade única para o time.

- **Quando usar**  
  - Quando os dados já estão em planilhas ou bases simples e você precisa apresentá-los de forma visual e interativa.
  - Quando quer que **várias pessoas** acessem o mesmo relatório pela web.

- **Quando NÃO usar**  
  - Quando precisa de **processamento pesado, modelagem complexa ou grandes volumes de dados** (caso para outras ferramentas/arquiteturas).
  - Quando os dados ainda não estão minimamente organizados (por exemplo, planilhas cheias de inconsistências, células com múltiplos dados).

- **Como reconhecer**  
  - Interface baseada em **relatórios**, com páginas e elementos gráficos.
  - Conexão direta com sua conta Google e com o Google Drive.

- **Relação com outros conceitos**  
  - Usa **métricas e dimensões** como insumos básicos para todos os gráficos.
  - Depende da **qualidade dos dados** nas planilhas (limpeza, uma informação por célula, tipos corretos).

- **❌ Erro comum real**  
  Tratar o Looker Studio como se fosse um **Excel avançado**, tentando editar dados diretamente lá, em vez de ajustar a fonte (planilha).

- **⚠️ Pegadinha de prova**  
  Enunciados que confundem **ferramenta de visualização** (Looker Studio) com **fonte de dados** (Google Sheets, banco de dados).  
  → Looker Studio **não armazena** os dados originais; ele **lê** de uma fonte.

- **🧪 Como testar entendimento**  
  - Você consegue explicar em 2–3 frases o que é o Looker Studio e o que **não é**.  
  - Consegue listar **duas fontes de dados** que ele pode usar.

- **🛠️ Aplicação mínima correta**  
  - Conectar uma planilha simples com colunas (`Product Name`, `Number Sold`) ao Looker Studio e montar **pelo menos um gráfico** (tabela ou pizza).

- **📏 Critério verificável de acerto**  
  Dado um cenário, você classifica corretamente se o Looker Studio é adequado e identifica **qual fonte de dados** ele deveria usar.

---

#### 5.2 Métricas

- **Definição operacional**  
  Números que medem algo nas observações/dados, como:
  - Quantidade de produtos vendidos (`Number Sold`).
  - Temperatura em um termômetro.
  - Número de pontos em um jogo.
  - Número de pessoas em um estudo.
  - Número de usuários que acessaram um site em um período.
  - Receita de vendas.
  - Número de erros exibidos a usuários em um dia.

- **Quando usar**  
  - Sempre que quiser **quantificar** algo (contar, somar, medir, calcular médias, comparar ao longo do tempo).

- **Quando NÃO usar**  
  - Quando se trata de **nomes, categorias ou descrições** (isso é dimensão, não métrica).

- **Como reconhecer**  
  - Em geral são campos **numéricos**, usados em funções como **contagem, soma, média**.
  - Respondem a perguntas do tipo: **“Quanto?”**, **“Quantos?”**, **“Qual o total?”**, **“Qual a média?”**.

- **Relação com outros conceitos**  
  - Sempre interpretadas **em relação a dimensões** (ex.: “quantos bolos vendidos por tipo de bolo”).
  - Podem ser agregadas (somadas, contadas, avaliadas em médias, etc.).

- **❌ Erro comum real**  
  Tratar um campo textual (ex.: nome do produto) como métrica, tentando “somar nomes” ou aplicar contagens sem sentido.

- **⚠️ Pegadinha de prova**  
  Questões que trocam os papéis: chamam um campo claramente descritivo de “métrica” e um número de código (sem significado de medida) de “dimensão”.  
  → Nem todo número é métrica; e nem todo texto é dimensão — é preciso ver **o que está sendo medido**.

- **🧪 Como testar entendimento**  
  - Dado um conjunto de campos, você consegue separar quais são métricas e justificar por quê.  
  - Consegue propor ao menos uma agregação razoável para cada métrica (ex.: somar vendas, contar pedidos).

- **🛠️ Aplicação mínima correta**  
  - Selecionar a métrica correta (`Number Sold`) em um gráfico do Looker Studio para analisar vendas da Hermann's.

- **📏 Critério verificável de acerto**  
  Se você consegue, para um cenário qualquer, responder o que está sendo **medido** e como (contagem, soma, média) sem confundir com rótulos/categorias, a definição de métrica foi bem absorvida.

---

#### 5.3 Agregação de métricas

- **Definição operacional**  
  Forma de **resumir** uma métrica em um conjunto de registros, usando funções como:
  - `Count` (contar quantos registros/itens).
  - `Sum` (somar valores).
  - `Avg` (média).
  - Comparações ao longo do tempo (ex.: vendas desta semana vs. semana passada).

- **Quando usar**  
  - Quando precisa sair de dados linha a linha para uma visão resumida: totais por dia, por produto, por tipo, por período, etc.

- **Quando NÃO usar**  
  - Quando você precisa ver **cada registro individual** para auditoria ou checagem de qualidade.

- **Como reconhecer**  
  - Aparecem em relatórios como “Total de vendas”, “Número de pedidos”, “Média de temperatura”, “Vendas por semana”.

- **Relação com outros conceitos**  
  - Sempre aplicadas sobre **métricas**, normalmente agrupadas por **dimensões** (ex.: `Sum(Number Sold)` por `Product Type`).

- **❌ Erro comum real**  
  Usar `Count` onde deveria usar `Sum` (por exemplo, contar registros em vez de somar quantidade vendida) e interpretar o resultado como “vendas”.

- **⚠️ Pegadinha de prova**  
  Perguntar qual agregação melhor responde se as vendas **aumentaram ou diminuíram** em um período.  
  → Não basta um número total: é preciso comparar **períodos** (semana, mês, dia) usando agregações por tempo.

- **🧪 Como testar entendimento**  
  - Dado um cenário, você escolhe entre `Count`, `Sum` e `Avg` e justifica.  
  - Consegue explicar por que `Count` não mede bem receita, e por que `Sum` é mais adequado nesse caso.

- **🛠️ Aplicação mínima correta**  
  - Configurar um gráfico no Looker Studio para mostrar **soma de vendas** (e não apenas contagem de linhas) por produto ou tipo de produto.

- **📏 Critério verificável de acerto**  
  Você identifica corretamente o **tipo de agregação** mais adequado para cada pergunta e evita interpretações incompatíveis com a função usada.

---

#### 5.4 Dimensões

- **Definição operacional**  
  Campos que **descrevem ou categorizam** os dados. Exemplos:
  - `Product Name` (nome do produto).
  - `Product Type` (tipo de produto: cupcake, bolo, pão, cookie).
  - País de origem de usuários de um site.
  - Dispositivo usado (desktop, mobile, tablet).
  - Faixa etária, altura, nível de condicionamento físico em um estudo médico.
  - Tipo de erro ou gravidade do erro em sistemas.

- **Quando usar**  
  - Quando quer **quebrar** uma métrica em partes (por produto, por tipo, por país, etc.).
  - Quando quer agrupar registros em categorias para entender **onde** está acontecendo algo.

- **Quando NÃO usar**  
  - Quando está lidando com campos que são puramente numéricos de medição (isso é métrica, não dimensão).

- **Como reconhecer**  
  - Costumam responder a perguntas do tipo **“o quê?”**, **“quem?”**, **“onde?”**, **“de que tipo?”**.
  - Em gráficos, aparecem em **eixos, rótulos, fatias, legendas**.

- **Relação com outros conceitos**  
  - Dão **contexto** às métricas; sem dimensões, você sabe o total, mas não sabe **de onde ele vem**.

- **❌ Erro comum real**  
  Não definir dimensões suficientes e ficar só com um total agregado, sem saber quais categorias estão performando melhor ou pior.

- **⚠️ Pegadinha de prova**  
  Perguntas que tentam fazer você tratar idade ou faixa etária como “métrica principal” quando, no contexto, ela está sendo usada para **segmentar** outra métrica (ex.: vendas por faixa etária).  
  → Nesses casos, idade/faixa etária está funcionando como **dimensão**.

- **🧪 Como testar entendimento**  
  - Conseguir propor, para o caso da Hermann's, **ao menos três dimensões** para analisar vendas (ex.: produto, tipo, dia da semana).  
  - Dado um cenário diferente (esporte, saúde, site), separar corretamente dimensões de métricas.

- **🛠️ Aplicação mínima correta**  
  - Configurar gráficos no Looker Studio usando `Product Name` e `Product Type` como dimensões e `Number Sold` como métrica.

- **📏 Critério verificável de acerto**  
  Em qualquer exemplo, você consegue responder de forma clara **o que está sendo usado como categoria** (dimensão) e **o que está sendo medido** (métrica).

---

#### 5.5 Caso Hermann's — do relatório semanal ao dashboard

- **Definição operacional**  
  Pequena confeitaria e cafeteria que:
  - Registra receitas em Excel.
  - Envia dados ao contador.
  - Recebe, no fim da semana, um relatório dos produtos mais vendidos.
  - Usa esse relatório semanal para decidir o pedido de ingredientes para a semana seguinte.

- **Quando usar como referência**  
  - Ao pensar em **exemplos de métricas e dimensões**.
  - Ao explicar como um dashboard pode **encurtar o ciclo de decisão**.

- **Quando NÃO usar**  
  - Como modelo de processo perfeito; ele é um **ponto de partida** a ser melhorado.

- **Como reconhecer o problema atual**  
  - Decisões são tomadas **com atraso** (apenas após o relatório semanal).
  - O dono **não domina planilhas**; apenas confere números finais.
  - A visão é **pouco visual** e baseada em um único momento no tempo.

- **Relação com Looker Studio**  
  - O objetivo é permitir que Hermann:
    - Veja **quais produtos mais vendem** em tempo quase real.
    - Entenda categorias (`Product Type`: cupcake, loaf, cake, cookie).
    - Tenha uma **visão geral do total de vendas** (scorecard).

- **❌ Erro comum real**  
  Achar que basta “jogar” a planilha no Looker Studio e qualquer gráfico já resolve o problema de decisão.

- **⚠️ Pegadinha de prova**  
  Perguntas que parecem querer só a ferramenta (“que ferramenta resolve o problema?”), mas na verdade cobram a **estrutura de informação**: quais métricas e dimensões precisam estar no relatório.

- **🧪 Como testar entendimento**  
  - Você consegue listar:
    - Pelo menos **uma métrica principal** (ex.: número de itens vendidos, receita).
    - Pelo menos **duas dimensões relevantes** (produto, tipo de produto, período).

- **🛠️ Aplicação mínima correta**  
  - Montar, no Looker Studio, um relatório simples com:
    - Tabela com `Product Name` × `Number Sold`.
    - Gráfico de pizza por `Product Name`.
    - Gráfico de pizza por `Product Type`.
    - Scorecard com total de vendas (`Number Sold` somado).

- **📏 Critério verificável de acerto**  
  Se, olhando para o relatório da Hermann's, você consegue responder **“o que devo produzir mais?”** e **“qual categoria está performando melhor?”**, o caso foi bem entendido.

---

#### 5.6 Escolha de visualizações (tabela, pizza, scorecard)

- **Definição operacional**  
  - **Tabela**: mostra detalhes linha a linha, ideal para ver **lista de produtos** com suas métricas.
  - **Gráfico de pizza (pie)**: mostra **proporção** de cada categoria em relação ao total.
  - **Scorecard**: mostra um **número de destaque** (ex.: total de vendas).

- **Quando usar cada um**  
  - **Tabela**: quando o objetivo é comparar valores entre muitos itens e, às vezes, exportar/ler como lista.  
  - **Pizza**: quando o foco é **composição** (quem ocupa maior fatia do total), com **poucas categorias**.  
  - **Scorecard**: quando é necessário um **indicador principal** claro na tela (total, média, etc.).

- **Quando NÃO usar**  
  - Pizza com muitas categorias pequenas (fica ilegível).  
  - Scorecard sem contexto (sem saber se o número é bom ou ruim).

- **❌ Erro comum real**  
  Encher o relatório com muitos gráficos do mesmo tipo sem relação clara com os objetivos.

- **⚠️ Pegadinha de prova**  
  Questões que pedem **“qual visualização melhor responde à pergunta X?”** e oferecem opções que misturam tipo certo com métrica/dimensão erradas.

- **🧪 Como testar entendimento**  
  - Dado um objetivo (“ver qual tipo de produto mais contribui para as vendas”), você escolhe pizza por `Product Type` com métrica `Number Sold`.  
  - Dado outro (“saber o total de vendas no período”), você escolhe um scorecard.

- **🛠️ Aplicação mínima correta**  
  - Reproduzir, no Looker Studio, a combinação: tabela + duas pizzas + scorecard para os dados da Hermann's.

- **📏 Critério verificável de acerto**  
  Para cada gráfico criado, você consegue explicar **qual pergunta ele responde** em uma frase objetiva.

---

### 6 Procedimento / Execução (Looker Studio + planilha Hermann's)

**Objetivo**: montar um relatório simples no Looker Studio usando os dados de vendas da confeitaria Hermann's.

#### 6.1 Preparar a planilha no Google Sheets

- **Passo 1**:  
  Acessar o link do arquivo de exemplo: `DS - Coffee Shop.xlsx` (fornecido pelo professor, disponível no GitHub e no `infnet.online`).

- **Passo 2**:  
  Fazer o download do arquivo `DS - Coffee Shop.xlsx` para o seu computador.

- **Passo 3**:  
  Acessar `https://docs.google.com/spreadsheets/` com a conta Google institucional.

- **Passo 4**:  
  Criar uma nova planilha utilizando o botão **“Planilha em branco”**.

- **Passo 5**:  
  No menu `Arquivo → Importar`, acessar a guia **“Fazer upload”**, clicar em **“Procurar”**, selecionar o arquivo baixado (`DS - Coffee Shop.xlsx`) e importar os dados.  
  - Dar o nome `DS - Coffee Shop` à planilha criada.

- **Passo 6**:  
  Verificar a estrutura dos dados:
  - Cada coluna representando **um único tipo de informação** (uma métrica ou uma dimensão).
  - Nenhuma célula com **vários dados misturados** (ex.: nome + quantidade na mesma célula).

> **Erro típico de execução**: importar o arquivo de forma errada (ex.: sobrepor planilha existente, misturar abas sem necessidade) ou não conferir se cada coluna corresponde a um único tipo de dado.

> **Sinal de execução correta**: a planilha tem colunas claras como `Product Name`, `Product Type`, `Number Sold`, com uma linha por registro de venda.

---

#### 6.2 Conectar a planilha ao Looker Studio

- **Passo 1**:  
  Acessar `https://lookerstudio.google.com/` com a mesma conta Google.

- **Passo 2**:  
  Clicar em **“Relatório em branco”**.

- **Passo 3**:  
  Na tela de “Adicionar dados ao relatório”, escolher **“Google Planilhas”** como conector.

- **Passo 4**:  
  Se for a primeira vez, clicar em **“AUTORIZAR”** para permitir o acesso do Looker Studio às planilhas.

- **Passo 5**:  
  Na lista de planilhas, selecionar `DS - Coffee Shop` (pode ser necessário mudar para a visão “Todos os itens”).

- **Passo 6**:  
  Clicar em **“Adicionar”** e, na janela “You are about to add data to this Report”, confirmar em **“ADICIONAR AO RELATÓRIO”**.

- **Passo 7**:  
  Selecionar o **layout de formato livre** para ter flexibilidade na montagem dos gráficos.

> **Erro típico de execução**: tentar usar outra conta Google (pessoal) diferente daquela usada para as planilhas, gerando erros de permissão.  
> **Sinal de execução correta**: a tabela padrão aparece no relatório, com campos da planilha disponíveis no painel de dados à direita.

---

#### 6.3 Criar a tabela base e ajustar a métrica

- **Passo 1**:  
  Com a tabela padrão selecionada, verificar se a dimensão está configurada como `Product Name` e a métrica padrão como `Record Count`.

- **Passo 2**:  
  Em **Propriedades da Tabela**, na seção de **Métrica**, substituir `Record Count` por `Number Sold`.

- **Passo 3**:  
  Ajustar formato e ordenação, se necessário, para visualizar claramente os produtos mais vendidos.

> **Erro típico de execução**: deixar `Record Count` e achar que está vendo “total de vendas”, quando na verdade está vendo **apenas número de registros**.  
> **Sinal de execução correta**: a coluna de métrica indica `Number Sold` e os valores fazem sentido como quantidade vendida.

---

#### 6.4 Criar gráficos de pizza por produto e por tipo

- **Passo 1**:  
  Com a tabela ainda no relatório, inserir um novo gráfico de **pizza (pie)**.

- **Passo 2**:  
  Configurar:
  - **Dimensão**: `Product Name`.  
  - **Métrica**: `Number Sold`.

- **Passo 3**:  
  Validar se os nomes de produtos aparecem corretamente (ex.: `Lunch Bun`, `Banana Loaf`, `Lavender Cupcake`, etc.) e se as fatias representam a proporção correta de vendas.

- **Passo 4**:  
  Duplicar o gráfico de pizza.

- **Passo 5**:  
  No gráfico duplicado, alterar a **dimensão** para `Product Type` (ex.: `Cupcake`, `Loaf`, `Cake`, `Cookie`), mantendo a **métrica** `Number Sold`.

> **Erro típico de execução**: manter `Product Name` na segunda pizza, sem trocar para `Product Type`, e achar que está comparando tipos de produto.  
> **Sinal de execução correta**: o segundo gráfico mostra apenas categorias como `Cupcake`, `Loaf`, `Cake`, `Cookie`, com suas respectivas fatias.

---

#### 6.5 Criar um scorecard de visão geral

- **Passo 1**:  
  Inserir um elemento de **Scorecard** no relatório.

- **Passo 2**:  
  Configurar:
  - Métrica: `Number Sold`, com agregação de soma (total vendido).

- **Passo 3**:  
  Opcionalmente, renomear o rótulo para algo como **“Total de itens vendidos”**.

> **Erro típico de execução**: usar `Record Count` como métrica no scorecard, o que mede quantas **linhas** há na base, não quantos itens efetivamente foram vendidos.  
> **Sinal de execução correta**: o scorecard mostra um número coerente com o somatório de `Number Sold` visto na tabela.

---

### 7 Exemplos Relevantes

- **Exemplo 1 — Métrica de contagem (Count)**  
  - **Cenário**: número de pessoas em um estudo médico.  
  - **O que fixa**: você está medindo **quantidade de indivíduos**; `Count` é a agregação natural.

- **Exemplo 2 — Métrica de soma (Sum)**  
  - **Cenário**: receita de vendas da loja online ou da Hermann's.  
  - **O que fixa**: números monetários normalmente são somados (total de receita), não apenas contados.

- **Exemplo 3 — Métrica de média (Avg)**  
  - **Cenário**: temperatura média em uma região ou quantidade média de chuva.  
  - **O que fixa**: médias são úteis para entender **tendências gerais**, não apenas totais.

- **Exemplo 4 — Dimensões na Hermann's**  
  - **Cenário**: analisar vendas por `Product Name` e por `Product Type`.  
  - **O que fixa**: a mesma métrica (`Number Sold`) ganha interpretação diferente conforme a dimensão: por nome de produto, você vê “qual bolo específico vende mais”; por tipo, você vê “qual categoria (cake, loaf, cupcake, cookie) domina”.

- **Exemplo 5 — Dimensões em esportes**  
  - **Cenário**: gols marcados em uma partida **por equipe**.  
  - **O que fixa**: a métrica é o número de gols; a dimensão é o time.

- **Exemplo 6 — Dimensões em sites**  
  - **Cenário**: usuários do site por país e tipo de dispositivo.  
  - **O que fixa**: métrica é o número de usuários; dimensões são país e dispositivo (permitem entender de onde vem o tráfego).

- **Exemplo 7 — Dimensões em erros de sistema**  
  - **Cenário**: número de erros exibidos por tipo e gravidade.  
  - **O que fixa**: saber apenas o total de erros não basta; você precisa saber **qual tipo** e **quão grave** são para priorizar correções.

Se algum desses exemplos **não foi explicitamente demonstrado na aula**, ele foi construído de forma conservadora a partir dos materiais indicados (`aulaDoc1`/`aulaDoc2`) e pode ser tratado como analogia segura.

---

### 8 Diferenças e Confusões Comuns

- **Métrica × Dimensão**  
  - **Confusão**: achar que qualquer número é métrica e qualquer texto é dimensão.  
  - **Correção**: métrica é o que você **mede**; dimensão é a categoria que organiza essa medida. Um código numérico que só identifica um cliente pode funcionar como dimensão, não como métrica de negócio.

- **Record Count × Número vendido (`Number Sold`)**  
  - **Confusão**: usar `Record Count` achando que representa “quantidade vendida”.  
  - **Correção**: `Record Count` conta registros da base; `Number Sold` mede a quantidade de itens vendidos.

- **Pizza com muitas categorias**  
  - **Confusão**: usar gráfico de pizza com dezenas de produtos diferentes.  
  - **Correção**: pizza é mais adequada quando há **poucas categorias relevantes**; em outros casos, prefira barras ou tabelas.

- **Dados brutos × visualização final**  
  - **Confusão**: acreditar que a visualização resolve qualquer problema de qualidade de dado.  
  - **Correção**: se os dados forem ruins (células com múltiplas informações, valores faltantes, tipos errados), o gráfico será igualmente ruim.

---

### 9 Como Cai em Prova

- **Formato típico**:
  - Questões **conceituais** sobre definição de métrica, dimensão e agregação.
  - Questões de **cenário**, pedindo para escolher métricas/dimensões adequadas para um relatório.
  - Questões sobre **interpretação de gráficos** (tabelas, pizzas, scorecards) e escolha de visualização correta.

- **Tipo de enunciado**:
  - “Dado o cenário da Hermann's, quais métricas e dimensões são mais adequadas para responder se é necessário aumentar o pedido de ingredientes?”  
  - “Em um relatório de acessos a um site por país e dispositivo, qual campo é métrica e quais são dimensões?”

- **Erro cobrado**:
  - Confundir métrica com dimensão.
  - Escolher agregação inadequada (ex.: `Count` quando deveria ser `Sum`).
  - Interpretar `Record Count` como se fosse total de vendas.

- **Armadilha comum**:
  - Enunciados que pedem “qual gráfico usar” sem explicitar claramente **qual pergunta do negócio**; o aluno precisa inferir a pergunta para escolher a visualização correta.

- **Padrão de questão**:
  - Itens de múltipla escolha com alternativas parecidas, mudando apenas se o campo é tratado como métrica ou dimensão, ou se a agregação é correta ou não.

Se houver avaliação prática, o critério principal será:
- Se o relatório montado:
  - Usa **métricas e dimensões corretas**.
  - Mostra **pelo menos um gráfico adequado** para o objetivo.
  - Evita erros básicos de configuração (`Record Count` x `Number Sold`).

---

### 10 Pontos de Atenção

- **Não começar pelo gráfico**; começar pela **pergunta do negócio**.
- **Não usar `Record Count` sem entender o que ele mede**.
- **Não misturar múltiplas informações em uma mesma célula** na planilha (isso quebra a análise).
- **Não criar pizza com categorias demais** — priorizar as principais ou usar outro tipo de gráfico.
- **Verificar sempre quais campos são métricas e quais são dimensões** antes de montar o relatório.
- **Confirmar se está logado na conta Google correta** (a mesma que tem acesso às planilhas).
- **Documentar, mesmo que mentalmente, qual decisão cada gráfico pretende apoiar**.

---

### 11 Checklist de Domínio

Marque mentalmente (ou literalmente) se você consegue:

- **Sei definir**:
  - O que é Looker Studio e qual seu papel na disciplina.
  - O que são métricas, dimensões e agregações.
- **Sei explicar**:
  - Por que o caso da Hermann's ilustra bem o uso de dashboards.
  - Como uma má escolha de agregação altera a interpretação de um relatório.
- **Sei reconhecer**:
  - Em um conjunto de campos, quais são métricas e quais são dimensões.
  - Em um relatório pronto, se um gráfico está configurado com campos coerentes.
- **Sei aplicar** (para esta aula):
  - Conectar uma planilha simples ao Looker Studio.
  - Criar tabela, pizzas e scorecard com as configurações corretas.
- **Sei evitar erro comum**:
  - Não confundo `Record Count` com total de vendas.
  - Não trato qualquer número como métrica válida.

Se algum item acima for “não”, esse é um ponto prioritário de estudo/revisão.

---

### 12 Auto-Teste

Use as perguntas abaixo para testar seu domínio **sem consultar o material**:

1. **Conceitos básicos**
   - O que é uma métrica? Dê **três exemplos** de contextos diferentes (negócios, saúde, esportes).
   - O que é uma dimensão? Dê **três exemplos** diferentes.
   - Explique, com suas palavras, a diferença entre `Count`, `Sum` e `Avg`.

2. **Caso Hermann's**
   - Que decisão principal o relatório da Hermann's precisa apoiar?
   - Quais três campos você usaria como dimensões para analisar as vendas?
   - Qual métrica principal você colocaria em um scorecard?

3. **Looker Studio na prática**
   - Descreva o passo a passo, em alto nível, para:
     - Trazer o arquivo `DS - Coffee Shop.xlsx` para o Google Sheets.
     - Conectar essa planilha a um relatório em branco no Looker Studio.
   - Quais gráficos você criaria para:
     - Ver produtos mais vendidos.
     - Ver tipos de produto mais vendidos.
     - Ver o total de vendas no período.

4. **Erros e pegadinhas**
   - Dado um gráfico que usa `Record Count` como métrica, como você checa se isso faz sentido para a pergunta do relatório?
   - Em que situação uma dimensão numérica (ex.: idade) é usada como dimensão e não como métrica?

Se você conseguir responder com segurança e **sem decorar frases**, seu domínio está adequado para prova/AT nesta parte do conteúdo.

---

### 13 Resumo Estratégico Consolidado

- A aula consolida a transição de **visão geral de dados** para **construção operacional de relatórios** no Looker Studio, usando o caso da Hermann's como fio condutor.
- O foco está em entender **o que é métrica**, **o que é dimensão** e **como agregações** (Count, Sum, Avg) mudam a leitura de gráficos.
- A prática de importar dados para o Google Sheets, conectá-los ao Looker Studio e montar **tabela + pizzas + scorecard** é o mínimo que o aluno precisa dominar para seguir para etapas posteriores.
- Toda decisão de visualização deve ser guiada pela pergunta de negócio — não pelo desejo de “usar todos os gráficos disponíveis”.

---

### 14 Resumo em 5 Linhas

1. Looker Studio é a ferramenta usada para transformar planilhas em relatórios interativos.  
2. Relatórios úteis começam com **objetivo de negócio claro**, não com escolha de gráfico.  
3. **Métricas** medem quantidades; **dimensões** categorizam essas medidas; **agregações** (Count, Sum, Avg) resumem os dados.  
4. O caso da Hermann's mostra como dashboards encurtam o tempo entre dado e decisão.  
5. Saber montar tabela, gráficos de pizza e scorecard com métricas/dimensões corretas é requisito mínimo desta aula.

---

### 15 Palavras-Chave

- Looker Studio  
- Google Sheets  
- Métrica  
- Dimensão  
- Agregação (`Count`, `Sum`, `Avg`)  
- Hermann's Cake and Coffee Shop  
- Product Name  
- Product Type  
- Number Sold  
- Gráfico de pizza  
- Scorecard  
- Relatório interativo  
- Objetivo de negócio  
- Dashboard  
- Cidadão de dados
