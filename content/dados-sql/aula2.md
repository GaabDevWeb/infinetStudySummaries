DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 29/01/2026  
TEMA DA AULA: Construção de relatório no Looker Studio a partir da planilha DS - Coffee Shop  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1jAVBx6Cets0GRDfdfZYv5bmH36hFVBMe/view

---

### 1 Tema e Escopo

- **Tema**: Construção de um **relatório interativo no Looker Studio** (antigo Google Data Studio) a partir de dados em **Google Sheets/CSV**, com foco em **métricas, dimensões e agregação** usando o caso da **Confeitaria e Cafeteria Hermann’s**.
- **Problema que resolve**: Como sair de uma planilha com registros de vendas e chegar a **gráficos e painéis** que respondem às perguntas de negócio certas (ex.: quais produtos mais vendem, quais tipos de produtos performam melhor).
- **Para que serve**:
  - Saber **preparar a planilha** (limpeza básica e dados bem estruturados).
  - Conectar a planilha ao **Looker Studio**.
  - Definir **dimensões e métricas** corretamente em tabelas e gráficos.
  - Configurar **agregações** (contagem, soma, média) de forma coerente.
  - Montar um **relatório mínimo completo** (tabela, gráfico de pizza por produto, gráfico de pizza por tipo de produto e scorecard de total).
- **Inclui**:
  - Conceitos operacionais de **métrica**, **dimensão** e **agregação** no Looker Studio.
  - Passo a passo de conexão do arquivo `DS - Coffee Shop.xlsx` → Google Sheets → Looker Studio.
  - Construção de tabela e gráficos de pizza para a Hermann’s.
  - Exemplos práticos de leitura e uso dos gráficos para decisão.
- **Não inclui** (nesta aula):
  - Escrita de SQL.
  - Modelagem de banco de dados relacional.
  - Cálculos estatísticos avançados.
  - Automação de atualização de dados (agendamentos, conexões avançadas).

> **Classificação da aula**: **híbrida** (conceitual + metodológica/prática).  
> A transcrição `.vtt` contém falas de navegação de tela e cliques; este guia consolida os conceitos, o raciocínio e o passo a passo operacional, sem reproduzir cada clique literal.

---

### 2 Contexto na Disciplina

- **Onde entra**:
  - Continuação direta da aula 1, ainda no eixo de **visualização de dados no Looker Studio**.
  - Foco agora em **aplicar**: sair do conceito geral de visualização para **construir um relatório real**.
- **Pré-requisitos esperados**:
  - Entender o papel de **cidadão de dados** e o ciclo `Coletar → Transformar → Analisar → Comunicar → Agir`.
  - Saber o que é um **dashboard** e ter visto o Looker Studio de forma inicial (aula anterior).
  - Estar logado com conta Google do Infnet.
- **Dependências futuras**:
  - A prática com métricas, dimensões e agregação:
    - Será reutilizada quando a disciplina entrar em **SQL** (agregações como `COUNT`, `SUM`, `AVG`, etc.).
    - Ajuda a entender como **campos numéricos e categóricos** serão tratados em consultas.
  - O relatório da Hermann’s é base para:
    - **TP de visualização** com Looker Studio.
    - Discussões posteriores sobre **qualidade de dados** e **melhorias de dashboard**.

---

### 3 Visão Conceitual Geral

1. Relatórios úteis **começam de uma pergunta de negócio**, não de um gráfico aleatório.  
   - Exemplo: “Como a Hermann pode aumentar o volume de vendas da cafeteria?”.
2. O dono da Hermann’s já tem dados (planilha + contador), mas o fluxo é **lento**: ele só vê o consolidado **uma vez por semana**, depois que o contador processa.
3. O Looker Studio permite **conectar a planilha diretamente**, simplificando o caminho: Hermann pode ver gráficos atualizados com muito menos atraso.
4. Para qualquer gráfico no Looker Studio, você **sempre** precisa de:
   - Pelo menos **uma dimensão** (categoria, rótulo) — ex.: `Product Name`, `Product Type`.
   - Pelo menos **uma métrica** (número) — ex.: `Number Sold`, `Revenue`.
5. Métricas são quase sempre usadas com alguma **agregação**:
   - Contagem (Count), soma (Sum), média (Avg), etc.
   - A escolha da agregação muda totalmente a interpretação do gráfico.
