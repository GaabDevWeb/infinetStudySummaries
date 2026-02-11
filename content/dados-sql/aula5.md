DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 03/02/2026 
TEMA DA AULA: Dados e SQL  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1h5PEVjen8Rj5glayzujUZDz805rkMxjM/view


## 1. Tema e Escopo

- **Tema**: Visualização e análise de dados com Looker Studio (Google Data Studio) a partir de pesquisas online e dados de conta bancária.
- **Problema que resolve**: Dados dispersos em formulários, arquivos CSV e sistemas que não geram insight nem apoio claro à decisão (ex.: pesquisas de clientes, extrato bancário).
- **Para que serve**: Tornar o aluno capaz de:
  - Entender o papel do cidadão de dados.
  - Desenhar/coletar dados de uma pesquisa online.
  - Limpar e preparar dados (incluindo texto livre).
  - Usar métricas, dimensões e agregações no Looker Studio.
  - Projetar dashboards simples (caso pesquisa de viagens e conta bancária de Chris Cooper).
- **Inclui**:
  - Conceito de cidadão de dados / cientista de dados cidadão.
  - Processo de extração de valor dos dados.
  - Coleta de dados via SurveyMonkey e e‑mail marketing.
  - Limpeza de dados (nulos, lixo, texto aberto, normalização).
  - Noções de BigQuery, data warehouse e serverless (como infraestrutura para escala).
  - Conceitos de métricas, dimensões e agregações.
  - Boas práticas de design de dashboards no Looker Studio.
  - Exemplo prático com `Chapter2-AccountData.csv`.
- **Não inclui**:
  - Tutorial completo de todas as opções de interface do Looker Studio (apenas as usadas na aula).
  - Implementação detalhada de BigQuery (apenas visão conceitual).
  - Guia de SQL avançado (o foco é visualização, não consultas complexas).

## 2. Contexto na Disciplina

- **Classificação da aula**: híbrida (conceitual + técnica + metodológica).
- **Onde entra**:
  - Disciplina de Fundamentos e Orçamento de Dados / Dados & SQL.
  - Continuação das aulas anteriores sobre cidadão de dados, visualização e métricas/dimensões.
- **Pré‑requisitos**:
  - Noções básicas de planilhas (Google Sheets/Excel).
  - Conceito de dado vs informação.
  - Conhecimento introdutório de dashboards (Looker Studio, Power BI ou similares).
- **Dependências futuras**:
  - Construção de relatórios mais complexos no Looker Studio.
  - Integração com fontes de dados maiores (BigQuery, bases relacionais).
  - Uso de SQL mais avançado em contextos de BI e ciência de dados.

## 3. Visão Conceitual Geral

O ponto de partida é o conceito de **cidadão de dados**: pessoas em qualquer área que têm acesso a dados, ferramentas simples de análise e interesse em extrair valor prático desses dados. Em vez de depender só de cientistas de dados ou TI, linhas de frente do negócio passam a coletar, transformar, analisar e visualizar dados. A aula foca em dois casos: (1) uma pesquisa online de uma empresa de viagens, enviada a 10.000 clientes e respondida por ~5.000, e (2) dados de uma conta bancária pessoal (`Chapter2-AccountData.csv`) que serão explorados num dashboard de finanças pessoais (Chris Cooper). Em ambos, o fluxo é o mesmo: coletar (SurveyMonkey, formulários, CSV), limpar (remover nulos, lixo, padronizar texto), transformar em informação (tabelas, métricas, dimensões), visualizar (gráficos, tabelas, mapas de calor) e comunicar insights (dashboards com filtros e resumo). BigQuery e arquitetura serverless aparecem como infraestrutura para levar isso a escalas de gigabytes/terabytes/petabytes, reforçando a importância de boas práticas desde conjuntos pequenos.

## 4. Ideias‑Chave (máx. 7)

