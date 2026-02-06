DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 03/02/2026 
TEMA DA AULA: Métricas, dimensões e agregações no Looker Studio com o caso Hermann's  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1Mdjb9lSmIvGhq9zMAJ7VimoKJ_pPvhcs/view

---

## 1 Tema e Escopo

**Tema:** Visualização de dados com Looker Studio — relatórios baseados em Google Sheets, conceitos de métricas, dimensões e agregação.

**Problema que resolve:** Permitir que o usuário crie dashboards interativos a partir de planilhas na nuvem (Google Sheets), aplicando corretamente dimensões e métricas para análise de negócio.

**Para que serve:**
- Visualizar dados de planilhas Google Sheets no Looker Studio
- Construir relatórios interativos com tabelas, gráficos de pizza e scorecard
- Definir métricas, agregação e dimensões para análise correta dos dados

**Inclui:**
- Looker Studio (histórico, capacidades, conectores)
- Perguntas orientadoras para definição de relatórios
- Estudo de caso Hermann's Cake and Coffee Shop
- Procedimento para importar Excel no Google Sheets e conectar ao Looker Studio
- Conceitos de dimensão vs métrica
- Agregações: Count, Sum, Avg
- Construção de tabela, gráfico de pizza e scorecard

**Não inclui:**
- Conectores avançados (BigQuery, bancos relacionais)
- Calculated fields / campos calculados
- Filtros interativos e drill-down
- Tratamento de datas e formatos regionais complexos

---

## 2 Contexto na Disciplina

**Onde entra:** Continuação da etapa de visualização de dados. A aula 3 abordou CSV e primeiro contato com Looker Studio; esta aula amplia para Google Sheets e introduz dimensões e métricas.

**Pré-requisitos:**
- Conta Google (para Looker Studio e Google Sheets)
- Conceito básico de dashboard e visualização de dados
- Aula anterior (conexão com CSV, primeiro relatório)

**Dependências futuras:**
- TP1: relatório com CSV
- TP2: relatório com Google Sheets, tabela, dois gráficos de pizza e scorecard
- Conceitos de métrica e dimensão serão usados em todas as visualizações posteriores

---

## 3 Visão Conceitual Geral

O Looker Studio é uma ferramenta de visualização de dados que lê dados de diversas fontes, processa (modifica, agrupa, adiciona) e apresenta em gráficos e tabelas. Cada gráfico exibe **campos** de uma fonte de dados — esses campos são divididos em **dimensões** e **métricas**. Dimensões categorizam; métricas quantificam. O relatório deve ser planejado com base no objetivo de negócio, nas informações necessárias, no nível de conhecimento de dados do público e na melhor forma de apresentação.

---

## 4 Ideias-Chave (máx 7)

| Ideia | Importância | Onde cai em prova | Prática | Impacto de não entender |
|-------|-------------|-------------------|---------|-------------------------|
| **Dimensão** | Categoriza os dados; é o "por quê" da análise | Diferenciar dimensão de métrica, escolher corretamente | Erro ao usar métrica onde deve ser dimensão | Gráficos sem sentido ou agregação incorreta |
| **Métrica** | Quantifica; não agrupa sozinha; usa Count/Sum/Avg | Definir métrica adequada, trocar Record Count por Number Sold | Record Count vs Number Sold na tabela | Métricas erradas, decisões erradas |
| **Limpeza e tipagem única** | Um dado por célula; sem células vazias | TP2 pede higienização e formato tabular | Falha ao importar planilhas mal formatadas | Relatório não carrega ou exibe dados incorretos |
| **Google Sheets como fonte** | Planilha na nuvem → Looker Studio via conector | TP2 usa Google Sheets + aba "Menu" | Esquecer de escolher a aba correta | Dados vazios ou de aba errada |
| **Scorecard/Visão Geral** | Mostra total agregado sem dimensão | Criar scorecard com métrica (ex.: Number Sold) | Confundir com gráfico que tem dimensão | Não atende rubrica do TP2 |
| **Perguntas do relatório** | Objetivo, informações, nível de conhecimento, apresentação | Entender por que o relatório existe | Dashboards desalinhados com negócio | Trabalho rejeitado ou refeito |
| **Looker Studio vs Power BI/Tableau** | Conceitos de métrica/dimensão são portáveis | Analogia entre ferramentas | Trocar de ferramenta no mercado | Dificuldade de migração |

---

## 5 Conceitos Essenciais — Explicação Operacional

### 5.1 Dimensão

**Definição operacional:** Campo que categoriza, descreve ou agrupa os dados. Representa o "por quê" da análise — por produto, por tipo, por equipe, por país.

**Quando usar:** Sempre que precisar segmentar ou comparar valores (ex.: vendas por produto, usuários por país).

**Quando NÃO usar:** Em scorecard/visão geral que mostra apenas um total agregado.

**Como reconhecer:** Geralmente texto, categorias, nomes. Ex.: Product Name, Product Type, Flavor, UF, País.