6. O caso da Hermann’s guia a aula:
   - Primeiro, construir a planilha no Google Sheets a partir do arquivo `DS - Coffee Shop.xlsx`.
   - Depois, conectar a planilha ao Looker Studio e:
     - Criar uma tabela.
     - Criar gráfico de pizza por produto.
     - Criar gráfico de pizza por tipo de produto.
     - Criar um scorecard (visão geral) com total de vendas.

---

### 4 Ideias-Chave (máx. 7)

1. **Relatório guiado por objetivo de negócio**  
   - **Importância**: garante que cada gráfico responda a uma pergunta útil, e não seja apenas decoração.  
   - **Onde cai em prova**: enunciados que pedem para identificar se um gráfico responde ou não ao objetivo declarado; questões conceituais sobre “quais informações são necessárias para…”.  
   - **Onde aparece na prática**: escolha de métricas e dimensões com base no que o dono do negócio quer decidir (ex.: estoque, mix de produtos).  
   - **Impacto de não entender**: dashboards cheios de gráficos que não levam a nenhuma decisão concreta.

2. **Conexão planilha → Looker Studio**  
   - **Importância**: é o caminho mínimo para trazer dados reais para dentro do relatório.  
   - **Prova**: perguntas de passo a passo (“qual menu usar para importar o arquivo?”, “como adicionar dados ao relatório?”).  
   - **Prática**: uso diário para atualizar e revisar relatórios a partir de planilhas.  
   - **Impacto de não entender**: dificuldade para montar qualquer relatório, mesmo que os conceitos de métrica/dimensão estejam claros.

3. **Métrica**  
   - **Importância**: é o **número que mede algo** — sem métrica, não há análise quantitativa.  
   - **Prova**: identificação de métricas em tabelas, escolha da agregação correta, distinção entre contagem e soma.  
   - **Prática**: campos como `Number Sold`, `Receita`, `Quantidade de erros`, `Quantidade de usuários`.  
   - **Impacto de não entender**: gráficos com números errados ou sem sentido (ex.: somar campos que deveriam ser contados).

4. **Dimensão**  
   - **Importância**: permite **segmentar e categorizar** as métricas (por produto, por tipo, por país, etc.).  
   - **Prova**: perguntas pedindo para identificar qual campo deve ser dimensão, ou para escolher a dimensão correta para um gráfico específico.  
   - **Prática**: usar `Product Name` ou `Product Type` para fatiar as vendas da Hermann’s.  
   - **Impacto de não entender**: gráficos em que as fatias não representam o que o negócio realmente quer comparar.

5. **Agregação de métrica**  
   - **Importância**: define **como** os valores numéricos são combinados (contar, somar, tirar média).  
   - **Prova**: questões que trocam propositalmente `Count` por `Sum`, ou pedem para escolher a agregação correta.  
   - **Prática**: `Number Sold` por produto (soma), `Número de pedidos` (contagem), `Ticket médio` (média).  
   - **Impacto de não entender**: interpretações erradas, como achar que a média é o total ou que a contagem é a soma de valores.

6. **Gráficos de pizza por produto e por tipo de produto**  
   - **Importância**: são exemplos claros de como **a mesma métrica** pode ser analisada por dimensões diferentes.  
   - **Prova**: questões comparando gráficos por produto vs por tipo, ou pedindo para escolher qual responde melhor a determinada pergunta.  
   - **Prática**: ver quais produtos específicos vendem mais e quais **categorias** (Cake, Cupcake, Loaf, Cookie) são mais fortes.  
   - **Impacto de não entender**: usar sempre a mesma visão (ex.: só por produto) e perder padrões mais amplos (ex.: tipos mais vendidos).

7. **Scorecard (visão geral)**  
   - **Importância**: dá um **número único** de referência (ex.: total de vendas) para contextualizar os demais gráficos.  
   - **Prova**: perguntas sobre que tipo de visualização usar para mostrar um total; interpretação de scorecards.  
   - **Prática**: mostrar o total de unidades vendidas em determinado período, total de receitas, total de erros, etc.  
   - **Impacto de não entender**: relatórios sem um “número principal” que resuma o cenário.

---

### 5 Conceitos Essenciais — Explicação Operacional

#### 5.1 Métricas