1. **Cidadão de dados / cientista de dados cidadão**: qualquer profissional que consegue acessar dados, usar ferramentas simples e derivar valor prático para si, para o negócio ou para a comunidade.
2. **Cadeia de valor dos dados**: coletar → transformar em informação → analisar → comunicar → agir; sem análise e comunicação, dados não têm valor.
3. **Pesquisas online estruturadas (SurveyMonkey)**: perguntar certo (perguntas fechadas + campo aberto) define a qualidade e o tipo de análise possível depois.
4. **Limpeza e preparação de dados**: remover respostas lixo, tratar nulos, outliers e texto livre é obrigatório antes de qualquer dashboard confiável.
5. **Métricas, dimensões e agregações**: todo gráfico no Looker Studio é combinação de dimensões (categorias) com métricas numéricas, agregadas (soma, média, contagem etc.).
6. **Design de dashboards**: cabeçalho com identidade visual, rodapé com informações de contexto, visão geral no topo e detalhes abaixo, uso correto de gráficos (rosca, pizza, barras, mapa de calor, tabela).
7. **Exemplo da conta bancária (Chris Cooper)**: dados transacionais em CSV podem ser transformados em visão macro (saldo médio, máximo, mínimo, série temporal) e detalhes (tabela de transações), controlados por filtros de data.

## 5. Conceitos Essenciais — Explicação Operacional

### 5.1 Cidadão de dados / cientista de dados cidadão

- **Definição operacional**: pessoa que:
  - Tem **acesso ao dado** em formato analisável (planilhas, CSV, bancos, APIs).
  - Tem **acesso a ferramentas** de análise/visualização (Looker Studio, Power BI, planilhas).
  - Tem **interesse** em entender e melhorar processos, decisões ou resultados.
  - Usa dados para gerar **insights** acionáveis, não só relatórios estáticos.
- **Quando usar o conceito**:
  - Ao justificar por que a disciplina foca em ferramentas “low‑code” como Looker Studio.
  - Ao planejar relatórios que serão mantidos por usuários de negócio, não só TI.
- **Quando NÃO usar**:
  - Para exigir que todos virem cientistas de dados plenos.
  - Para encobrir falta de fundamentos (estatística, modelagem) quando forem necessários.
- **Como reconhecer**:
  - Profissional que coleta dados da própria área, constrói dashboards simples e toma decisões com base neles (ex.: gerente de cafeteria, analista de marketing, gestor financeiro pessoal).
- **Relação com outros conceitos**:
  - Conecta‑se diretamente ao **processo de extração de valor** (5.2).
  - Usa ferramentas de visualização (Looker Studio, Tableau, Power BI).
- ❌ **Erro comum**: achar que apenas quem sabe programar ou fazer modelos complexos é “de dados”; a aula reforça uma versão simplificada e localizada do cientista de dados.
- 🧪 **Como testar entendimento**: conseguir explicar, em 2–3 frases, a diferença entre um “cientista de dados” clássico e um “cidadão de dados”, citando um exemplo da própria realidade.

### 5.2 Processo de extração de valor dos dados

- **Definição operacional**: pipeline em 5 passos:
  1. **Coletar dados** (formulários, sistemas, CSV, APIs).
  2. **Transformar dados em informação** (limpeza, enriquecimento, estruturação).
  3. **Analisar informações** para obter insights (padrões, comparações, tendências).
  4. **Comunicar insights** (dashboards, relatórios, apresentações).
  5. **Tomar atitudes** baseadas nesses insights (mudança de estratégia, ajustes operacionais).
- **Quando usar**:
  - Ao planejar qualquer projeto de visualização ou BI, incluindo os exemplos da aula.
- **Quando NÃO usar**:
  - Para justificar visualização sem clareza de decisão ou ação esperada.
- **Como reconhecer**:
  - Existem decisões concretas associadas ao relatório (ex.: ajustar site de viagem, rever pacotes, controlar gastos pessoais).
- **Relação com outros conceitos**:
  - A coleta pode usar ferramentas como **SurveyMonkey**.
  - A análise pode ser escalada com **BigQuery** e outras infraestruturas.
  - A comunicação se materializa em **dashboards Looker Studio**.
