DISCIPLINA: Introdução à Programação com Python  
PROFESSOR: Gesiel Lopes  
DATA DA AULA: 02/02/2026  
TEMA DA AULA: Ambiente Deepnote, comentários, variáveis, tipos básicos e convenções de código em Python  
TIPO: Aula expositiva/prática  
ORIGEM: https://drive.google.com/file/d/1QFoT6hyMZw8zRJZ7XgkfM47jeh19thC3/view

---

# Aula 3 — Introdução à Programação com Python (Etapa 2)

## 1 Tema e Escopo

- **Tema**: Ambiente Deep Note, comentários, variáveis, tipos de dados básicos e convenções de código em Python.
- **Problema que resolve**: O aluno precisa saber:
  - usar o ambiente de desenvolvimento (Deep Note),
  - documentar código com comentários,
  - criar e nomear variáveis corretamente,
  - distinguir tipos de dados (int, float, bool, str),
  - entender tipagem dinâmica e boas práticas.
- **Para que serve**:
  - operar o Deep Note com segurança (salvar, persistir, máquina),
  - escrever código legível e documentado,
  - armazenar e manipular dados em memória.
- **Inclui**:
  - visão geral do Deep Note (workspace, blocos, terminal, provisionamento),
  - alternativas (Anaconda, Google Colab, VS Code),
  - Markdown em notebooks,
  - Zen do Python,
  - comentários de linha e docstring,
  - variáveis, atribuição, regras de nomenclatura,
  - tipos básicos (int, float, bool, str),
  - tipagem dinâmica,
  - funções built-in (type, help, dir),
  - PEP 8 e convenções.
- **Não inclui**:
  - operadores aritméticos e lógicos,
  - conversão de tipos,
  - estruturas de controle (if, for),
  - manipulação de arquivos.

---

## 2 Contexto na Disciplina

- **Onde entra**:
  - Terceiro encontro; primeira aula da Etapa 2.
  - Constrói sobre Hello World e noções de algoritmo/programa da Etapa 1.
- **Pré-requisitos**:
  - Conceito de programa e algoritmo.
  - Uso básico do Deep Note (criar projeto, executar célula).
- **Dependências futuras**:
  - Operadores e estruturas de controle dependem de variáveis e tipos.
  - Conversão de tipos será vista em aula posterior.

---

## 3 Visão Conceitual Geral

- O Deep Note é um ambiente SaaS de notebooks (código + texto) para Python e Data Science, pré-configurado, sem instalação local.
- **Variável** = abstração de um local na memória onde se armazena um valor; o valor pode mudar ao longo da execução.
- **Tipo de dado** = significado/semântica do valor (int, float, bool, str), usado pelo computador para otimizar armazenamento e operações.
- **Python** usa tipagem dinâmica (o interpretador define o tipo pelo valor) e segue o Zen do Python (explícito, simples, legível).
- Código sem comentário é difícil de manter; nomes de variáveis explícitos melhoram leitura e depuração.

---

## 4 Ideias-Chave (máx. 7)

1. **Deep Note: ambiente provisionado e perda de dados em memória**
   - **Importância**: evita frustração por perda de trabalho.
   - **Em prova**: questões sobre o que se perde ao desligar a máquina (Ctrl+S salva notebook; variáveis/dados em memória se perdem).
   - **Na prática**: sempre salvar o notebook; usar integrações para persistir arquivos gerados.
   - **Se não entender**: risco de perder horas de trabalho ao parar a máquina.

