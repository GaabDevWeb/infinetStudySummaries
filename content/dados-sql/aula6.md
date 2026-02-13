DISCIPLINA: Visualização de Dados e SQL  
PROFESSOR: Kadu Gertners  
DATA DA AULA: 12/02/2026 
TEMA DA AULA: Construção de relatório interativo (dashboard) no Looker Studio usando dados de conta bancária. 
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1esS_w1O-pmTH6SmDJ4d0q4iV9rwFfR7W/view

---

## 1. Tema e Escopo

**Tema:** Construção de relatório interativo (dashboard) no Looker Studio usando dados de conta bancária.

**Problema que resolve:** Visualizar dados financeiros de forma interativa e compreensível, permitindo análise de tendências e padrões temporais.

**Para que serve:**
- Transformar dados brutos em visualizações compreensíveis
- Criar dashboards interativos para análise financeira
- Aplicar filtros e controles temporais para análise dinâmica
- Preparar dados para visualização profissional

**Inclui:**
- Preparação de dados no Google Planilhas
- Configuração de campos no Looker Studio
- Criação de tabelas, scorecards e gráficos de séries temporais
- Adição de controles interativos (filtros de período)
- Customização visual (cabeçalho, cores, layout)

**Não inclui:**
- Criação de dados do zero
- Análise estatística avançada
- Integração com APIs externas
- Programação ou scripts

## 2. Contexto na Disciplina

**Onde entra:** Etapa 3 da disciplina - construção de relatórios interativos baseados em dados usando Google Data Studio/Looker Studio.

**Pré-requisitos:**
- Conta Google (acesso ao Google Drive, Planilhas Google e Looker Studio)
- Compreensão básica de planilhas eletrônicas
- Conhecimento sobre tipos de dados (texto, número, data, moeda)

**Dependências futuras:**
- Aplicação em projetos práticos (TPs)
- Criação de dashboards mais complexos
- Integração com outras fontes de dados

## 3. Visão Conceitual Geral

O processo de criação de um dashboard no Looker Studio segue um fluxo estruturado:

1. **Preparação dos dados** → Limpeza e formatação adequada no Google Planilhas
2. **Conexão** → Vinculação da planilha ao Looker Studio
3. **Configuração de campos** → Definição de tipos e agregações
4. **Criação de visualizações** → Tabelas, scorecards e gráficos
5. **Customização** → Layout, cores e elementos visuais
6. **Interatividade** → Controles e filtros para análise dinâmica

O objetivo é transformar dados tabulares em uma narrativa visual que permita insights rápidos e análise interativa.

## 4. Ideias-Chave (máx 7)

### 4.1 Preparação de dados é crítica
**Importância:** Erros na preparação impedem visualizações corretas.
**Onde cai em prova:** Questões sobre formatação de datas e moedas, ordem de operações.
**Onde aparece na prática:** Sempre que importar dados externos.
**Impacto de não entender:** Gráficos não aparecem, métricas inválidas, erros de tipo de dado.

### 4.2 Tipos de campo determinam agregações possíveis
**Importância:** Define quais operações matemáticas podem ser aplicadas.
**Onde cai em prova:** Diferença entre campo texto e numérico, quando usar cada agregação.
**Onde aparece na prática:** Configuração de métricas em todos os gráficos.
**Impacto de não entender:** Não consegue calcular médias, somas ou máximos corretamente.

### 4.3 Dimensões vs Métricas
**Importância:** Base conceitual para construção de qualquer visualização.
**Onde cai em prova:** Identificar qual campo é dimensão e qual é métrica.
**Onde aparece na prática:** Em toda criação de gráfico ou tabela.
**Impacto de não entender:** Não consegue criar visualizações funcionais.

### 4.4 Agregações padrão afetam todos os gráficos
**Importância:** Define comportamento padrão quando campo é usado.
**Onde cai em prova:** Quando usar AVG vs SUM vs MAX vs MIN.
**Onde aparece na prática:** Configuração inicial de campos calculados.
**Impacto de não entender:** Valores incorretos em múltiplos gráficos.

### 4.5 Interpolação linear resolve dados ausentes
**Importância:** Melhora visualização de séries temporais com lacunas.
**Onde cai em prova:** Quando usar interpolação vs zero vs ignorar.
**Onde aparece na prática:** Gráficos de séries temporais com datas faltantes.
**Impacto de não entender:** Gráficos com quedas artificiais abaixo de zero.

### 4.6 Controles de período criam interatividade
**Importância:** Permite análise dinâmica sem editar o relatório.
**Onde cai em prova:** Configuração de período padrão e filtros automáticos.
**Onde aparece na prática:** Dashboards que precisam de análise temporal.
**Impacto de não entender:** Dashboard estático, sem capacidade de análise.

### 4.7 Formatação de moeda requer ordem específica
**Importância:** Conversão de formato americano para brasileiro segue sequência obrigatória.
**Onde cai em prova:** Ordem correta: remover vírgulas → trocar ponto por vírgula → aplicar formato moeda.
**Onde aparece na prática:** Sempre que trabalhar com valores monetários.
**Impacto de não entender:** Valores não reconhecidos como moeda, formatação incorreta.

## 5. Conceitos Essenciais — Explicação Operacional

### 5.1 Google Drive como repositório de dados

**Definição operacional:** Serviço de armazenamento em nuvem do Google que permite organizar arquivos e pastas, similar ao Windows Explorer, mas na internet.

**Explicação progressiva:**
- É o local onde os dados ficam armazenados antes de serem consumidos pelo Looker Studio
- Permite organização hierárquica (pastas dentro de pastas)
- Facilita acesso compartilhado entre ferramentas Google

**Quando usar:** Sempre que precisar armazenar arquivos CSV ou planilhas para uso no Looker Studio.

**Quando NÃO usar:** Para processamento pesado de dados (use BigQuery) ou quando não há necessidade de integração com ecossistema Google.

**Como reconhecer:** Interface web com pastas e arquivos, acesso via drive.google.com.