- ❌ **Erro comum**: parar no passo “coletar dados” (planilhas enormes, extratos brutos) sem transformar/analisar/comunicar.
- ⚠️ **Pegadinha de prova**: enunciados que tratam visualização como “primeiro passo”; na aula, ela é o final do ciclo.
- 🧪 **Como testar entendimento**: dado um caso (ex.: pesquisa de viagens), listar explicitamente o que é cada um dos 5 passos.

### 5.3 Coleta de dados via pesquisas online (SurveyMonkey) e amostragem

- **Definição operacional**:
  - **Ferramentas** como SurveyMonkey criam formulários/pesquisas online, com diferentes planos (gratuito com limite de respostas, planos individuais, planos de equipe, enterprise).
  - Permitem enviar convites (ex.: 10.000 e‑mails) e capturar respostas estruturadas (múltipla escolha, escala) e texto livre.
- **Quando usar**:
  - Ao precisar entender perfil de clientes, comportamento, percepção de site/serviço.
  - Antes de montar dashboards, para garantir dados coletados de forma consistente.
- **Quando NÃO usar**:
  - Quando os dados já existem em sistemas transacionais bem estruturados (ERPs, CRMs), evitando duplicidade de coleta.
- **Como reconhecer**:
  - Perguntas como: gênero, faixa etária, faixa salarial, estado civil, cargo, número de filhos/netos.
  - Perguntas sobre **uso do serviço** (frequência de férias, motivos da viagem, avaliação do site/serviço) e **texto livre** para “faltou algo no site?”.
- **Relação com outros conceitos**:
  - Liga‑se à parte de **limpeza de dados** (5.4), já que respostas abertas trazem variações (“Yes”, “yes”, “YES” etc.).
  - Usa **taxa de resposta** como indicador: 10.000 e‑mails → 5.000 respostas (50%) é considerado alto, comparado a malas diretas físicas (3–5%).
- ❌ **Erro comum**: desenhar só perguntas abertas, o que dificulta quantificação e visualização.
- ⚠️ **Pegadinha de prova**: questões que sugerem que texto livre é sempre melhor que múltipla escolha; na prática, a aula mostra a necessidade de equilíbrio.
- 🧪 **Como testar entendimento**: conseguir redesenhar 3 perguntas da pesquisa de viagens em versões fechadas (opções definidas) e explicar o impacto na análise.

### 5.4 Limpeza e preparação de dados (incluindo texto livre)

- **Definição operacional**:
  - Conjunto de operações para tornar os dados **confiáveis e utilizáveis**:
    - Remover respostas lixo de quem “não quer ser incomodado”.
    - Tratar valores nulos/brancos (excluir quando inviabilizam análise).
    - Normalizar texto (casos como “Yes”, “yes”, “YES”; “N/A”, “NA”, “na”).
    - Detectar e tratar **outliers absurdos** (ex.: ano “7200” em campo de data).
    - Considerar a possibilidade de **homônimos** (nomes idênticos para pessoas diferentes).
- **Quando usar**:
  - Sempre antes de conectar dados ao Looker Studio ou outras ferramentas.
  - Ao importar CSVs (como `Chapter2-AccountData.csv`) ou respostas exportadas do SurveyMonkey.
- **Quando NÃO usar**:
  - Nunca pular limpeza; no máximo, registrar claramente que determinada limpeza não foi feita e quais impactos isso traz (não coberto na aula).
- **Como reconhecer**:
  - Presença de registros com campos vazios críticos, texto claramente ofensivo ou respostas padronizadas sem sentido.
  - Campos de texto livre com muitas variações para mesma intenção.
- **Relação com outros conceitos**:
  - BigQuery é citado como DW escalável para grandes volumes; mas mesmo em planilhas, limpeza é crítica.
  - Looker Studio dependerá dessa etapa para mostrar gráficos coerentes.
- ❌ **Erro comum**:
  - Tratar cada variante (“Yes”, “yes”) como categoria distinta, distorcendo contagens.
  - Ignorar nulos achando que “não impactam tanto”.
- ⚠️ **Pegadinha de prova**: alternativas que sugerem usar apenas nome completo como identificador único, ignorando homônimos (a aula cita explicitamente limitações dessa suposição).
- 🧪 **Como testar entendimento**: dado um trecho de tabela com “Yes/yes/YES/Na/NA/N/A/null”, propor regra de padronização e quais linhas remover.