- **Definição operacional**  
  Campo **numérico** que mede algo **quantitativamente** no seu conjunto de dados (vendas, quantidade, tempo, erros, acessos, etc.).

- **Quando usar**  
  - Sempre que o objetivo envolver **“quanto”**, **“quantos”**, **“total”**, **“média”**, **“variação”**.

- **Quando NÃO usar**  
  - Para campos que são apenas descrições ou categorias (nomes, tipos, países, rótulos de produto).

- **Como reconhecer**  
  - No Looker Studio, normalmente aparece como campo do tipo `Number`, `Currency`, `Duration`.  
  - Nos exemplos:
    - Hermann’s: `Number Sold` (quantidade vendida).
    - Outras áreas: temperatura, quantidade de erros, número de usuários, faturamento.

- **Relação com outros conceitos**  
  - Métricas **dependem** de dimensões para serem analisadas (ex.: vendas **por produto**).  
  - Quase sempre usadas com alguma **agregação** (somar, contar, tirar média).

- ❌ **Erro comum real**  
  Tratar um campo aparentemente numérico, mas que é **identificador** (ex.: `ID do Pedido`), como métrica a ser somada.

- ⚠️ **Pegadinha de prova**  
  Pergunta que coloca uma lista mista de campos (ex.: `Product Name`, `Number Sold`, `Product Type`, `Order ID`) e pede: “Quais são métricas?”. A resposta correta **não inclui** o identificador e nem os textos.

- 🧪 **Como testar entendimento**  
  - Dado um conjunto de campos, marcar quais são candidatos a métricas.

- 🛠️ **Aplicação mínima correta**  
  - Configurar no Looker Studio `Number Sold` como métrica de um gráfico de pizza.

- 📏 **Critério verificável de acerto**  
  - A definição deixa claro que **métrica é número que avalia algo**, e não apenas “campo numérico”.

---

#### 5.2 Dimensões

- **Definição operacional**  
  Campos que **descrevem, categorizam ou identificam** os itens que estão sendo medidos pelas métricas.

- **Quando usar**  
  - Ao precisar **fatiar** uma métrica em grupos: por produto, por tipo, por país, por canal, por faixa etária, etc.

- **Quando NÃO usar**  
  - Para valores que só fazem sentido agregados (ex.: “total de vendas” não é dimensão).

- **Como reconhecer**  
  - Em geral são campos de texto (`Text`), categorias (`Category`), datas (`Date`) ou códigos que identificam algo.  
  - Exemplos da Hermann’s:
    - `Product Name` (Lunch Bun, Banana Loaf, etc.).
    - `Product Type` (Cake, Cupcake, Loaf, Cookie).

- **Relação com outros conceitos**  
  - Cada ponto/fatia/linha do gráfico é um **valor de dimensão** com uma ou mais **métricas** associadas.

- ❌ **Erro comum real**  
  Usar uma dimensão numérica (como “idade” tratada em faixas) como se fosse métrica, somando valores que deveriam ser agrupados.

- ⚠️ **Pegadinha de prova**  
  Perguntas que pedem para indicar qual campo “vai no eixo X” de um gráfico de barras; a resposta correta costuma ser uma **dimensão**, não uma métrica.

- 🧪 **Como testar entendimento**  
  - Dado um exemplo de relatório, pedir que o aluno identifique **quais campos são dimensões** em cada gráfico.

- 🛠️ **Aplicação mínima correta**  
  - Definir `Product Name` como dimensão em um gráfico de pizza no Looker Studio.

- 📏 **Critério verificável de acerto**  
  - A definição enfatiza que dimensão é “o que estamos avaliando ou categorizando”, e os exemplos são coerentes com isso.

---

#### 5.3 Agregação de métricas

- **Definição operacional**  
  Forma como o Looker Studio **combina vários valores individuais** de uma métrica em um único valor para cada dimensão (ex.: somar todas as vendas de um produto).

- **Principais tipos (na aula)**  
  - `Count` (contagem de registros).  
  - `Sum` (soma dos valores).  
  - `Avg` (média).

- **Quando usar cada uma**  
  - `Count`: quando o que importa é **quantos registros** existem (ex.: quantos pedidos, quantos erros).  
  - `Sum`: quando você precisa do **total de algo numerável**, como unidades vendidas ou valor total.  
  - `Avg`: quando o foco é um **valor médio** (ticket médio, tempo médio, temperatura média).