**Relação com outros:** As métricas são calculadas "sobre" as dimensões. Ex.: Number Sold (métrica) por Product Name (dimensão).

❌ **Erro comum:** Usar Number Sold como dimensão — é número e deve ser métrica.

⚠️ **Pegadinha de prova:** "Qual campo é dimensão?" — verificar se categoriza (sim) ou quantifica (não).

### 5.2 Métrica

**Definição operacional:** Campo numérico que quantifica os itens. Não agrupa por si só; é agregada (Count, Sum, Avg) em cima das dimensões.

**Quando usar:** Para mostrar quantidades — vendas, usuários, erros, temperatura, pontos.

**Quando NÃO usar:** Como dimensão (para categorizar).

**Como reconhecer:** Valores numéricos. Ex.: Number Sold, temperatura, pontos no jogo, receita.

- **Count:** conta ocorrências
- **Sum:** soma valores (ex.: vendas por UF)
- **Avg:** média aritmética

❌ **Erro comum:** Manter Record Count na tabela quando o enunciado pede Number Sold — Record Count conta linhas; Number Sold é a métrica de negócio.

⚠️ **Pegadinha de prova:** Diferenciar Count (contagem de registros) de Sum (soma de valores).

🛠️ **Aplicação mínima correta:** Em Propriedades da tabela, trocar Record Count por Number Sold arrastando o campo ou selecionando na lista.

### 5.3 Agregação de Métricas

Métricas podem ser mais sofisticadas: comparação entre períodos (semana vs semana, mês vs mês), tendências (crescimento/queda), vendas por dia. O Looker Studio permite escolher a agregação (Count, Sum, Avg) conforme o tipo de campo.

### 5.4 Perguntas Orientadoras do Relatório

1. **Objetivo do relatório para o negócio?** Ex.: aumentar vendas, monitorar erros.
2. **Quais informações são necessárias?** Colunas/campos que devem aparecer no dashboard.
3. **Nível de conhecimento de dados do público?** Ajustar complexidade e legendas.
4. **Melhor forma de apresentar?** Um painel principal, painéis adicionais, drill-down.

⚠️ **Diferenciação:** "Nível de conhecimento de dados" = familiaridade com indicadores do negócio (não com ferramentas como Excel).

---

## 6 Procedimento / Execução

### Passo 1 — Preparar dados no Google Sheets

1. Acessar Google Sheets (docs.google.com/spreadsheets).
2. Clicar em **Planilha em branco**.
3. **Arquivo → Importar** → guia **Fazer upload** → **Procurar**.
4. Selecionar o arquivo DS - Coffee Shop.xlsx (ou equivalente) e **Importar dados**.
5. Renomear a planilha para "DS - Coffee Shop".
6. Verificar: um dado por célula, sem células vazias, tipagem coerente.

### Passo 2 — Criar relatório no Looker Studio

1. Acessar lookerstudio.google.com.
2. Clicar em **Relatório em branco**.
3. Em **Adicionar dados ao relatório**, escolher **Google Planilhas**.
4. Autorizar se solicitado.
5. Em **TODOS OS ITENS**, selecionar "DS - Coffee Shop" e **Adicionar**.
6. Em **You are about to add data to this Report**, clicar **ADICIONAR AO RELATÓRIO**.
7. Clicar **Layout de formato livre**.

### Passo 3 — Configurar tabela

1. Com a tabela padrão selecionada, em **Propriedades da Tabela**:
   - Dimensão: Product Name (ou manter)
   - Métrica: trocar **Record Count** por **Number Sold**.

### Passo 4 — Criar gráfico de pizza (Product Name)

1. **Adicionar um gráfico** → **Gráfico de pizza**.
2. Dimensão: Product Name.
3. Métrica: Number Sold.

### Passo 5 — Criar gráfico de pizza (Product Type)

1. Copiar o gráfico de pizza (Ctrl+C, Ctrl+V).
2. Arrastar o gráfico duplicado para posicionar.
3. Em **Propriedades do gráfico de pizza**, trocar Product Name por **Product Type**.
4. Manter métrica: Number Sold.

### Passo 6 — Criar Scorecard/Visão Geral

1. **Adicionar um gráfico** → **Visão geral**.
2. Métrica: Number Sold (sem dimensão).
3. Posicionar no relatório.

### Passo 7 — Salvar e compartilhar

1. Renomear relatório (ex.: "Segundo Relatório Looker Studio").
2. **Compartilhar** → **Gerar link do relatório**.
3. Configurações do link: **Público** (qualquer pessoa com o link) para o monitor/professor acessar.

❌ **Erro típico:** Usar aba errada do Google Sheets (TP2 exige aba "Menu").

❌ **Erro típico:** Link restrito — monitor não consegue abrir; deve estar "Público".

📏 **Evidência de acerto:** Tabela com Product Name + Number Sold; dois gráficos de pizza (um por Product Name, outro por Product Type); scorecard com total de vendas; link público funcionando.