### 5.5 Métricas, dimensões e agregações no Looker Studio

- **Definição operacional**:
  - **Dimensões**: campos categóricos (nome do produto, país, tipo de dispositivo, faixa etária, gênero, categoria de despesa).
  - **Métricas**: campos numéricos que avaliam dimensões (número de vendas, valor de transação, saldo, contagem de registros).
  - **Agregação**: função usada sobre a métrica (SUM, COUNT, AVG, MIN, MAX) para produzir um único valor por combinação de dimensões.
- **Quando usar**:
  - Ao configurar qualquer gráfico no Looker Studio:
    - Ex.: gráfico de rosca de gênero: dimensão = gênero; métrica = contagem de respostas.
    - Ex.: gráfico de pizza por tipo de produto (Hermann’s): dimensão = `Product Type`; métrica = `Number Sold`.
    - Ex.: dashboard da conta: dimensão = data; métrica = saldo (com agregação apropriada, normalmente último saldo do dia).
- **Quando NÃO usar**:
  - Não confundir métricas com dimensões (ex.: tratar “R$ 10.000,00” como texto).
  - Não usar métrica sem pensar na agregação correta (média vs soma vs contagem).
- **Como reconhecer**:
  - No painel de propriedades do gráfico no Looker Studio, campos em **Dimensão** e **Métrica**.
- **Relação com outros conceitos**:
  - Se conecta às discussões de **relatórios de Hermann’s Cake and Coffee Shop** (bolos vendidos por produto/tipo).
  - Fundamenta gráficos usados na pesquisa de viagens e no caso da conta bancária.
- ❌ **Erro comum**:
  - Deixar a métrica padrão `Record Count` em vez de trocar para `Number Sold` (no exemplo da confeitaria).
  - Importar CSV e não converter campos numéricos (transações, saldo) de texto para número.
- ⚠️ **Pegadinha de prova**: perguntas que trocam papéis (“idade” como métrica e “total de vendas” como dimensão).
- 🧪 **Como testar entendimento**: para 3 gráficos diferentes (pizza por produto, série temporal de saldo, mapa de calor idade × frequência de compra), apontar qual é a dimensão, qual é a métrica e qual agregação faz sentido.

### 5.6 Design e interação de dashboards (Looker Studio, incluindo caso da conta bancária)

- **Definição operacional**:
  - Conjunto de escolhas visuais e interativas que tornam o dashboard **legível, consistente e acionável**:
    - Cabeçalho com logo e título (ex.: logo “CC” + “Chris Cooper checking account”).
    - Tema de cores alinhado à identidade visual da empresa.
    - Rodapé com contexto (data da última atualização, contato, política de privacidade).
    - Organização: visão geral no topo (scorecards) e detalhes abaixo (gráficos, tabelas).
    - Controles de filtro (ex.: seletor de intervalo de datas) que recalculam todos os componentes.
- **Quando usar**:
  - Na hora de planejar qualquer relatório em Looker Studio (pesquisa de viagens, cafeteria, conta bancária).
- **Quando NÃO usar**:
  - Não usar gráficos complexos sem necessidade (ex.: muitos gráficos diferentes para mesma métrica).
  - Não omitir contexto como períodos de dados (intervalo de datas não fica claro).
- **Como reconhecer (casos da aula)**:
  - **Pesquisa de viagens**:
    - Gráficos de rosca para distribuição de gênero e faixas etárias.
    - Gráfico de barras empilhadas para idade × estado civil.
    - Tabela dinâmica/heatmap para frequência de compra × idade (intensidade da cor = percentual).
    - Pie/treemap para avaliação de descrições de produto/site.
  - **Conta bancária (Chris Cooper)**:
    - Scorecards no topo: saldo médio, saldo máximo, saldo mínimo.
    - Série temporal do saldo ao longo do tempo.
    - Tabela de transações (data, descrição, categoria, valor da transação, saldo).
    - Controle de data que, ao ser alterado, atualiza todos os gráficos/tabelas.