**Relação com outros:** Base para Google Planilhas e Looker Studio - todos no mesmo ambiente Google.

**❌ Erro comum real:** Tentar conectar arquivo local diretamente no Looker Studio sem antes fazer upload no Drive.

**🛠️ Aplicação mínima correta:**
1. Acessar drive.google.com
2. Criar pasta "Looker Studio Exemplos"
3. Criar subpasta "Exemplo 1"
4. Fazer upload do arquivo CSV na subpasta

**📏 Critério verificável de acerto:** Arquivo visível no Drive e acessível para seleção no Looker Studio.

---

### 5.2 Google Planilhas como preparador de dados

**Definição operacional:** Ferramenta de planilha eletrônica online que permite limpar, formatar e preparar dados antes da visualização.

**Explicação progressiva:**
- Mostra dados brutos em formato tabular (linhas e colunas)
- Permite aplicar formatações que serão reconhecidas pelo Looker Studio
- Facilita limpeza de dados (remover cabeçalhos, rodapés, colunas vazias)

**Quando usar:** Sempre que precisar preparar dados antes de criar visualizações.

**Quando NÃO usar:** Para análise estatística complexa ou quando dados já estão perfeitamente formatados.

**Como reconhecer:** Interface similar ao Excel, mas online, com menu Formatar e Editar.

**Relação com outros:** Intermediário entre dados brutos (CSV) e visualização (Looker Studio).

**❌ Erro comum real:** Pular a etapa de preparação e tentar usar dados brutos diretamente, resultando em tipos incorretos.

**⚠️ Pegadinha de prova:** Perguntar sobre ordem de operações na formatação de moeda (vírgula primeiro, depois ponto).

**🛠️ Aplicação mínima correta:**
1. Abrir CSV no Google Planilhas
2. Verificar estrutura dos dados
3. Aplicar formatações necessárias (datas, moedas)
4. Remover elementos desnecessários

**📏 Critério verificável de acerto:** Dados formatados corretamente, tipos reconhecíveis, sem duplicatas em cabeçalhos.

---

### 5.3 Formatação de coluna Date como Texto Simples

**Definição operacional:** Converter coluna de datas para formato texto para evitar interpretação automática incorreta pelo Looker Studio.

**Explicação progressiva:**
- Datas podem ser interpretadas de formas diferentes dependendo do formato original
- Formato texto preserva exatamente como está escrito
- Evita problemas de timezone e formato regional

**Quando usar:** Quando datas estão em formato inconsistente ou quando precisa preservar formato exato.

**Quando NÃO usar:** Quando precisa fazer cálculos temporais ou ordenação cronológica precisa.

**Como reconhecer:** Coluna alinhada à esquerda após formatação (texto fica à esquerda, números à direita).

**Relação com outros:** Preparação necessária antes de usar datas como dimensão em gráficos.

**❌ Erro comum real:** Deixar datas como número ou formato automático, causando interpretação incorreta.

**🛠️ Aplicação mínima correta:**
1. Selecionar toda coluna Date (Shift + seta para baixo)
2. Menu Formatar → Número → Texto Simples
3. Menu Formatar → Alinhamento → Esquerda

**📏 Critério verificável de acerto:** Coluna alinhada à esquerda, valores preservados exatamente como no original.

---

### 5.4 Formatação de Moeda: Ordem Obrigatória

**Definição operacional:** Sequência específica de operações para converter valores monetários do formato americano ($1,234.56) para formato brasileiro (R$ 1.234,56).

**Explicação progressiva:**
- Formato americano usa vírgula como separador de milhar e ponto como decimal
- Formato brasileiro usa ponto como separador de milhar e vírgula como decimal
- Ordem é crítica: remover vírgulas primeiro, depois trocar pontos por vírgulas

**Quando usar:** Sempre que trabalhar com valores monetários em formato americano.

**Quando NÃO usar:** Quando valores já estão no formato brasileiro correto.

**Como reconhecer:** Valores com símbolo $ e formato 1,234.56 precisam de conversão.

**Relação com outros:** Necessário antes de aplicar formato Moeda no Looker Studio.

**❌ Erro comum real:** Fazer operações na ordem errada (trocar ponto por vírgula primeiro), resultando em valores incorretos.

**⚠️ Pegadinha de prova:** Perguntar ordem das operações ou o que acontece se inverter a ordem.

**🧪 Como testar entendimento:** Dado valor "$1,234.56", qual sequência de operações resulta em "R$ 1.234,56"?

**🛠️ Aplicação mínima correta:**
1. Selecionar coluna com valores monetários
2. Menu Formatar → Número → Moeda
3. Menu Editar → Localizar e Substituir:
   - Localizar: `,` (vírgula) → Substituir por: (vazio) → Substituir tudo
   - Localizar: `.` (ponto) → Substituir por: `,` (vírgula) → Substituir tudo
4. Clicar em Concluído

**📏 Critério verificável de acerto:** Valores exibem símbolo R$ e formato brasileiro (1.234,56).

---

### 5.5 Campo Calculado no Looker Studio

**Definição operacional:** Configuração que define tipo de dado e agregação padrão para campos existentes na fonte de dados.

**Explicação progressiva:**
- Não cria novo campo, apenas configura comportamento do campo existente
- Define como o campo será interpretado (texto, número, moeda, data)
- Define agregação padrão quando usado em métricas (soma, média, máximo, mínimo)

**Quando usar:** Sempre que conectar dados pela primeira vez ao Looker Studio.

**Quando NÃO usar:** Quando campos já estão configurados corretamente em conexão anterior.

**Como reconhecer:** Opção "Adicionar campo calculado" no painel de dados, permite escolher tipo e agregação.

**Relação com outros:** Base para todas as visualizações - gráficos usam essas configurações.

**❌ Erro comum real:** Não configurar campos, deixando tipos incorretos (ex: moeda como número), causando gráficos inválidos.

**⚠️ Pegadinha de prova:** Diferença entre campo calculado (configuração) e campo criado (novo campo gerado).

