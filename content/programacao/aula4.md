DISCIPLINA: Introdução à Programação com Python  
PROFESSOR: Gesiel Lopes  
DATA DA AULA: 04/02/2026  
TEMA DA AULA: Recapitulação de variáveis e tipos, conversão de tipos, operadores aritméticos  
TIPO: Aula técnica/híbrida  
ORIGEM: https://drive.google.com/file/d/1KcqmU5dC7vmfv2Zvysjl2PXvTuqwN52c/view

---

# Aula 4 — Introdução à Programação com Python (Etapa 2)

## 1 Tema e Escopo

- **Tema**: Recapitulação de variáveis e tipos básicos, conversão de tipos (`int`, `float`, `bool`, `str`), operadores aritméticos e precedência.
- **Problema que resolve**: O aluno precisa saber:
  - consolidar conceito de variável e tipos em memória,
  - converter tipos de forma explícita quando necessário,
  - evitar `ValueError` em conversões inválidas,
  - usar operadores aritméticos e entender precedência.
- **Para que serve**:
  - manipular dados numéricos,
  - combinar tipos em operações,
  - escrever cálculos corretos em Python.
- **Inclui**:
  - recapitulação de variáveis, tipos, tipagem dinâmica,
  - funções de conversão: `int()`, `float()`, `bool()`, `str()`,
  - tipagem forte e `ValueError`,
  - sete operadores aritméticos: `+`, `-`, `*`, `/`, `//`, `%`, `**`,
  - precedência e ordem de operações,
  - exercícios de aplicação (conversão °C→°F, área, média, etc.).
- **Não inclui**:
  - operadores lógicos ou de comparação,
  - estruturas de controle (if, for),
  - entrada de usuário (`input`).

---

## 2 Contexto na Disciplina

- **Onde entra**:
  - Quarto encontro; continuação da Etapa 2.
  - Recapitulação da aula 3 e extensão para conversões e operadores.
- **Pré-requisitos**:
  - Variáveis, tipos básicos (int, float, bool, str), `type()`, tipagem dinâmica.
- **Dependências futuras**:
  - Operadores usados em condições e laços.
  - Conversão de tipos necessária em leitura de arquivos e inputs.

---

## 3 Visão Conceitual Geral

- **Variável** = espaço na memória para armazenar um valor; o valor pode mudar durante a execução.
- **Tipo** = semântica do valor (inteiro, decimal, booleano, texto); determina quanto espaço ocupa e como é operado.
- **Conversão de tipos** = transformar um valor de um tipo em outro via funções (`int()`, `float()`, etc.).
- **Python** tem tipagem dinâmica (o interpretador infere o tipo) e **tipagem forte** (só permite operações entre tipos compatíveis; conversões inválidas geram `ValueError`).
- **Operadores aritméticos** atuam sobre tipos numéricos; a ordem de avaliação segue precedência (parênteses, exponenciação, mult/div/módulo, soma/subtração).

---

## 4 Ideias-Chave (máx. 7)

1. **Variável e espaço em memória**
   - **Importância**: base para entender alocação e tipo.
   - **Em prova**: definição; relação tipo ↔ espaço ocupado.
   - **Na prática**: tipos ocupam quantidades diferentes de memória (int < float < str).
   - **Se não entender**: confusão sobre por que tipos existem.

2. **Conversão explícita com funções built-in**
   - **Importância**: permite usar dados em operações de outro tipo.
   - **Em prova**: identificar qual função usar; prever resultado de conversão.
   - **Na prática**: `input()` retorna string; para cálculos, converter com `int()` ou `float()`.
   - **Se não entender**: `TypeError` ou `ValueError` em tempo de execução.

3. **Tipagem forte e ValueError**
   - **Importância**: Python não converte automaticamente strings com texto em número.
   - **Em prova**: prever erro ao fazer `float('texto')`; explicar por que ocorre.
   - **Na prática**: validar entrada antes de converter; tratar exceções.
   - **Se não entender**: bug ao converter dados vindos de usuário ou arquivo.

4. **int() truncando floats**
   - **Importância**: `int(12.98)` retorna `12`, não arredonda.
   - **Em prova**: qual valor de `int(7.9)`? → 7.
   - **Na prática**: usar `round()` se precisar arredondar.
   - **Se não entender**: resultados incorretos em cálculos com parte inteira.

5. **Divisão `/` vs divisão inteira `//`**
   - **Importância**: `/` retorna float; `//` retorna parte inteira (piso).
   - **Em prova**: diferença entre `17/4` e `17//4`; `17%4` (resto).
   - **Na prática**: `//` e `%` úteis em contagens e quebras de unidade.
   - **Se não entender**: confusão entre 4.25 e 4; erro ao calcular restos.