- **Relação com outros conceitos**:
  - Ligado a métricas/dimensões (5.5) e à etapa de **comunicar insights** (5.2).
  - Usa dados do CSV `Chapter2-AccountData.csv` como fonte principal.
- ❌ **Erro comum**:
  - Colocar muito texto e poucos gráficos ou gráficos sem legenda clara.
  - Não separar visão geral (KPI) de detalhes (tabela), tornando o painel confuso.
- ⚠️ **Pegadinha de prova**: alternativas que sugerem abusar de layouts com muitas colunas, cores e imagens; a aula reforça simplicidade e clareza.
- 🧪 **Como testar entendimento**: conseguir desenhar, em papel, o layout básico do dashboard de Chris Cooper (cabeçalho, scorecards, série temporal, tabela, filtro de data).

> **Lacunas**: o passo a passo exato de cada clique na interface do Looker Studio para montar todos os gráficos do dashboard de Chris Cooper não está integralmente descrito na transcrição; a aula mostra a estrutura geral, exemplos de gráficos e como o filtro de data se aplica, mas detalhes finos de layout não são cobertos.

## 6. Procedimento / Execução (se existir)

### 6.1 Construir pesquisa online de clientes (empresa de viagens)

- **Passo 1 – Definir objetivo de negócio**
  - Ex.: entender quem são os clientes, como usam o site/serviço e o que falta na experiência.
- **Passo 2 – Escolher ferramenta e plano**
  - Criar conta no SurveyMonkey (ou similar).
  - Decidir se plano gratuito (poucas respostas) é suficiente ou se precisa de plano pago.
- **Passo 3 – Desenhar questionário**
  - Bloco 1 (perfil do cliente): gênero, faixa etária, faixa salarial, estado civil, filhos/netos, cargo.
  - Bloco 2 (uso de serviço): frequência de férias, motivos de viagem, canal preferido de contato.
  - Bloco 3 (avaliação de site/serviço): escalas (sim/não/em parte; muito positivo, neutro, negativo).
  - Bloco 4 (texto livre): “O que faltou no site?”.
- **Passo 4 – Enviar e coletar**
  - Exportar lista de e‑mails (10.000 clientes).
  - Enviar convites via SurveyMonkey.
  - Acompanhar taxa de resposta (objetivo: pelo menos alguns milhares; 50% foi o exemplo da aula).
- **Erro típico**:
  - Perguntas vagas ou todas abertas, impossibilitando agregação.
- **Sinal de execução correta**:
  - Arquivo de respostas com colunas bem definidas e tipos coerentes (categorias claras + poucos campos de texto livre).

### 6.2 Limpar dados da pesquisa

- **Passo 1 – Remover lixo**
  - Filtrar respostas obviamente ofensivas ou fora de contexto (“foobar”, “asdf”, palavrões).
  - Excluir respostas vazias (somente clique em enviar).
- **Passo 2 – Tratar nulos**
  - Decidir se campos críticos vazios (ex.: idade, avaliação de serviço) levam à exclusão da linha ou tratamento específico.
- **Passo 3 – Normalizar texto**
  - Converter tudo para mesma capitalização (ex.: `UPPER()` ou `LOWER()` nas planilhas).
  - Mapear sinônimos e abreviações para categorias únicas (Yes/yes/YES → “Yes”; NA/N/A → “No Answer”).
- **Passo 4 – Tratar outliers óbvios**
  - Verificar datas e idades fora de intervalo plausível; se for claro erro de digitação, corrigir, caso contrário, excluir.
- **Erro típico**:
  - Esquecer de registrar regras de limpeza (depois ninguém sabe por que certos registros sumiram).
- **Sinal de execução correta**:
  - Distribuições (gráficos de barras/rosca) sem categorias espúrias (“Yess”, “YEs”, “yeS” etc.).

### 6.3 Montar relatório básico no Looker Studio para a conta bancária

> Observação: os passos abaixo derivam do roteiro da aula e do arquivo `Chapter2-AccountData.csv`. Detalhes finos de interface podem variar com versões do Looker Studio.