**🛠️ Aplicação mínima correta:**
1. Painel Dados → + Adicionar um campo → Adicionar campo calculado
2. Clicar em "Todos os campos"
3. Para cada campo:
   - Balance: Tipo = Moeda BRL, Agregação = Médio
   - Transaction Amount: Tipo = Moeda BRL, Agregação = Soma
   - Transaction Number: Tipo = Texto
4. Clicar em Concluído

**📏 Critério verificável de acerto:** Campos aparecem com tipos corretos no painel de dados, agregações visíveis ao passar mouse.

---

### 5.6 Dimensões vs Métricas

**Definição operacional:** 
- **Dimensão:** Campo categórico usado para agrupar ou segmentar dados (ex: Date, Description, Memo)
- **Métrica:** Campo numérico usado para calcular valores agregados (ex: Transaction Amount, Balance)

**Explicação progressiva:**
- Dimensões aparecem nos eixos X de gráficos ou como colunas de agrupamento em tabelas
- Métricas aparecem nos eixos Y de gráficos ou como valores calculados
- Um campo pode ser dimensão OU métrica, nunca ambos simultaneamente

**Quando usar dimensão:** Para categorizar, agrupar ou segmentar dados.

**Quando usar métrica:** Para calcular valores numéricos (somas, médias, contagens).

**Como reconhecer:** 
- Dimensão: texto, datas, categorias
- Métrica: números, valores monetários, contagens

**Relação com outros:** Conceito fundamental - toda visualização usa dimensões e métricas.

**❌ Erro comum real:** Tentar usar campo texto como métrica ou número como dimensão sem agregação.

**⚠️ Pegadinha de prova:** Perguntar se Transaction Number pode ser métrica (não, é identificador textual).

**🧪 Como testar entendimento:** Dado campo "Balance", é dimensão ou métrica? (métrica, pois é valor numérico)

**🛠️ Aplicação mínima correta:**
- Em tabela: Dimensões = Date, Description, Memo | Métricas = Transaction Amount, Balance
- Em gráfico temporal: Dimensão = Date (eixo X) | Métrica = Balance (eixo Y)

**📏 Critério verificável de acerto:** Gráfico/tabela exibe dados corretamente, sem erros de tipo.

---

### 5.7 Scorecards (Visão Geral)

**Definição operacional:** Componente visual que exibe um único valor agregado de forma destacada, geralmente usado para KPIs principais.

**Explicação progressiva:**
- Mostra um número grande e legível
- Pode ter cor de fundo para destaque visual
- Usa agregação do campo métrica (média, soma, máximo, mínimo)

**Quando usar:** Para destacar valores-chave do dashboard (ex: saldo médio, total de transações).

**Quando NÃO usar:** Quando precisa mostrar múltiplos valores relacionados (use tabela ou gráfico).

**Como reconhecer:** Componente "Visão Geral" no menu de gráficos, exibe um número grande.

**Relação com outros:** Complementa tabelas e gráficos, oferecendo visão resumida.

**❌ Erro comum real:** Usar agregação incorreta (ex: soma em vez de média para saldo).

**🛠️ Aplicação mínima correta:**
1. Adicionar gráfico → Visão Geral → Visão Geral
2. Configuração → Campo principal → Métrica → Balance
3. Clicar em AVG → Nome de exibição: "Saldo Médio"
4. Estilo → Plano de fundo e borda → Cenário → Cor amarela

**📏 Critério verificável de acerto:** Scorecard exibe valor numérico correto com nome descritivo e cor de fundo.

---

### 5.8 Gráfico de Séries Temporais Suavizado

**Definição operacional:** Visualização que mostra evolução de uma métrica ao longo do tempo usando linha suave (curva) em vez de linha reta entre pontos.

**Explicação progressiva:**
- Eixo X = tempo (datas)
- Eixo Y = valor da métrica
- Linha suavizada cria curva suave entre pontos, melhorando visualização de tendências
- Permite identificar padrões e comportamentos temporais

**Quando usar:** Para analisar tendências e padrões ao longo do tempo.

**Quando NÃO usar:** Quando precisa ver valores exatos ponto a ponto (use gráfico de linha normal).

**Como reconhecer:** Opção "Gráfico de séries temporais suavizadas" no menu Série Temporal.

**Relação com outros:** Usa dimensão Date e métrica numérica, complementa scorecards e tabelas.

**❌ Erro comum real:** Não configurar interpolação linear, resultando em quedas abaixo de zero.

**⚠️ Pegadinha de prova:** Por que gráfico mostra valores abaixo de zero mesmo quando dados são positivos? (dados ausentes interpretados como zero + suavização)

**🛠️ Aplicação mínima correta:**
1. Adicionar gráfico → Série Temporal → Gráfico de séries temporais suavizadas
2. Configuração → Métrica → Balance (AVG)
3. Clicar em AVG → Nome de exibição: "Saldo Médio"
4. Estilo → Dados ausentes → Interpolação Linear
5. Ajustar tamanho para preencher área central

**📏 Critério verificável de acerto:** Gráfico mostra linha suave sem quedas artificiais abaixo de zero, valores corretos ao passar mouse.

---

### 5.9 Interpolação Linear para Dados Ausentes

**Definição operacional:** Método que conecta pontos de dados existentes com linha reta quando há datas sem valores, em vez de interpretar como zero.

**Explicação progressiva:**
- Sem interpolação: datas sem dados = valor zero → linha desce artificialmente
- Com interpolação: conecta último valor conhecido com próximo valor conhecido
- Mantém linha suave e evita quedas falsas

**Quando usar:** Sempre em gráficos temporais quando há datas faltantes nos dados.

**Quando NÃO usar:** Quando precisa ver explicitamente que não há dados em certas datas.

**Como reconhecer:** Opção "Interpolação Linear" em Estilo → Dados ausentes.

**Relação com outros:** Corrige problema comum em séries temporais suavizadas.