6. **Módulo `%` e exponenciação `**`**
   - **Importância**: `%` = resto da divisão; `**` = potência.
   - **Em prova**: calcular resto; potência (ex.: `2**10`).
   - **Na prática**: par/ímpar (`n%2`), extrair dígitos, potências.
   - **Se não entender**: não consegue resolver exercícios com resto ou potência.

7. **Precedência de operadores**
   - **Importância**: ordem afeta resultado de expressões compostas.
   - **Em prova**: avaliar expressão como `2 + 3 * 4`; usar parênteses para alterar ordem.
   - **Na prática**: parênteses para deixar intenção explícita.
   - **Se não entender**: resultados inesperados em expressões mistas.

---

## 5 Conceitos Essenciais — Explicação Operacional

### Conceito 1 — Variável, tipo e memória

- **Definição operacional**:
  - Variável = nome que referencia um valor em memória.
  - Tipo = como o valor é interpretado (int, float, bool, str).
  - O valor ocupa espaço; o nome é um literal (identificador).
- **Explicação progressiva**:
  - Python reserva blocos de memória conforme o tipo.
  - O tipo define quantos blocos ocupam (int menos, str mais, conforme tamanho).
- **Quando usar**:
  - Sempre que criar variável; ao explicar alocação.
- **Quando NÃO usar**:
  - N/A.
- **Como reconhecer**:
  - `type(x)` retorna o tipo; variável é o nome à esquerda do `=`.

❌ **Erro comum**: confundir nome da variável com tipo ou valor.

🛠️ **Aplicação mínima correta**:
```python
var1 = 27      # int, ocupa menos espaço
var2 = "python"  # str, ocupa mais espaço
print(type(var1), var1)
print(type(var2), var2)
```

---

### Conceito 2 — Funções de conversão: int(), float(), bool(), str()

- **Definição operacional**:
  - `int(x)` → converte para inteiro.
  - `float(x)` → converte para ponto flutuante.
  - `bool(x)` → converte para booleano.
  - `str(x)` → converte para string.
- **Explicação progressiva**:
  - São funções built-in; não precisa importar.
  - Funcionam com variável ou valor literal: `str(12)`, `float("3.14")`.
- **Quando usar**:
  - Quando precisar operar com outro tipo (ex.: string numérica → float).
- **Quando NÃO usar**:
  - Quando o tipo já for o desejado.
- **Como reconhecer**:
  - Chamada com o valor entre parênteses: `int(variavel)`.

❌ **Erro comum**: esperar arredondamento em `int(7.9)` → retorna 7 (trunca).

⚠️ **Pegadinha de prova**: "Qual o resultado de `str(False)`?" → `'False'` (string).

🛠️ **Aplicação mínima correta**:
```python
# int -> str
var_numerica = 12
var_str = str(var_numerica)
print(type(var_numerica), var_numerica)   # <class 'int'> 12
print(type(var_str), var_str)             # <class 'str'> 12

# float -> int (trunca)
primeira = 12.987645
convertida = int(primeira)
print(convertida)  # 12

# str numérica -> float
primeira = '98874368768'
convertida = float(primeira)
print(convertida)  # 98874368768.0

# bool -> str
primeira = False
convertida = str(primeira)
print(convertida)  # False
```

---

### Conceito 3 — Tipagem forte e ValueError

- **Definição operacional**:
  - Python só converte quando há mapeamento claro (ex.: string com dígitos → número).
  - String com texto não numérico → `float()` ou `int()` gera `ValueError`.
- **Explicação progressiva**:
  - `float('98874')` funciona (string com número).
  - `float('se aqui tiver um texto, o que acontece?')` → `ValueError`.
- **Quando usar**:
  - Ao converter entrada de usuário ou de arquivo; validar antes.
- **Quando NÃO usar**:
  - N/A.
- **Como reconhecer**:
  - Mensagem: `ValueError: could not convert string to float: '...'`.

❌ **Erro comum**: converter string com texto sem validar; programa para na linha da conversão.

⚠️ **Pegadinha de prova**: "O que acontece com `float('abc')`?" → `ValueError`.

🛠️ **Aplicação mínima correta**:
```python
# Conversão válida
x = float('3.14')  # OK

# Conversão inválida - gera erro
# x = float('texto aqui')  # ValueError
# O código abaixo da linha do erro NÃO é executado
```

🧪 **Como testar entendimento**: Qual conversão funciona? `int('42')`, `int('4.2')`, `float('4.2')`? (Resposta: `int('42')` e `float('4.2')`; `int('4.2')` dá `ValueError`.)