- **Passo 1 – Preparar a fonte de dados**
  - Fazer upload de `Chapter2-AccountData.csv` para o Google Drive.
  - Importar o CSV para Google Sheets (opção “Arquivo → Importar → Upload → Importar dados”).
  - Verificar se colunas numéricas (`Transaction Amount`, `Balance`) estão no formato número.
- **Passo 2 – Criar relatório em branco**
  - Acessar `lookerstudio.google.com`.
  - Criar “Relatório em branco”.
  - Adicionar dados → escolher “Google Planilhas” → selecionar planilha da conta → “Adicionar ao relatório”.
- **Passo 3 – Criar scorecards (visão geral)**
  - Scorecard 1: métrica = saldo (`Balance`), agregação = média (Average) → saldo médio.
  - Scorecard 2: mesma métrica, agregação = máximo (Max) → saldo máximo.
  - Scorecard 3: mesma métrica, agregação = mínimo (Min) → saldo mínimo.
- **Passo 4 – Criar série temporal**
  - Gráfico de série temporal.
  - Dimensão = `Date`.
  - Métrica = `Balance` (agregação apropriada, tipicamente última observação por dia ou média).
- **Passo 5 – Criar tabela de transações**
  - Tabela com dimensões `Date`, `Description`, `Category` e métrica `Transaction Amount` + `Balance`.
  - Ordenar por data crescente ou decrescente, conforme necessidade.
- **Passo 6 – Adicionar filtro de data**
  - Inserir controle de intervalo de datas.
  - Configurar para usar o campo `Date` da fonte.
  - Verificar se todos os gráficos (scorecards, série, tabela) reagirão ao filtro.
- **Erro típico**:
  - Deixar datas como texto; o filtro de data não funciona ou dá resultados errados.
  - Não vincular o controle de data a todos os gráficos (alguns ficam “parados”).
- **Sinal de execução correta**:
  - Alterar o intervalo de datas altera automaticamente KPIs, gráficos e tabela, mantendo coerência.

## 7. Exemplos Relevantes

- **Pesquisa de viagens – perfil de cliente**:
  - Gráfico de rosca mostrando que X% são do gênero feminino e Y% masculino.
  - Outro gráfico de rosca com faixas etárias (18–24, 25–34, 35–44, 45–54, 55+).
  - Fixação: mostra como dimensões categóricas (gênero, faixa etária) se combinam com contagem como métrica.
- **Pesquisa de viagens – comportamento**:
  - Tabela dinâmica em formato de mapa de calor (age × frequência de compra).
  - Células em azul mais intenso indicam combinações mais frequentes (ex.: 55+ com 5 compras).
  - Fixação: ilustra uso de heatmaps para destacar “pontos quentes” nos dados.
- **Texto livre “faltou algo na descrição?”**:
  - Tabela com contagem de respostas por texto exato (“Yes”, “yes”, “na”, “NA”, “Nothing”).
  - Fixação: evidencia por que é necessário normalizar e agrupar variações.
- **Exemplo de BigQuery**:
  - Descrito como data warehouse na nuvem, serverless, capaz de trabalhar com **petabytes** de dados usando SQL ANSI.
  - Fixação: reforça diferença entre trabalhar com planilhas (milhares de linhas) e infra de larga escala.
- **Dashboard de conta bancária (Chris Cooper)**:
  - Scorecards com saldo médio, máximo e mínimo.
  - Série temporal mostrando evolução de saldo ao longo de 2017 (exemplo).
  - Tabela de transações com colunas `Transaction Number`, `Date`, `Description`, `Category`, `Transaction Amount`, `Balance`, `Temp 1`.
  - Fixação: demonstra como transformar um extrato CSV em visão executiva e detalhada.

Se houver slides adicionais de Hermann’s Cake and Coffee Shop, eles reforçam o uso de métricas/dimensões, mas o fluxo técnico já está contemplado nas anotações textuais; detalhes visuais específicos não foram incluídos pois não constam nas fontes textuais.

## 8. Diferenças e Confusões Comuns