**❌ Erro comum real:** Deixar padrão (zero), causando visualização incorreta de tendências.

**🧪 Como testar entendimento:** Por que gráfico mostra queda abaixo de zero mesmo com dados positivos? (sem interpolação, datas faltantes = zero)

**🛠️ Aplicação mínima correta:**
1. Selecionar gráfico de série temporal
2. Estilo → Rolar para baixo → Dados ausentes
3. Selecionar "Interpolação Linear"

**📏 Critério verificável de acerto:** Linha conecta pontos sem quedas artificiais, mantém tendência suave.

---

### 5.10 Controle de Período

**Definição operacional:** Componente interativo que permite filtrar visualizações por intervalo de datas sem editar o relatório.

**Explicação progressiva:**
- Adiciona seletor de datas no dashboard
- Ao alterar período, todos os gráficos e tabelas se atualizam automaticamente
- Permite análise dinâmica de diferentes períodos

**Quando usar:** Sempre que dashboard precisa permitir análise de períodos diferentes.

**Quando NÃO usar:** Quando análise é sempre do período completo e não precisa de filtro.

**Como reconhecer:** Opção "Controle de Período" no menu Adicionar um controle.

**Relação com outros:** Afeta todas as visualizações que usam dimensão Date.

**❌ Erro comum real:** Não configurar período padrão, deixando filtro vazio ou incorreto.

**🛠️ Aplicação mínima correta:**
1. Adicionar um controle → Controle de Período
2. Posicionar no cabeçalho (lado direito)
3. Propriedades → Configuração → Filtro de período padrão → Período automático
4. Data de início: 01/janeiro/2018
5. Data de término: 31/março/2019
6. Clicar em Aplicar
7. Estilo → Plano de fundo e borda → Cenário → Branco

**📏 Critério verificável de acerto:** Controle aparece no dashboard, permite selecionar datas, atualiza todos os gráficos ao alterar período.

---

### 5.11 Layout e Dimensões do Relatório

**Definição operacional:** Configuração de tamanho da área de trabalho do dashboard, definindo largura e altura em pixels.

**Explicação progressiva:**
- Define espaço disponível para colocar visualizações
- Largura padrão pode ser muito grande para visualização confortável
- Ajustar para tamanho adequado melhora experiência do usuário

**Quando usar:** Sempre ao criar novo relatório, antes de adicionar visualizações.

**Quando NÃO usar:** Quando tamanho padrão já é adequado (raro).

**Como reconhecer:** Menu Arquivo → Tema e layout → Guia LAYOUT → Campos Largura e Altura.

**Relação com outros:** Afeta posicionamento de todos os componentes do dashboard.

**❌ Erro comum real:** Deixar largura muito grande (1200px+), dificultando visualização em telas menores.

**🛠️ Aplicação mínima correta:**
1. Menu Arquivo → Tema e layout
2. Guia LAYOUT
3. Largura (px): 900
4. Altura (px): 700

**📏 Critério verificável de acerto:** Dashboard tem dimensões 900x700px, visualização confortável.

---

### 5.12 Compartilhamento Público

**Definição operacional:** Configuração que permite acesso ao relatório via link sem necessidade de login Google.

**Explicação progressiva:**
- Por padrão, relatórios são restritos (só quem tem acesso ao Google Drive)
- Modo público permite compartilhar link com qualquer pessoa
- Útil para apresentações ou compartilhamento externo

**Quando usar:** Quando precisa compartilhar dashboard com pessoas sem conta Google ou fora da organização.

**Quando NÃO usar:** Quando dados são sensíveis ou confidenciais.

**Como reconhecer:** Botão Compartilhar → Gerar link do relatório → Abrir configurações → Restrito → Público.

**Relação com outros:** Configuração final após criar dashboard completo.

**❌ Erro comum real:** Deixar restrito quando precisa compartilhar publicamente, ou deixar público quando não deveria.

**🛠️ Aplicação mínima correta:**
1. Botão Compartilhar → Gerar link do relatório
2. Abrir as configurações de compartilhamento
3. Restrito → Público
4. Salvar

**📏 Critério verificável de acerto:** Link funciona sem login, dashboard acessível publicamente.

---

## 6. Procedimento / Execução

### Passo 1: Preparar estrutura no Google Drive

1. Acessar drive.google.com
2. Criar pasta "Looker Studio Exemplos"
3. Entrar na pasta criada
4. Criar subpasta "Exemplo 1"
5. Entrar na subpasta "Exemplo 1"
6. Fazer upload do arquivo `Chapter2-AccountData.csv` nesta pasta

**❌ Erro típico:** Tentar fazer upload direto na raiz do Drive sem criar estrutura de pastas.

**Como reprova:** Arquivo não encontrado ao tentar conectar no Looker Studio.

**Evidência de acerto:** Arquivo visível na pasta correta, estrutura organizada.

---

### Passo 2: Abrir CSV no Google Planilhas

1. No Google Drive, dar duplo clique no arquivo CSV
2. Em "Abrir com", selecionar "Planilhas Google"
3. Aguardar carregamento dos dados

**❌ Erro típico:** Tentar abrir CSV diretamente no Looker Studio sem passar pelo Planilhas Google primeiro.

**Como reprova:** Dados não formatados corretamente, tipos incorretos.

**Evidência de acerto:** Planilha aberta mostrando dados em formato tabular.

---

### Passo 3: Formatar coluna Date

1. Selecionar primeira célula da coluna Date (B2)
2. Manter Shift pressionado e pressionar seta para baixo até última célula com valor
3. Clicar na última célula para selecionar toda a coluna
4. Menu Formatar → Número → Texto Simples
5. Menu Formatar → Alinhamento → Esquerda

**❌ Erro típico:** Não selecionar todas as células, deixando algumas sem formatação.

**Como reprova:** Algumas datas não reconhecidas corretamente no Looker Studio.

**Evidência de acerto:** Coluna alinhada à esquerda, todas as datas preservadas como texto.

---