---

### Conceito 4 — Operadores aritméticos

- **Definição operacional**:
  - `+` soma | `-` subtração | `*` multiplicação | `/` divisão (float) | `//` divisão inteira (piso) | `%` módulo (resto) | `**` exponenciação.
- **Explicação progressiva**:
  - Operam entre tipos numéricos (int, float).
  - `/` sempre retorna float (mesmo com inteiros); `//` retorna int.
- **Quando usar**:
  - Cálculos matemáticos; médias; contagens.
- **Quando NÃO usar**:
  - Em strings sem conversão (ex.: `"5" + 3` → TypeError).
- **Como reconhecer**:
  - Símbolos entre operandos; resultado depende dos tipos.

❌ **Erro comum**: confundir `/` com `//`; usar `^` para potência (em Python é `**`).

🛠️ **Aplicação mínima correta**:
```python
valor1 = 17
valor2 = 4

piso = valor1 // valor2    # 4 (parte inteira)
resto = valor1 % valor2    # 1 (resto)
potencia = valor1 ** valor2  # 83521
divisao = valor1 / valor2  # 4.25
```

---

### Conceito 5 — Precedência e ordem de operações

- **Definição operacional**:
  - Ordem (maior → menor): 1) Parênteses `()`; 2) Exponenciação `**`; 3) Multiplicação `*`, Divisão `/`, Divisão inteira `//`, Módulo `%` (esquerda→direita); 4) Adição `+`, Subtração `-`.
- **Explicação progressiva**:
  - `2 + 3 * 4` = 14 (não 20).
  - `(2 + 3) * 4` = 20.
- **Quando usar**:
  - Ao escrever expressões compostas; para evitar ambiguidade.
- **Quando NÃO usar**:
  - N/A.
- **Como reconhecer**:
  - Resultado depende da ordem; parênteses forçam avaliação primeiro.

⚠️ **Pegadinha de prova**: "Quanto vale `2**2**3`?" → avaliado como `2**(2**3)` = 256.

---

## 6 Procedimento / Execução

**Conversão de tipo:**
1. Identificar o tipo atual (use `type()` se necessário).
2. Escolher a função: `int()`, `float()`, `bool()` ou `str()`.
3. Chamar a função passando o valor: `float(variavel)`.
4. Atribuir o resultado a uma variável ou usar diretamente.

❌ **Erro típico**: converter string com texto → `ValueError`; execução para na linha da conversão.

📏 **Evidência de acerto**: conversão retorna valor esperado; `type()` confirma o tipo.

**Operação aritmética:**
1. Garantir que operandos são numéricos (int ou float).
2. Escolher o operador correto (`/` vs `//`, etc.).
3. Usar parênteses se a ordem padrão não for a desejada.

❌ **Erro típico**: misturar string e número sem conversão → `TypeError`.

---

## 7 Exemplos Relevantes

### Exemplo 1 — Conversões da aula

```python
# numero -> str
variavel_numerica = 12
convertida_str = str(variavel_numerica)

# float -> int (trunca)
primeira = 12.987645018233080534
convertida = int(primeira)  # 12

# str -> float (string numérica)
primeira = '98874368768'
convertida = float(primeira)  # 98874368768.0

# boolean -> str
primeira = False
convertida = str(primeira)  # 'False'
```

### Exemplo 2 — ValueError (str com texto → float)

```python
# O que acontece?
primeira_variavel = 'se aqui tiver um texto, o que acontece?'
variavel_convertida = float(primeira_variavel)
# ValueError: could not convert string to float: 'se aqui tiver um texto, o que acontece?'
# Linhas abaixo NÃO executam
```

### Exemplo 3 — Operadores com notas

```python
nota_matematica = 6.8
nota_programacao = 8.1

soma = nota_matematica + nota_programacao
subtracao = nota_matematica - nota_programacao
multiplicacao = nota_matematica * nota_programacao
divisao = nota_matematica / nota_programacao
# soma: 14.899999999999999 (precisão de float)
# divisao: 0.8395061728395062
```

### Exemplo 4 — Divisão inteira, módulo e exponenciação

```python
valor1 = 17
valor2 = 4

piso = valor1 // valor2      # 4
resto = valor1 % valor2      # 1
potencia = valor1 ** valor2  # 83521
divisao = valor1 / valor2    # 4.25
```

---

## 8 Diferenças e Confusões Comuns