---

## 7 Exemplos Relevantes

### Exemplo 1 — Hermann's Cake and Coffee Shop

- **Objetivo:** Aumentar vendas.
- **Fluxo atual:** Hermann envia dados ao contador, recebe relatório ao fim da semana, só então decide compras.
- **Solução:** Dashboard no Looker Studio para acesso direto aos dados.
- **O que o exemplo fixa:** Relatório deve atender ao objetivo de negócio e ao nível de conhecimento do usuário.

### Exemplo 2 — Produtos da cafeteria

- Product Name (dimensão): Lunch Bun, Banana Loaf, Lavender Cupcake, etc.
- Product Type (dimensão): Cupcake, Loaf, Cake, Cookie.
- Number Sold (métrica): quantidades vendidas.
- **O que fixa:** Dimensão categoriza; métrica quantifica.

### Exemplo 3 — Sum vs Count

- **Count:** conta quantas linhas têm valor (ex.: quantos registros de venda).
- **Sum:** soma os valores de uma coluna (ex.: soma de Number Sold por Product Type).
- **O que fixa:** Count e Sum não são intercambiáveis.

---

## 8 Diferenças e Confusões Comuns

| Confusão | Distinção |
|----------|-----------|
| **Dimensão vs Métrica** | Dimensão = categoriza (texto, tipo, nome). Métrica = número que quantifica. |
| **Record Count vs Number Sold** | Record Count = contagem de linhas. Number Sold = métrica de negócio (vendas por produto). |
| **Conhecimento de dados** | É sobre indicadores do negócio, não sobre ferramentas (Excel, Looker Studio). |
| **Scorecard vs gráfico** | Scorecard não tem dimensão; mostra um único valor agregado. Gráfico de pizza tem dimensão + métrica. |
| **Looker Studio vs Google Data Studio** | Mesmo produto: Google Data Studio (2016) → Looker Studio (out/2022). |

---

## 9 Como Cai em Prova

- **Formato:** questões objetivas ou discursivas sobre dimensão/métrica, escolha de campo para gráfico ou tabela.
- **Tipo de enunciado:** "Qual campo deve ser dimensão no gráfico de pizza?"; "Qual a diferença entre Record Count e Number Sold?"
- **Erro cobrado:** Trocar dimensão por métrica ou vice-versa.
- **Armadilha:** Confundir Count com Sum ou usar Record Count quando o pedido é Number Sold.

---

## 10 Pontos de Atenção

1. Um dado por célula; evitar células mescladas ou múltiplos valores.
2. Garantir que a planilha tenha aba "Menu" para o TP2.
3. Link do relatório deve ser **Público** para correção.
4. TP2: usar Number Sold como métrica em tabela, gráficos e scorecard.
5. Não usar IA generativa nos TPs — constitui má conduta acadêmica.

---

## 11 Checklist de Domínio

- [ ] Sei definir dimensão e métrica.
- [ ] Sei explicar a diferença entre Record Count e Number Sold.
- [ ] Sei reconhecer dimensão e métrica em um conjunto de dados.
- [ ] Sei aplicar: importar Excel no Google Sheets e conectar ao Looker Studio.
- [ ] Sei evitar: trocar dimensão por métrica; deixar link restrito.

---

## 12 Auto-Teste

1. No caso Hermann's: qual é a dimensão e qual é a métrica no gráfico de pizza por tipo de produto?
2. Por que o scorecard não precisa de dimensão?
3. O que fazer se a tabela vier com Record Count e o enunciado pedir Number Sold?
4. Qual o objetivo das quatro perguntas orientadoras antes de montar um relatório?
5. O que significa "nível de conhecimento de dados" no contexto de dashboards?

---

## 13 Resumo Estratégico Consolidado

- **Dimensão:** categoriza (Product Name, Product Type).
- **Métrica:** quantifica (Number Sold); agregações: Count, Sum, Avg.
- **Record Count ≠ Number Sold** — trocar na tabela quando o negócio exige vendas.
- **Google Sheets → Looker Studio:** Importar Excel, conectar, escolher aba correta.
- **TP2:** Tabela + 2 gráficos de pizza (Product Name, Product Type) + Scorecard; métrica Number Sold; link público.

---

## 14 Resumo em 5 Linhas

Dimensão categoriza; métrica quantifica. Use Number Sold (não Record Count) quando o foco for vendas. Importe o Excel no Google Sheets e conecte ao Looker Studio; selecione a aba "Menu". Crie tabela, dois gráficos de pizza (Product Name e Product Type) e scorecard. Compartilhe com link público.

---

## 15 Palavras-Chave

Looker Studio, Google Sheets, Dimensão, Métrica, Record Count, Number Sold, Count, Sum, Avg, Scorecard, Visão Geral, Product Name, Product Type, Hermann's, TP1, TP2, Google Planilhas, conector, agregação.

---