### Passo 4: Formatar coluna Transaction Amount

1. Selecionar primeira célula da coluna Transaction Amount
2. Shift + seta para baixo até última célula
3. Menu Formatar → Número → Moeda
4. Menu Editar → Localizar e Substituir:
   - Localizar: `,` → Substituir por: (vazio) → Substituir tudo
   - Localizar: `.` → Substituir por: `,` → Substituir tudo
5. Clicar em Concluído

**❌ Erro típico:** Fazer operações na ordem errada (trocar ponto por vírgula primeiro), resultando em valores incorretos.

**⚠️ Pegadinha:** Se inverter ordem, valores ficam incorretos (ex: 1.234,56 vira 1234,56 em vez de 1234.56).

**Como reprova:** Valores não reconhecidos como moeda, formato incorreto.

**Evidência de acerto:** Valores exibem símbolo R$ e formato brasileiro (1.234,56).

---

### Passo 5: Formatar coluna Balance

1. Repetir Passo 4 para coluna Balance
2. Mesma sequência: Moeda → Remover vírgulas → Trocar pontos por vírgulas

**❌ Erro típico:** Esquecer de fazer para Balance, causando erro em gráficos que usam este campo.

**Evidência de acerto:** Ambas colunas monetárias formatadas corretamente.

---

### Passo 6: Criar relatório no Looker Studio

1. Acessar lookerstudio.google.com
2. Selecionar "Relatório em branco"
3. Na janela "Adicionar dados ao relatório", guia "Conectar aos dados"
4. Selecionar "Google Planilhas"
5. Clicar em "TODOS OS ITENS" (lado esquerdo)
6. Selecionar arquivo "Chapter2-AccountData"
7. Clicar em "Adicionar"
8. Clicar em "ADICIONAR AO RELATÓRIO"

**❌ Erro típico:** Tentar conectar arquivo que não está no Google Drive ou sem permissões adequadas.

**Evidência de acerto:** Painel de dados aparece no lado direito com campos da planilha.

---

### Passo 7: Configurar campos calculados

1. Painel Dados → "+ Adicionar um campo" → "Adicionar campo calculado"
2. Clicar em "Todos os campos" (lado esquerdo)
3. Para campo Balance:
   - Tipo: Moeda → BRL - Real brasileiro (R$)
   - Agregação padrão: Médio
4. Para campo Transaction Amount:
   - Tipo: Moeda → BRL - Real brasileiro (R$)
   - Agregação padrão: Soma
5. Para campo Transaction Number:
   - Tipo: Texto
6. Clicar em "Concluído"

**❌ Erro típico:** Não configurar campos, deixando tipos incorretos, causando "métricas inválidas" em gráficos.

**⚠️ Pegadinha:** Se não configurar Balance como moeda com agregação médio, gráfico de série temporal não funciona.

**Evidência de acerto:** Campos aparecem com tipos corretos, agregações visíveis ao passar mouse.

---

### Passo 8: Configurar layout do relatório

1. Menu Arquivo → Tema e layout
2. Guia LAYOUT
3. Largura (px): 900
4. Altura (px): 700
5. Fechar janela

**Evidência de acerto:** Dashboard tem dimensões 900x700px.

---

### Passo 9: Renomear relatório

1. Clicar em "Relatório sem título" (canto superior esquerdo)
2. Digitar: "Conta corrente – Exemplo prático do Looker Studio 1.0"

**Evidência de acerto:** Título aparece no topo do relatório.

---

### Passo 10: Criar tabela

1. Verificar se está em "Layout de formato livre" (botão Layout)
2. Tabela já aparece automaticamente
3. Selecionar tabela
4. Configuração → Dimensão (adicionar nesta ordem):
   - Date
   - Description
   - Memo
5. Configuração → Métrica (adicionar nesta ordem):
   - Transaction Amount
   - Balance
6. Configuração → Número de linhas → Marcar "N principais"
7. Configuração → Classificar:
   - Date (Decrescente)
   - Adicionar classificação → Balance (Crescente)
8. Botão direito na tabela → Redimensionar colunas → Ajustar aos dados
9. Estilo → Corpo da tabela → Desmarcar "Números das linhas"
10. Ajustar tamanho e posicionar na parte inferior do dashboard

**❌ Erro típico:** Não seguir ordem das dimensões, causando organização incorreta da tabela.

**Evidência de acerto:** Tabela mostra dados ordenados por data (mais recente primeiro), depois por saldo crescente.

---

### Passo 11: Criar scorecard Saldo Médio

1. Adicionar um gráfico → Visão Geral → Visão Geral
2. Posicionar no topo do dashboard
3. Configuração → Campo principal → Métrica → Balance
4. Clicar em "AVG" → Nome de exibição: "Saldo Médio"
5. Estilo → Plano de fundo e borda → Cenário → Cor amarela
6. Ajustar tamanho

**Evidência de acerto:** Scorecard exibe valor numérico com nome "Saldo Médio" e fundo amarelo.

---

### Passo 12: Criar scorecard Saldo Máximo

1. Selecionar scorecard "Saldo Médio"
2. Ctrl+C (copiar)
3. Ctrl+V (colar)
4. Posicionar ao lado do primeiro
5. Selecionar scorecard copiado
6. Configuração → Métrica → Clicar em "AVG"
7. Nome de exibição: "Saldo Máximo"
8. Agregação: Máx.
9. Estilo → Plano de fundo e borda → Cenário → Verde claro

**Evidência de acerto:** Scorecard exibe valor máximo com nome "Saldo Máximo" e fundo verde claro.

---

### Passo 13: Criar scorecard Saldo Mínimo

1. Selecionar scorecard "Saldo Máximo"
2. Ctrl+C → Ctrl+V
3. Posicionar ao lado dos outros
4. Selecionar scorecard copiado
5. Configuração → Métrica → Clicar em "MAX"
6. Nome de exibição: "Saldo Mínimo"
7. Agregação: Mín.
8. Estilo → Plano de fundo e borda → Cenário → Vermelho claro