- **Métrica vs dimensão**:
  - Dimensão: “gênero”, “faixa etária”, “categoria de despesa”.
  - Métrica: “contagem de respostas”, “valor de transação”, “número de bolos vendidos”.
  - Confusão comum: tratar métricas como rótulos (texto) ou tentar contar dimensões sem agregação clara.
- **Dados brutos vs informação**:
  - Dados: linhas de CSV, respostas soltas da pesquisa.
  - Informação: tabelas limpas, métricas agregadas, comparações entre grupos.
  - Confusão comum: achar que “ter o CSV” já é suficiente.
- **Pesquisa com perguntas abertas vs fechadas**:
  - Perguntas fechadas facilitam gráficos e contagens.
  - Texto livre exige NLP, text mining ou pelo menos categorização manual.
  - Confusão comum: usar só texto livre imaginando que “IA resolve tudo” sem trabalho de preparação.
- **Looker Studio vs ferramentas como SurveyMonkey**:
  - SurveyMonkey: coleta e exporta dados.
  - Looker Studio: conecta‑se a fontes de dados e gera visualizações.
  - Confusão comum: esperar que Looker Studio tenha nativamente formulários/pesquisas.

## 9. Como Cai em Prova

Possíveis formatos de questão com base na aula:

- **Conceitual – cidadão de dados**:
  - Pergunta: “Qual alternativa descreve corretamente o papel do cidadão de dados na organização?”.
  - Armadilha: respostas que exigem conhecimentos profundos de estatística/programação (focando cientista de dados tradicional).
- **Processo de valor dos dados**:
  - Pergunta: “Ordene as etapas do processo de extração de valor dos dados”.
  - Armadilha: inverter ordem (colocar visualização antes de coleta ou ação antes de comunicação).
- **Métricas e dimensões**:
  - Pergunta: “Em um gráfico de pizza que mostra participação de cada produto nas vendas, qual é a dimensão e qual é a métrica?”.
  - Armadilha: trocar papéis (produto como métrica, quantidade como dimensão).
- **Limpeza de dados e texto livre**:
  - Pergunta com tabela contendo “Yes”, “yes”, “YES”, “na”, “NA” etc., pedindo:
    - “Qual procedimento é mais adequado para preparar esses dados para análise?”.
  - Armadilha: respostas que sugerem deixar cada valor como categoria distinta.
- **Dashboard de conta bancária**:
  - Questão prática ou discursiva pedindo para descrever:
    - Quais componentes mínimos um dashboard de conta deve ter (KPI, série temporal, tabela, filtro de datas).
  - Critério de correção: presença de elementos que ligam visão macro e detalhes, e uso de filtros.

Em avaliações práticas, é provável que seja pedido:

- Criar ou esboçar um relatório simples no Looker Studio, com:
  - Fonte de dados planilha/CSV.
  - Pelo menos um gráfico e um scorecard.
  - Uso de dimensões/métricas corretas.

## 10. Pontos de Atenção

- Não confiar em dados antes de verificar nulos, lixo e outliers (especialmente em pesquisas online).
- Não tratar campos numéricos como texto ao importar CSVs (afeta filtros, agregações e scorecards).
- Não usar apenas texto livre em pesquisas quando precisar de análise quantitativa estruturada.
- Não montar dashboards sem cabeçalho claro, sem identificação de período e sem filtros adequados.
- Não confundir métricas e dimensões ao configurar gráficos no Looker Studio.
- Não ignorar o público‑alvo do relatório (nível de letramento em dados influencia o design).

## 11. Checklist de Domínio

Você domina o conteúdo se consegue:

- [ ] Definir o que é um cidadão de dados / cientista de dados cidadão.
- [ ] Explicar as 5 etapas do processo de extração de valor dos dados, com exemplos da pesquisa de viagens ou da conta bancária.
- [ ] Descrever como montar uma pesquisa online básica e quais tipos de perguntas facilitam a análise posterior.
- [ ] Executar (ao menos em planilha) um processo de limpeza simples: remover lixo, tratar nulos, normalizar texto.
- [ ] Diferenciar métricas e dimensões e escolher agregações apropriadas (SUM, COUNT, AVG, MIN, MAX).
- [ ] Esboçar o layout de um dashboard simples no Looker Studio com scorecards, série temporal, tabela e filtro de data.
- [ ] Apontar pelo menos 2 erros comuns de design/limpeza e como evitá‑los.