- ❌ **Erro comum real**  
  - Usar `Count` para uma métrica onde o que importa é o **valor numérico** (ex.: contar linhas de vendas em vez de somar `Number Sold`).

- ⚠️ **Pegadinha de prova**  
  - Questões que apresentam dois gráficos diferentes (um com `Count`, outro com `Sum`) e perguntam qual deles responde à pergunta correta (ex.: “quantas unidades foram vendidas?”).

- 🧪 **Como testar entendimento**  
  - Dado um objetivo de negócio (“saber o total de unidades vendidas por produto”), pedir ao aluno que escolha a agregação adequada.

- 🛠️ **Aplicação mínima correta**  
  - No Looker Studio, configurar `Number Sold` com agregação `Sum` nos gráficos da Hermann’s.

- 📏 **Critério verificável de acerto**  
  - O aluno consegue justificar a escolha da agregação com base na **pergunta do negócio**.

---

#### 5.4 Construção do relatório da Hermann’s no Looker Studio

- **Definição operacional do caso**  
  - Dono quer **aumentar volume de vendas**.  
  - Hoje decide com base em relatório semanal do contador.  
  - Quer ver **produtos mais vendidos** para planejar compras e estoque.

- ❌ **Erro comum real**  
  - Pensar apenas em “replicar o Excel em gráfico” em vez de responder perguntas claras (ex.: “top 5 produtos”, “distribuição por tipo”).

- 🧪 **Como testar entendimento**  
  - Dado um conjunto de dados, pedir ao aluno para escrever **explicitamente** a pergunta de negócio do relatório.

- 🛠️ **Aplicação mínima correta**  
  - Criar pelo menos:
    - Uma **tabela** com `Product Name` (dimensão) e `Number Sold` (métrica).  
    - Um **gráfico de pizza** com `Product Name` / `Number Sold`.  
    - Um **gráfico de pizza** com `Product Type` / `Number Sold`.  
    - Um **scorecard** com o **total de `Number Sold`**.

- 📏 **Critério verificável de acerto**  
  - Ao final, o relatório permite responder: **“quais produtos e quais tipos mais vendem?”** e **“quantas unidades foram vendidas no total?”**.

---

### 6 Procedimento / Execução (passo a passo)

#### 6.1 Preparar os dados no Google Sheets

1. **Baixar o arquivo base**  
   - Acessar o link: `https://github.com/Apress/google-data-studio-for-beginners/blob/main/DS%20-%20Coffee%20Shop.xlsx`.  
   - Clicar em **Download** para obter o arquivo `DS - Coffee Shop.xlsx`.  
   - (Ou usar a versão já disponibilizada pelo professor na plataforma, se indicado em aula.)
2. **Criar planilha no Google Sheets**  
   - Acessar `https://docs.google.com/spreadsheets`.  
   - Clicar em **Planilha em branco**.
3. **Importar o arquivo Excel**  
   - Menu **Arquivo → Importar**.  
   - Guia **Fazer upload**.  
   - Clicar em **Procurar** e selecionar `DS - Coffee Shop.xlsx`.  
   - Confirmar **Importar dados**.  
   - Dar nome à planilha: `DS - Coffee Shop`.
4. **Verificar estrutura dos dados**  
   - Conferir se:
     - Cada coluna tem **apenas um tipo de dado** (ex.: `Product Name`, `Product Type`, `Number Sold` etc.).  
     - Cada célula possui **apenas um dado** (sem “vários dados concatenados” na mesma célula).  
   - Corrigir (se necessário) linhas/células estranhas antes de conectar ao Looker Studio.

- ❌ **Erro típico**  
  - Manter colunas “sujas” (com misturas de texto e número) e depois culpar a ferramenta quando o gráfico sai incorreto.

- ✅ **Sinal de execução correta**  
  - Colunas claramente identificadas, sem células com informações misturadas.

---

#### 6.2 Conectar a planilha ao Looker Studio

1. Acessar `https://lookerstudio.google.com`.  
2. Clicar em **Relatório em branco**.  
3. Na tela **Adicionar dados ao relatório**:
   - Escolher **Google Planilhas**.  
   - Se for a primeira vez, clicar em **AUTORIZAR** para permitir acesso às planilhas.  
   - No lado esquerdo, clicar em **TODOS OS ITENS** e selecionar a planilha `DS - Coffee Shop`.  
   - Clicar em **Adicionar**.