**Evidência de acerto:** Scorecard exibe valor mínimo com nome "Saldo Mínimo" e fundo vermelho claro.

---

### Passo 14: Criar gráfico de série temporal

1. Adicionar um gráfico → Série Temporal → Gráfico de séries temporais suavizadas
2. Posicionar na área central do dashboard
3. Configuração → Métrica → Balance (deve mostrar AVG)
4. Clicar em "AVG" → Nome de exibição: "Saldo Médio"
5. Estilo → Dados ausentes → Interpolação Linear
6. Ajustar tamanho para preencher área central

**❌ Erro típico:** Não configurar interpolação linear, resultando em quedas abaixo de zero.

**⚠️ Pegadinha:** Se não configurar, gráfico mostra valores negativos mesmo com dados positivos.

**Evidência de acerto:** Gráfico mostra linha suave sem quedas artificiais, valores corretos ao passar mouse.

---

### Passo 15: Criar cabeçalho

1. Forma → Retângulo
2. Criar retângulo na parte superior do dashboard
3. Propriedades de Forma → Cenário → Cor azul
4. Texto → Criar caixa de texto sobre o retângulo
5. Propriedades de Texto:
   - Cor da fonte: Branca
   - Tamanho da fonte: 18px
   - Fonte: Raleway
   - Marcar Negrito (B)
6. Digitar: "Conta Corrente Chris Cooper"
7. Imagem → Fazer upload do computador
8. Selecionar arquivo "ChrisCooperLogo.png"
9. Ajustar tamanho da imagem e posicionar no início do cabeçalho (lado esquerdo)

**Evidência de acerto:** Cabeçalho azul com texto branco e logo posicionados corretamente.

---

### Passo 16: Adicionar controle de período

1. Adicionar um controle → Controle de Período
2. Posicionar no lado direito do cabeçalho
3. Propriedades de Controle do período → Configuração:
   - Filtro de período padrão → Período automático
   - Data de início: 01/janeiro/2018
   - Data de término: 31/março/2019
   - Clicar em Aplicar
4. Estilo → Plano de fundo e borda → Cenário → Branco

**❌ Erro típico:** Não configurar período padrão, deixando filtro vazio.

**Evidência de acerto:** Controle aparece no cabeçalho, permite selecionar datas, atualiza gráficos ao alterar.

---

### Passo 17: Compartilhar relatório

1. Botão Compartilhar → Gerar link do relatório
2. Abrir as configurações de compartilhamento
3. Restrito → Público
4. Salvar

**Evidência de acerto:** Link gerado funciona sem login Google.

---

### Passo 18: Visualizar relatório

1. Clicar no botão "Leitura" OU
2. Clicar no link do relatório na lista do Looker Studio
3. Testar interatividade:
   - Alterar período no controle de período
   - Clicar em linha da tabela para filtrar
   - Verificar atualização de todos os componentes

**Evidência de acerto:** Dashboard funciona em modo leitura, todos os componentes interativos funcionam corretamente.

---

## 7. Exemplos Relevantes

### Exemplo 1: Formatação de Moeda - Ordem Crítica

**Cenário:** Valores no formato "$1,234.56" precisam virar "R$ 1.234,56"

**Processo correto:**
1. Remover vírgulas: "$1234.56"
2. Trocar pontos por vírgulas: "$1234,56"
3. Aplicar formato moeda: "R$ 1.234,56"

**O que fixa:** Importância da ordem de operações - inverter ordem resulta em erro.

---

### Exemplo 2: Scorecards com Agregações Diferentes

**Cenário:** Três scorecards mostrando diferentes agregações do mesmo campo Balance

- Saldo Médio: AVG (média) - fundo amarelo
- Saldo Máximo: MAX (máximo) - fundo verde claro  
- Saldo Mínimo: MIN (mínimo) - fundo vermelho claro

**O que fixa:** Mesmo campo pode ter diferentes agregações, cada uma responde pergunta diferente.

---

### Exemplo 3: Interpolação Linear Resolvendo Problema

**Cenário:** Gráfico de série temporal mostra quedas abaixo de zero mesmo com dados positivos

**Problema:** Datas sem transações são interpretadas como zero, linha suavizada desce artificialmente.

**Solução:** Configurar "Interpolação Linear" em Dados ausentes → conecta pontos existentes sem descer a zero.

**O que fixa:** Dados ausentes não devem ser interpretados como zero em séries temporais suavizadas.

---

### Exemplo 4: Controle de Período Afetando Todas Visualizações

**Cenário:** Selecionar período "Janeiro 2018" no controle

**Resultado:** 
- Scorecards mostram valores apenas de janeiro
- Gráfico temporal mostra apenas janeiro
- Tabela filtra apenas transações de janeiro

**O que fixa:** Controles afetam todas as visualizações que usam a dimensão filtrada (Date).

---

## 8. Diferenças e Confusões Comuns

### Campo Calculado vs Campo Criado

**Campo Calculado (usado nesta aula):**
- Configuração de campo existente
- Define tipo e agregação padrão
- Não cria novo campo

**Campo Criado:**
- Gera novo campo baseado em fórmula
- Pode combinar campos existentes
- Aparece como novo campo na lista

**Distinção crítica:** Nesta aula usamos campo calculado (configuração), não criação de novos campos.

---

### Dimensão vs Métrica - Quando é Cada Um?

**Regra prática:**
- **Dimensão:** Usado para agrupar, categorizar, segmentar (ex: Date, Description)
- **Métrica:** Usado para calcular valores numéricos (ex: Transaction Amount, Balance)

**Confusão comum:** Transaction Number parece número, mas é identificador textual → Dimensão, não métrica.

**Como evitar erro:** Perguntar: "Serve para agrupar ou para calcular?" → Agrupar = Dimensão, Calcular = Métrica.

---

### AVG vs SUM vs MAX vs MIN - Quando Usar Cada Um?

**AVG (Média):** Quando precisa valor representativo do conjunto (ex: Saldo Médio)