2. **Comentários: linha (#) e docstring (""")**
   - **Importância**: documenta lógica e evita que texto seja interpretado como código.
   - **Em prova**: erro de sintaxe ao escrever texto sem # ou docstring.
   - **Na prática**: explicar trechos complexos; usar docstrings em funções (futuro).
   - **Se não entender**: código ilegível; erros de sintaxe ao colocar explicação direta no código.

3. **Variável = abstração de memória + valor**
   - **Importância**: base de todo programa; armazena dados para reutilização.
   - **Em prova**: definição; atribuição; redefinição (valor e tipo podem mudar).
   - **Na prática**: guardar resultados intermediários; reaproveitar valores.
   - **Se não entender**: não consegue construir programas não triviais.

4. **Nomenclatura: regras rígidas e convenções (snake_case)**
   - **Importância**: código inválido vs código feio; legibilidade.
   - **Em prova**: identificação de nomes inválidos; snake_case para palavras compostas.
   - **Na prática**: variáveis claras; menos bugs por erro de digitação.
   - **Se não entender**: SyntaxError em nomes inválidos; código pouco profissional.

5. **Tipos básicos: int, float, bool, str**
   - **Importância**: operações e formatação dependem do tipo.
   - **Em prova**: reconhecer tipo de variável; quando usar cada um.
   - **Na prática**: escolher o tipo correto para cada dado.
   - **Se não entender**: erros em operações; comportamento inesperado.

6. **Tipagem dinâmica**
   - **Importância**: Python define o tipo automaticamente; não é preciso declarar.
   - **Em prova**: diferença entre tipagem dinâmica e estática; mudança de tipo ao reatribuir.
   - **Na prática**: flexibilidade; cuidado para não misturar tipos sem intenção.
   - **Se não entender**: confusão ao comparar com Java/C; dúvidas sobre quando declarar tipo.

7. **Zen do Python e PEP 8**
   - **Importância**: guia de estilo e filosofia da linguagem.
   - **Em prova**: princípios do Zen; convenções de nomenclatura.
   - **Na prática**: código consistente e legível.
   - **Se não entender**: código funcional mas difícil de ler e manter.

---

## 5 Conceitos Essenciais — Explicação Operacional

### Conceito 1 — Deep Note: Workspace, blocos e máquina

- **Definição operacional**:
  - Workspace = área principal onde se desenvolvem os notebooks.
  - Blocos: código (Python, SQL, gráficos, inputs) e texto (Markdown).
  - Máquina provisionada: ambiente Linux com Python 3.11 Data Science (configuração básica: 2 CPUs, 5 GB RAM).
- **Explicação progressiva**:
  - Deep Note é SaaS (Software as a Service), não VPS/VPN.
  - Ao Start Machine, o ambiente é provisionado; ao Stop ou ociosidade prolongada, recursos são liberados.
  - Dados em memória (variáveis, arquivos temporários) se perdem; o notebook (código e texto) persiste se salvo.
- **Quando usar**:
  - Para rodar notebooks Python na disciplina; salvar com Ctrl+S.
- **Quando NÃO usar**:
  - Para persistir arquivos gerados pelo código sem usar integrações (ex.: upload para storage).
- **Como reconhecer**:
  - Interface com blocos, área de terminal, opção Start/Stop Machine.
- **Relação com outros conceitos**:
  - Variáveis criadas em células vivem em memória até a máquina ser desligada.

❌ **Erro comum**: assumir que arquivos ou variáveis permanecem após Stop Machine sem persistência explícita.

🛠️ **Aplicação mínima correta**:
  - Abrir Deep Note → Start Machine → criar célula → escrever código → executar → Ctrl+S → fechar.

---

### Conceito 2 — Comentários de linha (#) e docstring (""")

- **Definição operacional**:
  - Comentário de linha: tudo após `#` na mesma linha é ignorado pelo interpretador.
  - Docstring: texto entre `"""` ou `'''` (três aspas); funciona como comentário de múltiplas linhas.
- **Explicação progressiva**:
  - Texto sem `#` é interpretado como código → SyntaxError.
  - Docstring aceita aspas simples ou duplas; serve para documentar módulos/funções.
- **Quando usar**:
  - Explicar trechos complexos; documentar funções; desativar código temporariamente.
- **Quando NÃO usar**:
  - Para código executável.
- **Como reconhecer**:
  - Linha que começa ou termina com `#`; bloco entre `"""` ou `'''`.

❌ **Erro comum**: escrever explicação sem `#` e receber SyntaxError.

⚠️ **Pegadinha de prova**: "O que acontece ao executar `comentário sem #`?" → SyntaxError.

🛠️ **Aplicação mínima correta**:
```python
# isso é comentário
print("Hello")  # comentário no fim da linha

"""
Comentário
de múltiplas
linhas
"""
```

---

### Conceito 3 — Variável e atribuição

- **Definição operacional**:
  - Variável = nome que referencia um valor em memória.
  - Atribuição: `nome = valor`; o operador `=` atribui o valor à variável.
- **Explicação progressiva**:
  - Python reserva espaço em memória para o valor; o nome é um identificador.
  - Redefinir a mesma variável substitui o valor; execução é de cima para baixo.
- **Quando usar**:
  - Para guardar resultados, parâmetros, constantes nomeadas.
- **Quando NÃO usar**:
  - Palavras reservadas como nome (import, def, if, etc.).
- **Como reconhecer**:
  - Forma `identificador = expressão`.

❌ **Erro comum**: confundir `=` (atribuição) com igualdade matemática; usar nome inválido.

🛠️ **Aplicação mínima correta**:
```python
x = 10
x = 20   # substitui; x agora é 20
```

---

### Conceito 4 — Regras de nomenclatura de variáveis

- **Definição operacional**:
  - O nome deve começar com letra ou underscore (`_`).
  - Pode continuar com letras, dígitos ou underscore.
  - Não pode ser palavra reservada (import, def, if, True, False, etc.).
- **Explicação progressiva**:
  - Inválidos: `1var`, `@var`, `var nome` (espaço).
  - Válidos: `var`, `outra_variavel`, `_privada`.
- **Quando usar**:
  - Sempre que criar variável.
- **Quando NÃO usar**:
  - Palavras reservadas; números no início; caracteres especiais (exceto `_`).
- **Como reconhecer**:
  - SyntaxError em nome inválido.

❌ **Erro comum**: `1var = 10` → SyntaxError.

🛠️ **Aplicação mínima correta**:
```python
variavel_valida = 1
outra_variavel = "texto"
```

---

### Conceito 5 — Convenção snake_case e case sensitivity

- **Definição operacional**:
  - snake_case: palavras compostas separadas por `_` (ex.: `minha_variavel`).
  - Python é case sensitive: `var` ≠ `Var` ≠ `VAR`.
- **Explicação progressiva**:
  - Convenção, não regra sintática; melhora legibilidade.
  - Java usa camelCase; Python recomenda snake_case para variáveis.
- **Quando usar**:
  - Nomes compostos em variáveis e funções.
- **Quando NÃO usar**:
  - camelCase em variáveis (não gera erro, mas foge da convenção).
- **Como reconhecer**:
  - Código Python típico com `minha_variavel`.

---

### Conceito 6 — Tipos básicos: int, float, bool, str

- **Definição operacional**:
  - **int**: números inteiros (ex.: 1, -5, 0).
  - **float**: números com casas decimais (ex.: 1.3, -0.5).
  - **bool**: True ou False.
  - **str**: cadeia de caracteres entre `'` ou `"`.
- **Explicação progressiva**:
  - O tipo define como o valor é armazenado e operado.
  - str aceita aspas simples ou duplas; semanticamente equivalentes.
- **Quando usar**:
  - int: contagens, índices; float: medições; bool: condições; str: texto.
- **Quando NÃO usar**:
  - str para operações numéricas sem conversão; int para decimais exatos.
- **Como reconhecer**:
  - `type(x)` retorna `<class 'int'>`, `<class 'float'>`, `<class 'bool'>`, `<class 'str'>`.

❌ **Erro comum**: misturar tipos em operações sem conversão (ex.: "5" + 3).

🛠️ **Aplicação mínima correta**:
```python
a = 10        # int
b = 1.5       # float
c = True      # bool
d = "texto"   # str
print(type(a), type(b), type(c), type(d))
```

---

### Conceito 7 — Tipagem dinâmica

- **Definição operacional**:
  - O interpretador define o tipo pelo valor atribuído; não é necessário declarar tipo.
  - A mesma variável pode receber valores de tipos diferentes em momentos distintos.
- **Explicação progressiva**:
  - `x = 1` → x é int; `x = False` → x passa a ser bool.
  - Linguagens de tipagem estática (ex.: Java) exigem declaração de tipo.
- **Quando usar**:
  - Sempre; Python não exige declaração.
- **Quando NÃO usar**:
  - N/A.
- **Como reconhecer**:
  - Ausência de declaração de tipo; `type()` mudando ao reatribuir.

⚠️ **Pegadinha de prova**: "O que imprime `type(x)` após `x = 1` e depois `x = False`?" → primeiro int, depois bool.

---

### Conceito 8 — Funções built-in: type, help, dir

- **Definição operacional**:
  - **type(x)**: retorna o tipo do objeto x.
  - **help(x)**: exibe documentação de x.
  - **dir(x)**: lista atributos e métodos de x.
- **Explicação progressiva**:
  - São funções que vêm com o interpretador.
  - Úteis para depuração e aprendizado.
- **Quando usar**:
  - type: verificar tipo; help: consultar uso; dir: explorar objetos.
- **Quando NÃO usar**:
  - Para lógica de programa (type em excesso pode indicar design ruim).
- **Como reconhecer**:
  - Chamadas sem import prévio: `type(10)`, `help(print)`.

---

## 6 Procedimento / Execução

Não há procedimento único nesta aula; os conceitos são usados ao longo do desenvolvimento. Fluxo típico:

1. Abrir Deep Note e iniciar a máquina.
2. Criar bloco de código.
3. Escrever variáveis, comentários e tipos.
4. Executar célula (Ctrl+Enter ou Shift+Enter).
5. Salvar notebook (Ctrl+S).
6. Parar máquina ao finalizar (opcional; variáveis em memória serão perdidas).

❌ **Erro típico**: não salvar antes de fechar ou parar a máquina.

🛠️ **Evidência de acerto**: código executa sem SyntaxError; variáveis retornam valores esperados com `print()` e `type()`.

---

## 7 Exemplos Relevantes

### Exemplo 1 — Comentários

```python
# Comentário de linha
print("Hello")  # comentário no fim

"""
Docstring como
comentário de
múltiplas linhas
"""
print("Fim")
```

### Exemplo 2 — Variáveis válidas e inválidas

```python
# Válidas
var = 1
outra_variavel = "texto"
_var = True

# Inválidas (SyntaxError)
# 1var = 1
# var nome = 1
# import = 1
```

### Exemplo 3 — Tipos e type()

```python
var_int = 10
var_float = 1.3
var_bool = True
var_str = "Introdução à programação"

print(type(var_int))   # <class 'int'>
print(type(var_float)) # <class 'float'>
print(type(var_bool))  # <class 'bool'>
print(type(var_str))   # <class 'str'>
```

### Exemplo 4 — Tipagem dinâmica

```python
dinamica = 1
print(type(dinamica))  # <class 'int'>

dinamica = False
print(type(dinamica))  # <class 'bool'>
```

### Exemplo 5 — Zen do Python

```python
import this
# Exibe os princípios do Zen (bonito > feio, explícito > implícito, simples > complexo, etc.)
```

---

## 8 Diferenças e Confusões Comuns

| Conceito A | Conceito B | Distinção crítica |
|------------|------------|-------------------|
| `=` (atribuição) | `==` (igualdade) | `=` atribui; `==` compara (aula futura). |
| Comentário `#` | Docstring `"""` | `#` = uma linha; `"""` = múltiplas linhas; ambos ignorados. |
| Aspas simples `'` | Aspas duplas `"` | Equivalentes para str; escolha por consistência. |
| Tipagem dinâmica | Tipagem estática | Python define tipo automaticamente; Java/C exigem declaração. |
| snake_case | camelCase | Python recomenda snake_case; Java usa camelCase. |
| Nome da variável | Tipo da variável | Nome = identificador no código; tipo = como o valor é tratado na memória. |

---

## 9 Como Cai em Prova

- **Formato típico**: questões objetivas ou Verdadeiro/Falso.
- **Tipos de enunciado**:
  - "O que acontece ao executar `1var = 10`?" → SyntaxError.
  - "Qual o tipo de `x` após `x = True`?" → bool.
  - "O que se perde ao desligar a máquina do Deep Note?" → Dados em memória (variáveis, arquivos temporários).
  - "Qual convenção para nomes compostos em Python?" → snake_case.
  - "Python é case sensitive?" → Sim.
- **Erro cobrado**: confundir atribuição com igualdade; usar nome inválido.
- **Armadilha comum**: "O tipo da variável não muda" → Falso; tipagem dinâmica permite mudança.

---

## 10 Pontos de Atenção

1. **Salvar o notebook** (Ctrl+S) antes de fechar ou parar a máquina.
2. **Não usar palavras reservadas** como nomes de variáveis.
3. **Nomes devem começar com letra ou underscore**, nunca com número.
4. **Python diferencia maiúsculas de minúsculas** (case sensitive).
5. **Redefinir variável** substitui valor e tipo; última atribuição vale.
6. **Dados em memória se perdem** ao desligar a máquina do Deep Note.
7. **Texto sem `#` ou docstring** gera SyntaxError se não for código válido.

---

## 11 Checklist de Domínio

- [ ] Sei explicar o que acontece ao Start/Stop Machine no Deep Note.
- [ ] Sei escrever comentário de linha e docstring.
- [ ] Sei definir variável e atribuir valor.
- [ ] Sei identificar nome de variável inválido.
- [ ] Sei aplicar snake_case em nomes compostos.
- [ ] Sei reconhecer os quatro tipos básicos (int, float, bool, str).
- [ ] Sei usar `type()` para verificar tipo.
- [ ] Sei explicar tipagem dinâmica.
- [ ] Sei citar ao menos 3 princípios do Zen do Python.

---

## 12 Auto-Teste

1. O que imprime `print(type(10))` e `print(type(10.0))`?
2. Por que `1var = 5` gera erro? Como corrigir?
3. Ao executar: `x = 1` e depois `x = "um"`, qual o tipo final de `x`?
4. O que acontece com variáveis criadas em células ao desligar a máquina do Deep Note?
5. Qual a diferença entre `var` e `Var` em Python?

---

## 13 Resumo Estratégico Consolidado

- Deep Note: ambiente SaaS; salvar notebook; dados em memória se perdem ao parar máquina.
- Comentários: `#` (linha) e `"""` (docstring).
- Variáveis: nome = valor; regras de nomenclatura; snake_case.
- Tipos: int, float, bool, str; `type()` para verificação.
- Tipagem dinâmica: tipo definido automaticamente; pode mudar ao reatribuir.
- Python case sensitive; palavras reservadas não podem ser nomes de variáveis.
- Zen do Python e PEP 8 orientam estilo e legibilidade.

---

## 14 Resumo em 5 Linhas

1. Deep Note provisiona máquina; variáveis e arquivos em memória se perdem ao desligar — salve o notebook.
2. Comentários: `#` para linha; `"""` para múltiplas linhas.
3. Variáveis: nome começa com letra ou `_`; use snake_case; não use palavras reservadas.
4. Tipos básicos: int, float, bool, str; `type()` retorna o tipo.
5. Python tem tipagem dinâmica e é case sensitive.

---

## 15 Palavras-Chave

Deep Note, workspace, comentário, docstring, variável, atribuição, snake_case, case sensitive, int, float, bool, str, type, tipagem dinâmica, Zen do Python, PEP 8, palavras reservadas, built-in, help, dir.