4. Na janela “You are about to add data to this Report”:
   - Clicar em **ADICIONAR AO RELATÓRIO**.
5. Se aparecer opção de layout:
   - Escolher **Layout de formato livre**.

- ❌ **Erro típico**  
  - Esquecer de salvar a planilha no Google Drive ou selecionar a planilha errada.

- ✅ **Sinal de execução correta**  
  - A fonte de dados aparece na lateral, com campos (`Product Name`, `Product Type`, `Number Sold`, etc.) disponíveis.

---

#### 6.3 Criar a tabela principal

1. Com o relatório aberto, inserir uma **tabela**.  
2. Verificar as **Propriedades da Tabela**:
   - **Dimensão**: `Product Name`.  
   - **Métrica**: por padrão pode vir `Record Count`.
3. Substituir a métrica padrão:
   - Em **Métrica**, trocar `Record Count` por `Number Sold`.

- ❌ **Erro típico**  
  - Manter `Record Count` como métrica, o que conta linhas em vez de somar unidades vendidas.

- ✅ **Sinal de execução correta**  
  - Cada linha da tabela mostra um `Product Name` e o total de `Number Sold` correspondente.

---

#### 6.4 Criar gráfico de pizza por produto

1. Duplicar a tabela ou inserir um **novo gráfico de pizza (Pie chart)**.  
2. Configurar:
   - **Dimensão**: `Product Name`.  
   - **Métrica**: `Number Sold` com agregação `Sum`.
3. Conferir rótulos de alguns produtos (por exemplo):
   - `Lunch Bun - Pão de Almoço`.  
   - `Banana Loaf - Pão de banana`.  
   - `Lavender Cupcake - Cupcake de Lavanda`.  
   - `Traditional Chocolate Cake - Bolo de Chocolate Tradicional`.  
   - `Pink Champagne Cupcake - Cupcake Rosa de Champanhe`.  
   - `Salted Caramel Cookies - Biscoitos de Caramelo Salgado`.  
   - `Belgian Chocolate Cupcake - Cupcake de Chocolate Belga`.  
   - `Raspberry Loaf - Pão de Framboesa`.  
   - `Vanilla Sponge Cake - Bolo de baunilha`.  
   - `Sicilian Lemone Cake - Bolo de Limão Siciliano`.

- ❌ **Erro típico**  
  - Trocar dimensão (usar `Product Type` quando o objetivo é ver produto individual) sem perceber, interpretando errado as fatias.

- ✅ **Sinal de execução correta**  
  - Cada fatia da pizza representa um **produto específico** com área proporcional ao `Number Sold`.

---

#### 6.5 Criar gráfico de pizza por tipo de produto

1. Duplicar o gráfico de pizza anterior.  
2. Alterar apenas a **dimensão**:
   - **Dimensão**: `Product Type`.  
   - **Métrica**: manter `Number Sold` com `Sum`.
3. Conferir os tipos principais:
   - `Cupcake` – Bolinho.  
   - `Loaf` – Pão.  
   - `Cake` – Bolo.  
   - `Cookie` – Biscoito.

- ❌ **Erro típico**  
  - Não perceber que, ao mudar a dimensão, a interpretação também muda: agora a pizza responde à pergunta “qual **tipo** de produto vende mais?”.

- ✅ **Sinal de execução correta**  
  - A pizza mostra poucas fatias (4 categorias principais), permitindo visão consolidada por tipo.

---

#### 6.6 Criar o scorecard (visão geral)

1. Inserir um **Scorecard** no relatório.  
2. Configurar:
   - **Métrica**: `Number Sold` com agregação `Sum`.  
3. Posicionar o scorecard em lugar de destaque no relatório (ex.: parte superior).

- ❌ **Erro típico**  
  - Configurar o scorecard com `Record Count` ou outra métrica irrelevante, dando um número que não representa o total desejado.

- ✅ **Sinal de execução correta**  
  - O número exibido corresponde ao **total de unidades vendidas** em todos os registros.

---

### 7 Exemplos Relevantes