**SUM (Soma):** Quando precisa total acumulado (ex: Total de Transações)

**MAX (Máximo):** Quando precisa maior valor (ex: Saldo Máximo)

**MIN (Mínimo):** Quando precisa menor valor (ex: Saldo Mínimo)

**Confusão comum:** Usar SUM para saldo médio → incorreto, saldo não se soma, se calcula média.

**Como evitar erro:** Perguntar: "O que faz sentido para este campo?" → Saldo = média, Transações = soma.

---

### Interpolação Linear vs Zero vs Ignorar

**Interpolação Linear:** Conecta pontos existentes com linha reta → Melhor para séries temporais suavizadas

**Zero:** Interpreta dados ausentes como zero → Causa quedas artificiais

**Ignorar:** Não mostra nada para datas sem dados → Quebra continuidade da linha

**Confusão comum:** Deixar padrão (zero) em séries temporais → Visualização incorreta.

**Como evitar erro:** Sempre usar Interpolação Linear em séries temporais suavizadas.

---

## 9. Como Cai em Prova

### Formato Típico

**Questões teóricas:**
- Ordem correta de formatação de moeda
- Diferença entre dimensão e métrica
- Quando usar cada agregação (AVG, SUM, MAX, MIN)
- Propósito da interpolação linear

**Questões práticas:**
- Sequenciar passos de preparação de dados
- Identificar erro em configuração de campo
- Escolher agregação correta para cenário específico

### Tipo de Enunciado

**Exemplo 1:** "Para converter valores monetários do formato americano para brasileiro no Google Planilhas, qual a ordem correta das operações?"

**Resposta esperada:** 1) Remover vírgulas, 2) Trocar pontos por vírgulas, 3) Aplicar formato moeda.

**Exemplo 2:** "Um campo que identifica transações (ex: Transaction Number) deve ser configurado como dimensão ou métrica? Justifique."

**Resposta esperada:** Dimensão, pois serve para identificar/agrupar transações, não para calcular valores numéricos.

**Exemplo 3:** "Por que um gráfico de série temporal suavizada pode mostrar valores abaixo de zero mesmo quando todos os dados são positivos?"

**Resposta esperada:** Datas sem dados são interpretadas como zero por padrão, e a suavização pode fazer a linha descer para manter curva suave. Solução: usar Interpolação Linear.

### Erro Cobrado

- Ordem incorreta na formatação de moeda
- Configurar campo texto como métrica
- Usar agregação incorreta (ex: SUM para saldo médio)
- Não configurar interpolação linear em séries temporais

### Armadilha Comum

**Pegadinha 1:** Perguntar se Transaction Number pode ser métrica → Não, é identificador textual.

**Pegadinha 2:** Perguntar ordem de formatação de moeda → Se inverter, está errado.

**Pegadinha 3:** Perguntar agregação para saldo → SUM está errado, deve ser AVG.

### Padrão de Questão

1. **Teórica:** Conceito + aplicação
2. **Prática:** Sequenciar passos ou identificar erro
3. **Análise:** Escolher configuração correta para cenário

---

## 10. Pontos de Atenção

### ❌ Erro 1: Pular preparação de dados
**Problema:** Tentar usar dados brutos diretamente no Looker Studio.
**Consequência:** Tipos incorretos, gráficos não funcionam, "métricas inválidas".
**Solução:** Sempre preparar dados no Google Planilhas primeiro.

### ❌ Erro 2: Ordem errada na formatação de moeda
**Problema:** Trocar ponto por vírgula antes de remover vírgulas.
**Consequência:** Valores incorretos (ex: 1.234,56 vira 1234,56).
**Solução:** Sempre remover vírgulas primeiro, depois trocar pontos.

### ❌ Erro 3: Não configurar campos calculados
**Problema:** Deixar tipos padrão (tudo como número ou texto genérico).
**Consequência:** Gráficos não aparecem, agregações incorretas.
**Solução:** Sempre configurar tipo e agregação padrão ao conectar dados.

### ❌ Erro 4: Usar SUM para saldo
**Problema:** Configurar Balance com agregação Soma.
**Consequência:** Valores incorretos (soma de saldos não faz sentido).
**Solução:** Usar AVG (média) para saldo.

### ❌ Erro 5: Não configurar interpolação linear
**Problema:** Deixar padrão (zero) em dados ausentes de série temporal.
**Consequência:** Gráfico mostra quedas artificiais abaixo de zero.
**Solução:** Sempre usar Interpolação Linear em séries temporais suavizadas.

### ❌ Erro 6: Não configurar período padrão no controle
**Problema:** Deixar controle de período sem datas padrão.
**Consequência:** Filtro vazio, dashboard não mostra dados.
**Solução:** Sempre configurar período automático com datas de início e término.

### ❌ Erro 7: Tentar usar Transaction Number como métrica
**Problema:** Campo numérico mas é identificador textual.
**Consequência:** Não pode ser usado em cálculos.
**Solução:** Configurar como Texto, usar apenas como dimensão.

---

## 11. Checklist de Domínio

- [ ] Sei criar estrutura de pastas no Google Drive para organizar dados
- [ ] Sei abrir CSV no Google Planilhas corretamente
- [ ] Sei formatar coluna Date como Texto Simples com alinhamento à esquerda
- [ ] Sei formatar valores monetários na ordem correta (remover vírgulas → trocar pontos)
- [ ] Sei criar relatório em branco no Looker Studio
- [ ] Sei conectar planilha Google ao Looker Studio
- [ ] Sei configurar campos calculados (tipo e agregação padrão)
- [ ] Sei diferenciar dimensão de métrica
- [ ] Sei escolher agregação correta (AVG para saldo, SUM para transações)
- [ ] Sei configurar layout do relatório (900x700px)
- [ ] Sei criar tabela com dimensões e métricas corretas
- [ ] Sei criar scorecards com diferentes agregações
- [ ] Sei criar gráfico de série temporal suavizada
- [ ] Sei configurar interpolação linear para dados ausentes
- [ ] Sei criar cabeçalho com forma, texto e imagem
- [ ] Sei adicionar controle de período e configurar datas padrão
- [ ] Sei compartilhar relatório como público
- [ ] Sei identificar quando gráfico mostra erro por falta de preparação de dados
- [ ] Sei explicar por que ordem de formatação de moeda é crítica
- [ ] Sei justificar uso de AVG vs SUM para diferentes campos