| Conceito A | Conceito B | Distinção crítica |
|------------|------------|-------------------|
| `int(7.9)` | `round(7.9)` | `int` trunca (7); `round` arredonda (8). |
| `/` | `//` | `/` retorna float; `//` retorna parte inteira. |
| `//` | `%` | `//` = quociente inteiro; `%` = resto. |
| Tipagem dinâmica | Tipagem forte | Dinâmica: tipo inferido; Forte: conversões inválidas geram erro. |
| Conversão válida | Conversão inválida | `float('3.14')` OK; `float('abc')` → ValueError. |
| Ponto `.` | Vírgula `,` | Python usa ponto para decimal; vírgula em número gera erro ou tupla. |

---

## 9 Como Cai em Prova

- **Formato típico**: múltipla escolha, V/F, completar código, prever saída.
- **Tipos de enunciado**:
  - "Qual o resultado de `int(8.7)`?" → 8.
  - "O que acontece com `float('texto')`?" → ValueError.
  - "Qual a diferença entre `17/4` e `17//4`?" → 4.25 vs 4.
  - "Quanto vale `17 % 4`?" → 1.
  - "Python tem tipagem forte?" → Sim.
- **Erro cobrado**: confundir `/` e `//`; esperar arredondamento em `int()`.
- **Armadilha comum**: "Qualquer string pode ser convertida para float" → Falso.

---

## 10 Pontos de Atenção

1. **Ponto decimal**: use `.` (não `,`) em floats.
2. **`int()` trunca**: não arredonda; use `round()` se precisar.
3. **`float('texto')`** gera `ValueError`; validar antes.
4. **`/`** sempre retorna float; `//` retorna int.
5. **Ordem de execução**: em erro de conversão, linhas seguintes não rodam.
6. **Qualquer valor → str** funciona; **str com texto → número** nem sempre.
7. **Parênteses** para controlar precedência em expressões compostas.

---

## 11 Checklist de Domínio

- [ ] Sei explicar variável, tipo e espaço em memória.
- [ ] Sei usar `int()`, `float()`, `bool()`, `str()` para converter tipos.
- [ ] Sei prever quando `float(s)` ou `int(s)` gera `ValueError`.
- [ ] Sei diferenciar `/` e `//` e `%`.
- [ ] Sei calcular resto e parte inteira da divisão.
- [ ] Sei usar `**` para potência.
- [ ] Sei explicar precedência básica (parênteses, mult/div, soma/sub).
- [ ] Sei evitar erro ao misturar string e número em operações.

---

## 12 Auto-Teste

1. O que imprime `print(int(9.99))`? E `print(str(True))`?
2. O que acontece ao executar `float('olá')`? Por quê?
3. Calcule: `17 // 4`, `17 % 4`, `17 / 4`. Qual a diferença?
4. Qual o resultado de `2 + 3 * 4`? E de `(2 + 3) * 4`?
5. Converta 25°C para °F usando a fórmula F = C * 9/5 + 32. Escreva o código mínimo.

**Exercícios da aula:**
- Converta °C para °F (fórmula: F = C × 9/5 + 32).
- Calcule área e perímetro de um retângulo (largura e altura).
- Calcule: média, média geométrica, desvio padrão, dobro da soma, triplo do produto e raiz quadrada da soma dos quadrados de três números.

---

## 13 Resumo Estratégico Consolidado

- Variável = espaço em memória; tipo define semântica e tamanho.
- Conversão: `int()`, `float()`, `bool()`, `str()`; Python tem tipagem forte.
- `float('texto')` → ValueError; string deve ter formato numérico.
- `int()` trunca; `round()` arredonda.
- Operadores: `+`, `-`, `*`, `/`, `//`, `%`, `**`.
- `/` → float; `//` → parte inteira; `%` → resto.
- Precedência: parênteses > ** > * / // % > + -.
- Qualquer valor → str; str com texto → número nem sempre.

---

## 14 Resumo em 5 Linhas

1. Conversão: `int()`, `float()`, `bool()`, `str()`; `float('texto')` gera `ValueError`.
2. `int(7.9)` = 7 (trunca); use `round()` para arredondar.
3. `/` = divisão float; `//` = parte inteira; `%` = resto.
4. `**` = potência; precedência: `()` > `**` > `*` `/` `//` `%` > `+` `-`.
5. Python: tipagem dinâmica + tipagem forte; operações só entre tipos compatíveis.

---

## 15 Palavras-Chave

Variável, tipo, memória, literal, conversão, int(), float(), bool(), str(), tipagem forte, ValueError, truncar, operador aritmético, soma, subtração, multiplicação, divisão, divisão inteira, piso, módulo, resto, exponenciação, precedência, built-in.