## 12. Auto‑Teste

1. **Cidadão de dados**  
   Descreva um exemplo da sua realidade (trabalho, estudos ou vida pessoal) em que você poderia atuar como cidadão de dados, especificando:
   - Qual dado coletaria.
   - Com que ferramenta analisaria.
   - Que tipo de decisão tomaria a partir do resultado.

2. **Pesquisa de viagens**  
   Reescreva, em formato de perguntas fechadas, as seguintes ideias:
   - Frequência de férias.
   - Motivos da viagem.
   - Avaliação do site.
   Em seguida, explique como você visualizaria essas respostas em um dashboard.

3. **Limpeza de texto livre**  
   Suponha que a coluna “faltou algo na descrição?” contenha os valores: `Yes`, `yes`, `YES`, `yes!`, `na`, `N/A`, `nothing`, vazio.  
   Descreva regras de padronização e indique quais linhas você excluiria, se for o caso.

4. **Métricas, dimensões e agregações**  
   Para cada uma das visualizações abaixo, indique:
   - Dimensão principal.
   - Métrica.
   - Agregação.
   a) Gráfico de rosca para gênero dos clientes.  
   b) Série temporal de saldo da conta bancária.  
   c) Mapa de calor idade × frequência de compra.

5. **Dashboard da conta de Chris Cooper**  
   Em texto (ou rascunho em papel), descreva como você organizaria:
   - Cabeçalho (elementos e textos).
   - KPIs principais.
   - Gráfico de série temporal.
   - Tabela de transações.
   - Filtro de intervalo de datas.

## 13. Resumo Estratégico Consolidado

Esta aula consolida a visão de que qualquer profissional pode agir como cidadão de dados, desde que tenha acesso a dados, ferramentas e objetivos claros de negócio. A partir de um caso de pesquisa de viagens e do CSV `Chapter2-AccountData.csv`, mostra‑se o ciclo completo: desenhar pesquisas, coletar respostas, limpar e preparar dados (incluindo texto livre), definir métricas/dimensões e criar dashboards em Looker Studio. BigQuery e arquitetura serverless são apresentados como base para escalar essa abordagem a volumes massivos de dados, mas a ênfase está em fazer o básico bem feito: dados limpos, visualizações adequadas e decisões sustentadas em evidências. O dashboard da conta bancária ilustra como extratos brutos podem virar uma visão estratégica de finanças pessoais com poucos componentes bem configurados.

## 14. Resumo em 5 Linhas

1. A aula posiciona o aluno como cidadão de dados, responsável por extrair valor prático de dados acessíveis.  
2. Mostra o ciclo completo de valor: coletar, transformar, analisar, comunicar e agir, aplicado à pesquisa de viagens e finanças pessoais.  
3. Enfatiza a importância de desenho de pesquisas, limpeza de dados (incluindo texto livre) e atenção a nulos, lixo e outliers.  
4. Formaliza o uso de métricas, dimensões e agregações no Looker Studio, com exemplos concretos de gráficos e dashboards.  
5. Exemplifica conceitos com o dashboard da conta bancária de Chris Cooper, usando `Chapter2-AccountData.csv` como fonte de dados.

## 15. Palavras‑Chave

Cidadão de dados, cientista de dados cidadão, coleta de dados, SurveyMonkey, mala direta, taxa de resposta, dados em todos os lugares, limpeza de dados, nulos, outliers, texto livre, normalização, BigQuery, data warehouse, serverless, escalabilidade, Looker Studio, Google Data Studio, Google Sheets, Google Drive, métricas, dimensões, agregação, scorecard, gráfico de rosca, gráfico de pizza, gráfico de barras empilhadas, mapa de calor, tabela dinâmica, série temporal, dashboard, conta bancária, `Chapter2-AccountData.csv`.