- **Exemplo 1 — Comparar produtos específicos**  
  - Pergunta: “Quais produtos individuais mais vendem na Hermann’s?”.  
  - Uso: gráfico de pizza com dimensão `Product Name` e métrica `Number Sold`.  
  - Fixação: reforça que **cada fatia** representa um **produto específico**.

- **Exemplo 2 — Comparar categorias de produto**  
  - Pergunta: “Qual categoria (Cake, Cupcake, Loaf, Cookie) é mais forte em vendas?”.  
  - Uso: gráfico de pizza com dimensão `Product Type` e métrica `Number Sold`.  
  - Fixação: mostra como a **mesma métrica** pode ser analisada com uma **dimensão diferente**.

- **Exemplo 3 — Visão geral de volume**  
  - Pergunta: “Quantas unidades, no total, foram vendidas no período analisado?”.  
  - Uso: scorecard com `Number Sold (Sum)`.  
  - Fixação: destaca o papel de um indicador único de **visão geral**.

> Se, em alguma aula ou transcrição adicional, aparecerem mais gráficos (por data, por canal, etc.), eles seguem a **mesma lógica** de métrica + dimensão, mas esses casos específicos **não foram cobertos em detalhe** nos documentos desta aula.

---

### 8 Diferenças e Confusões Comuns

- **Métrica vs Dimensão**  
  - **Métrica**: número que mede algo.  
  - **Dimensão**: categoria pela qual o número é analisado.  
  - Confusão comum: achar que qualquer campo numérico é métrica (ex.: `ID`), ou que qualquer campo textual é sempre dimensão útil (mesmo quando não ajuda na análise).

- **Count vs Sum**  
  - `Count`: conta linhas/registros.  
  - `Sum`: soma valores.  
  - Confusão comum: usar `Count` quando deveria usar `Sum`, levando a um número de “registros” em vez de “unidades vendidas”.

- **Gráfico por produto vs por tipo**  
  - Por produto: responde “quais produtos específicos vendem mais?”.  
  - Por tipo: responde “quais categorias de produto são mais fortes?”.  
  - Confusão comum: olhar para o gráfico por tipo e tirar conclusões sobre **produtos específicos**, ou o inverso.

---

### 9 Como Cai em Prova

- **Formato típico**:
  - Questões conceituais: definição de métrica, dimensão, agregação; exemplos corretos e incorretos.  
  - Questões de interpretação de gráfico: dado um print de dashboard, perguntar o que ele está medindo de fato.  
  - Questões de procedimento: ordenar passos para conectar planilha ao Looker Studio e criar um gráfico.

- **Tipo de enunciado**:
  - “Dado o relatório abaixo, identifique qual campo é métrica e qual é dimensão.”  
  - “Qual tipo de agregação é mais adequada para responder à pergunta X?”  
  - “Qual gráfico atende melhor ao objetivo de mostrar a distribuição de vendas por tipo de produto?”

- **Erros cobrados**:
  - Confundir `Count` com `Sum`.  
  - Escolher dimensão errada para a pergunta de negócio.  
  - Tratar campos descritivos como métricas.

- **Armadilha comum**:
  - Enunciado que descreve corretamente o uso da ferramenta, mas com **pergunta de negócio mal formulada**. A resposta esperada exige perceber que o gráfico não responde ao objetivo declarado.

- **Padrão de questão**:
  - Pequeno caso (como a Hermann’s), seguido de 3–5 perguntas sobre **métrica/dimensão/agregação** e interpretação de gráficos.

---

### 10 Pontos de Atenção

- **Não confiar na métrica padrão (`Record Count`)** sem verificar se ela responde à pergunta do negócio.  
- **Não usar qualquer campo numérico como métrica** sem analisar o que ele representa.  
- **Não misturar dados sujos ou mal formatados na planilha**, pois isso se propaga para os gráficos.  
- **Não trocar a dimensão sem revisar o objetivo do gráfico** (produto vs tipo, por exemplo).  
- **Não ignorar o scorecard**: sem um número de referência, fica difícil avaliar o impacto das fatias de pizza.  
- **Não pular a etapa de verificar se os nomes de produtos e tipos estão consistentes** (erros de digitação geram categorias duplicadas).

---

### 11 Checklist de Domínio

Marque **SIM/NÃO** para cada item:

- [ ] Sei **definir** métrica, dimensão e agregação em termos operacionais.  
- [ ] Sei **explicar**, com minhas palavras, a diferença entre métrica e dimensão usando o caso da Hermann’s.  
- [ ] Sei **reconhecer** em um print de dashboard quais campos estão como dimensões e quais como métricas.  
- [ ] Sei **aplicar**:  
  - [ ] Conectar uma planilha Google Sheets ao Looker Studio.  
  - [ ] Criar tabela e gráficos de pizza configurando corretamente dimensão e métrica.  
  - [ ] Configurar um scorecard com a métrica correta.
- [ ] Sei **evitar o erro comum** de usar `Record Count` ou agregação inadequada (Count vs Sum vs Avg).

Se qualquer item estiver em “NÃO”, revise a seção correspondente antes de seguir para exercícios ou TPs.

---

### 12 Auto-Teste

**Perguntas abertas técnicas**

1. Explique, com suas palavras, a diferença entre **métrica** e **dimensão** no contexto de um relatório do Looker Studio.  
2. Dado o objetivo “saber quantas unidades de cada tipo de produto foram vendidas”, quais seriam:
   - a dimensão?  
   - a métrica?  
   - a agregação adequada?
3. Por que usar `Record Count` nem sempre é uma boa ideia? Dê um exemplo concreto.

**Mini exercícios aplicáveis**

4. No caso da Hermann’s, descreva dois gráficos que você criaria além dos de pizza apresentados, especificando **dimensão, métrica e agregação** de cada um.  
5. Suponha que a planilha tenha um campo `Order Date`. Como você configuraria um gráfico para ver a **evolução das vendas ao longo do tempo**?

**Cenários de decisão (3–5)**

6. Você recebe um relatório em que o gráfico de pizza foi configurado com:
   - Dimensão: `Product Name`.  
   - Métrica: `Record Count`.  
   - Pergunta do negócio: “Quais produtos mais vendem?”.  
   → O relatório está correto? Se não, o que deve ser ajustado?  
7. Um colega configurou um scorecard com métrica `Number Sold (Avg)` para responder “qual o total de unidades vendidas no mês?”. Analise o erro e proponha a correção.  
8. A gerência quer saber se faz sentido aumentar a produção de **Cupcakes**. Qual gráfico, dimensões, métricas e agregações você usaria para apoiar essa decisão?

---

### 13 Resumo Estratégico Consolidado

- O relatório eficaz começa de **perguntas de negócio claras** (no caso, aumentar vendas da Hermann’s) e só depois escolhe métricas, dimensões e gráficos.  
- No Looker Studio, **todo gráfico** é combinação de **dimensões (categorias)** com **métricas (números)**, quase sempre usando uma **agregação** (Count, Sum, Avg).  
- O caminho planilha (`DS - Coffee Shop.xlsx` → Google Sheets) → Looker Studio permite construir, com poucos cliques, **tabela**, **pizza por produto**, **pizza por tipo** e **scorecard** que já respondem perguntas úteis.  
- Erros típicos incluem usar `Record Count` por padrão, escolher dimensões erradas e não alinhar os gráficos ao objetivo do relatório — exatamente o que costuma ser cobrado em prova.  
- Dominar esses conceitos e o passo a passo torna muito mais simples montar relatórios semelhantes em outros contextos (marketing, TI, operações, etc.).

---

### 14 Resumo em 5 Linhas

1. Um relatório útil começa definindo **objetivo de negócio** e **perguntas concretas**.  
2. No Looker Studio, **métricas** medem (números), **dimensões** categorizam e **agregações** combinam valores.  
3. O caso da Hermann’s mostra como transformar a planilha `DS - Coffee Shop` em **tabela, gráficos de pizza e scorecard**.  
4. A troca entre `Product Name` e `Product Type` como dimensões muda a **pergunta respondida** pelo gráfico.  
5. Erros como usar `Record Count` ou agregações inadequadas são centrais tanto para **falhas práticas** quanto para **pegadinhas de prova**.

---

### 15 Palavras-Chave

- Looker Studio (Google Data Studio)  
- Métrica  
- Dimensão  
- Agregação (Count, Sum, Avg)  
- Product Name / Product Type  
- Scorecard (visão geral)  
- Confeitaria e Cafeteria Hermann’s  