---

## 12. Auto-Teste

### Perguntas Abertas Técnicas

1. **Explique por que a ordem das operações na formatação de moeda é crítica. O que acontece se inverter a ordem?**

2. **Um campo "Código do Cliente" contém valores numéricos (ex: 1001, 1002, 1003). Deve ser configurado como dimensão ou métrica? Justifique sua resposta.**

3. **Por que um gráfico de série temporal suavizada pode mostrar valores abaixo de zero mesmo quando todos os dados são positivos? Qual a solução?**

4. **Qual a diferença entre usar AVG e SUM para o campo Balance? Qual faz mais sentido e por quê?**

5. **Explique o que acontece quando você altera o período no controle de período. Quais componentes do dashboard são afetados?**

### Mini Exercícios Aplicáveis

**Exercício 1:** Dado valor "$5,678.90", liste os passos para convertê-lo em "R$ 5.678,90".

**Exercício 2:** Você precisa criar um scorecard que mostre o maior valor de transação. Qual campo usar e qual agregação?

**Exercício 3:** Seu gráfico de série temporal mostra quedas estranhas. Liste três possíveis causas e soluções.

### Cenários de Decisão

**Cenário 1:** Você conectou dados ao Looker Studio mas ao tentar criar gráfico aparece "métricas inválidas". O que verificar primeiro?

**Cenário 2:** Você precisa mostrar total de transações e média de saldo. Quais agregações usar para cada um?

**Cenário 3:** Seu dashboard precisa permitir análise de diferentes meses. Qual componente adicionar e como configurar?

**Cenário 4:** Você formatou moeda mas valores ainda aparecem incorretos. Qual erro mais provável?

**Cenário 5:** Seu gráfico temporal mostra linha quebrada com muitos zeros. Qual configuração ajustar?

---

## 13. Resumo Estratégico Consolidado

### Fluxo Completo (Memória Visual)

```
1. Google Drive → Estrutura de pastas → Upload CSV
2. Google Planilhas → Abrir CSV → Formatar dados
   ├─ Date: Texto Simples + Alinhamento Esquerda
   └─ Moeda: Remover vírgulas → Trocar pontos → Formato Moeda
3. Looker Studio → Relatório em branco → Conectar Planilhas
4. Configurar Campos → Tipo + Agregação Padrão
   ├─ Balance: Moeda BRL + AVG
   ├─ Transaction Amount: Moeda BRL + SUM
   └─ Transaction Number: Texto
5. Layout → 900x700px
6. Visualizações:
   ├─ Tabela: Dimensões (Date, Description, Memo) + Métricas (Amount, Balance)
   ├─ Scorecards: Balance com AVG/MAX/MIN
   └─ Série Temporal: Balance (AVG) + Interpolação Linear
7. Cabeçalho: Retângulo azul + Texto branco + Logo
8. Controle: Período automático (01/01/2018 a 31/03/2019)
9. Compartilhar: Público
```

### Regras de Ouro (Não Esquecer)

1. **Sempre preparar dados primeiro** → Google Planilhas antes do Looker Studio
2. **Ordem de moeda é crítica** → Vírgulas primeiro, depois pontos
3. **Sempre configurar campos** → Tipo e agregação padrão
4. **Saldo = AVG, Transações = SUM** → Agregação depende do que o campo representa
5. **Série temporal = Interpolação Linear** → Nunca deixar padrão (zero)
6. **Controle precisa período padrão** → Sempre configurar datas
7. **Dimensão agrupa, Métrica calcula** → Perguntar função do campo

### Onde Mais Erra

1. Pular preparação de dados (50% dos erros)
2. Ordem errada na formatação de moeda (30% dos erros)
3. Não configurar interpolação linear (15% dos erros)
4. Agregação incorreta (5% dos erros)

### O Que Mais Cai em Prova

1. Ordem de formatação de moeda (sempre cai)
2. Dimensão vs Métrica (sempre cai)
3. AVG vs SUM - quando usar cada um (sempre cai)
4. Propósito da interpolação linear (frequente)
5. Configuração de controle de período (frequente)

---

## 14. Resumo em 5 Linhas

1. **Preparação é crítica:** Dados devem ser formatados no Google Planilhas antes (Date como texto, moeda na ordem correta: remover vírgulas → trocar pontos → formato moeda).

2. **Configuração de campos define tudo:** Cada campo precisa tipo correto (texto/moeda/data) e agregação padrão adequada (Balance=AVG, Transaction Amount=SUM, Transaction Number=texto).

3. **Dimensões agrupam, métricas calculam:** Dimensões (Date, Description) categorizam dados; métricas (Balance, Amount) calculam valores numéricos agregados.

4. **Interpolação linear corrige séries temporais:** Gráficos temporais suavizados precisam interpolação linear para evitar quedas artificiais abaixo de zero quando há datas sem dados.

5. **Controles criam interatividade:** Controle de período permite análise dinâmica, mas precisa período padrão configurado (datas início/término) para funcionar corretamente.

---

## 15. Palavras-Chave

Google Drive, Google Planilhas, Looker Studio, CSV, Formatação de dados, Texto Simples, Formato Moeda, BRL, Dimensão, Métrica, Campo Calculado, Agregação, AVG, SUM, MAX, MIN, Tabela, Scorecard, Visão Geral, Série Temporal, Suavizada, Interpolação Linear, Dados Ausentes, Controle de Período, Período Automático, Layout, Compartilhamento Público, Transaction Amount, Balance, Date, Description, Memo, Transaction Number
