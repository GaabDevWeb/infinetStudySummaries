DISCIPLINA: Introdução à Programação com Python  
PROFESSOR: Gesiel Lopes  
DATA DA AULA: 11/02/2026  
TEMA DA AULA: Strings – caracteres de escape, concatenação e repetição  
TIPO: Aula técnica/híbrida  
ORIGEM: https://drive.google.com/file/d/1khUck9pSFKbgXbKQ10x6wIS1ZbY5yPlx/view?usp=drivesdk


## 1. Tema e Escopo

**Tema:** Manipulação de Strings (`str`) em Python com foco em caracteres de escape, concatenação, repetição e impacto da tipagem forte.

**Problema que resolve:** Como representar e formatar textos em Python (quebras de linha, tabulação, aspas, barras) e como combinar Strings com outros tipos sem gerar erros de execução.

**Para que serve:**  
- Exibir textos formatados em terminal ou logs.  
- Escrever mensagens de saída mais legíveis.  
- Preparar-se para leitura de entrada do usuário e manipulação de dados textuais.

**Inclui (com base em transcrição + slides):**
- Definição prática de String como cadeia de caracteres.
- Caracteres de escape principais: `\n` (nova linha), `\t` (tabulação) e `\\` (barra invertida literal).
- Erros típicos com Strings e como o escape corrige (`SyntaxError` por aspas/barras).
- Strings brutas (`r'...'` / `r"..."`) e efeito sobre escapes.
- Operador `+` como concatenação de Strings.
- Operador `*` como repetição de Strings.
- Tipagem forte do Python: por que `int + str` gera `TypeError` e como converter tipos (`str()`, `int()`).
- Uso prático dos recursos para formatar saídas em terminal (linhas de separação, textos alinhados).

**Não inclui (mas aparece de leve):**
- Métodos de String (`.upper()`, `.split()`, etc.) – não abordados.  
- Formatação com `%`, `.format()` ou f-strings – no slide aparece `'123' % '456'` gerando erro, mas o operador `%` **não é explicado**; tratar como conteúdo não coberto nesta aula.  
- Entrada de dados (`input()`) – apenas mencionado como uso futuro.


## 2. Contexto na Disciplina

**Onde entra:** Sexto encontro. Continuação direta da introdução a Strings da aula anterior (formas de declarar Strings, aspas simples/duplas/triplas, conceito de objeto em memória).

**Pré-requisitos:**
- Saber declarar Strings com aspas simples, duplas e triplas.  
- Ter visto tipos básicos (`int`, `float`, `str`) e função `type()`.  
- Conhecer operadores aritméticos (`+`, `-`, `*`, `/`) em números.  
- Entender que Python é de **tipagem dinâmica** (tipo inferido em tempo de execução) e **tipagem forte** (não mistura tipos incompatíveis).

**Dependências futuras:**
- Formatação de mensagens de erro e logs.  
- Saída formatada em scripts de linha de comando.  
- Manipulação de texto em leitura/escrita de arquivos e entrada de usuário.  
- Construção de menus, relatórios simples em terminal e mensagens em aplicações interativas.


## 3. Visão Conceitual Geral

Uma **String** em Python é uma sequência de caracteres armazenada em memória. Quando escrevemos um texto entre aspas, o interpretador cria um **objeto `str`**.  
Para controlar **como esse texto aparece** (quebras de linha, tabulações, barras, aspas), Python usa **caracteres de escape**, que são combinações especiais começando com barra invertida (`\`).  
Além disso, os operadores `+` e `*` ganham **comportamento específico** quando usados com Strings: `+` deixa de ser “somar” e passa a significar “juntar textos”; `*` passa a significar “repetir texto”.  
Como a linguagem tem tipagem forte, misturar números e Strings diretamente nesses operadores causa erro – é preciso **converter explicitamente** os tipos conforme o objetivo (somar números ou concatenar textos).


## 4. Ideias-Chave (máx. 7)

| Ideia | Importância | Prova | Prática | Impacto de não entender |
|-------|-------------|-------|---------|-------------------------|
| 1. `\n` (nova linha) | Controla quebras de linha em Strings | Pode cair pedindo saída com linhas separadas | Formatção de mensagens, relatórios em terminal | Saída “tudo em uma linha”, ilegível |
| 2. `\t` (tabulação) | Ajuda a alinhar colunas de texto | Questões de formatação / alinhamento | Tabelas simples, listagem de dados | Textos desalinhados, difíceis de ler |
| 3. `\\` e escape de aspas | Permite mostrar barra invertida e aspas literais sem erro | Pergunta conceitual ou código com `SyntaxError` | Exibir caminhos, exemplos de código, textos com citações | `SyntaxError: unterminated string literal` |
| 4. Strings brutas (`r'...'`) | Desliga a interpretação de escapes | Conceito cobrado de forma teórica | Expressões regulares, caminhos Windows, texto “literal” | Erros ao lidar com muitas barras (`\`) |
| 5. `+` como concatenação | Junta várias Strings em uma só | Muito provável em prova prática | Montar mensagens dinâmicas | `TypeError` ao misturar tipos, textos mal formatados |
| 6. `*` como repetição de String | Gera padrões e separadores rapidamente | Pode aparecer em questões sobre operadores “coringa” | Criar linhas de separação, banners de texto | Código verboso repetindo caracteres manualmente |
| 7. Tipagem forte em `int + str` | Explica por que certas somas falham | Questões de erro de execução | Misturar dados numéricos e textos | Sistema quebra em tempo de execução com `TypeError` |


## 5. Conceitos Essenciais — Explicação Operacional

### 5.1 Caracter de escape `\n` (nova linha)

**Definição operacional:**  
`\n` dentro de uma String indica **quebra de linha**. Ao imprimir essa String, tudo após o `\n` aparece na **linha seguinte**.

```python
loren = 'Sed do eiusmod tempor\nincididunt ut labore'
print(loren)
```

Saída:

```text
Sed do eiusmod tempor
incididunt ut labore
```

- **Quando usar:** Sempre que quiser **continuar o texto na linha de baixo** sem criar várias Strings separadas ou usar docstring.
- **Quando NÃO usar:** Em docstrings (`'''...'''` ou `"""..."""`) quando você já está quebrando linhas “no olho”; duplicar `\n` aí costuma ser redundante.
- **Como reconhecer:** Em exemplos da aula, o professor substitui vírgulas e pontos de um texto longo por `\n` para marcar onde deve haver quebra de parágrafo.

❌ **Erro comum real:** Escrever `'/n'` em vez de `'\n'` ou esquecer de colocar o `\n`, esperando que a quebra de linha do editor seja respeitada automaticamente (Python não quebra linha em String comum).  
⚠️ **Pegadinha de prova:** Mostrar duas saídas possíveis e perguntar qual corresponde ao código com `\n` nos lugares corretos.  
🧪 **Como testar entendimento:** Dado um texto longo em uma linha, o aluno deve inserir `\n` em pontos específicos para reproduzir um parágrafo formatado.  
🛠️ **Aplicação mínima correta (passos):**
1. Identificar onde o texto deve “pular de linha”.
2. Inserir `\n` no lugar exato dentro da String.
3. Executar `print(texto)` e verificar visualmente.
📏 **Critério de acerto:** Cada `\n` gera exatamente uma nova linha na saída, nas posições combinadas.


### 5.2 Caracter de escape `\t` (tabulação)

**Definição operacional:**  
`\t` insere uma **tabulação horizontal** (vários espaços de uma vez) que ajuda a alinhar colunas de texto.

```python
print('Lorem Ipsum:\t123')
print('Lorem:\t\t123')
print('IIII:\t123')
```

Saída típica (aproximada):

```text
Lorem Ipsum:    123
Lorem:          123
IIII:           123
```

- **Quando usar:** Para criar **colunas alinhadas** em listas, tabelas simples e relatórios de terminal.
- **Quando NÃO usar:** Para alinhar código Python (indentação); aí se usa espaços reais, não `\t` dentro de Strings.
- **Como reconhecer:** No slide, o professor mostra vários `print()` com e sem `\t` e discute por que o alinhamento parece diferente.

❌ **Erro comum real:** Confundir tabulação de **código** (indentação de blocos `if`, `for`, etc.) com tabulação **dentro da String**. Outra falha é achar que `\t` ocupa sempre o mesmo número de caracteres (o efeito depende do terminal/fonte).  
⚠️ **Pegadinha de prova:** Questão pedindo “alinhar os valores na mesma coluna” – a alternativa correta usa `\t` ou combinações de espaços, não apenas `print()` separados.  
🛠️ **Aplicação mínima correta (passos):**
1. Escolher rótulos (ex.: `Nome:`, `Idade:`).  
2. Inserir `\t` entre o rótulo e o valor: `print('Nome:\t', nome)`.  
3. Testar com rótulos de tamanhos diferentes e ajustar número de `\t` se necessário.  
📏 **Critério de acerto:** Valores importantes (números, campos) começam aproximadamente sob a mesma coluna visual.


### 5.3 Escape de barra invertida e aspas (`\\`, `\'`, `\"`)

**Definição operacional:**  
Se você precisa **mostrar** caracteres que normalmente têm função especial (barra invertida `\` e aspas), é preciso **escapá-los**:
- `\\` → barra invertida literal  
- `\'` → apóstrofo/aspas simples literal dentro de String delimitada por `'...'`  
- `\"` → aspas duplas literal dentro de String delimitada por `"..."`  

Exemplo da aula (problema com barra):

```python
text = 'aqui está um texto explicativo sobre a "barra invertida" - \'
print(text)
```

Gera:

```text
SyntaxError: unterminated string literal
```

Correção com escape:

```python
text = 'aqui está um texto explicativo sobre a "barra invertida" - \\'
print(text)
```

- **Quando usar:** Sempre que uma barra invertida ou aspas **faça parte do texto** e não de um escape ou delimitador.
- **Quando NÃO usar:** Em Raw Strings (ver próximo conceito) quando você quer exatamente o texto como está, inclusive as barras.

❌ **Erros comuns reais:**
- Colocar uma única `\` no final da String – Python espera outro caractere para formar um escape e a String “não termina”.
- Misturar o mesmo tipo de aspas dentro e fora sem escape: `"Ele disse "oi""`.  
⚠️ **Pegadinha de prova:** Mostrar duas versões de código quase iguais, uma com `\\` e outra com `\`, e perguntar qual executa sem erro.  
🧪 **Como testar entendimento:** Pedir ao aluno que escreva um `print()` que mostre exatamente: `a barra invertida é "\"`.  
🛠️ **Aplicação mínima correta (passos):**
1. Escolher aspas externas de modo a minimizar conflitos (se há aspas duplas no texto, usar `'...'` por fora, e vice-versa).  
2. Onde ainda houver conflito, prefixar o caractere com `\` (`\"` ou `\'`).  
3. Para barras literais, sempre trocar `\` por `\\`.  
📏 **Critério de acerto:** A saída exibe exatamente os caracteres esperados; o código não gera `SyntaxError`.


### 5.4 Raw Strings (`r'...'` / `r"..."`)

**Definição operacional:**  
Uma **Raw String** é criada prefixando a String com `r` ou `R` (`r'...'`, `r"..."`). Nesse modo, o Python **não interpreta** sequências como `\n`, `\t` ou `\\` como escapes; elas são tratadas como texto literal.

Exemplos adaptados da aula:

```python
text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunut labore.'
print(text)  # quebras de linha reais

text_raw = r'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunut labore.'
print(text_raw)  # mostra "\n" escrito
```

E com repetição:

```python
nome = r'Python\n'
multi = 5 * nome
print(multi)
# Saída: Python\nPython\nPython\nPython\nPython\n
```

- **Quando usar:** Quando você precisa escrever Strings “cheias de barras” sem que o Python tente interpretá-las (ex.: expressões regulares, caminhos de arquivo).  
- **Quando NÃO usar:** Quando você **quer** o efeito dos escapes (quebra de linha real, tabulação, etc.).

❌ **Erro comum real:** Esperar que `r'Python\n'` produza múltiplas linhas; o `\n` vira apenas dois caracteres (`\` e `n`).  
⚠️ **Pegadinha de prova:** Mostrar duas Strings, uma normal e outra raw, e perguntar qual produz quebra de linha.  
🧪 **Como testar entendimento:** Mandar o aluno comparar a saída de `print('Python\nPython')` com `print(r'Python\nPython')`.  
🛠️ **Aplicação mínima correta (passos):**
1. Identificar se os `\` na String são parte do conteúdo (caminho, regex) ou apenas marcadores de quebra/tabulação.  
2. Se forem conteúdo, prefixar a String com `r`.  
3. Se também houver necessidade de aspas internas, combinar com as regras do conceito anterior.  
📏 **Critério de acerto:** Nenhum escape é aplicado; a saída mostra literalmente as barras e letras após `\`.


### 5.5 Operador `+` como concatenação de Strings e tipagem forte

**Definição operacional:**  
Com Strings, `+` funciona como **operador de concatenação**: junta uma String imediatamente à outra, criando uma terceira.

```python
nome = 'Python'
sobrenome = 'Programming'
nome_completo = nome + ' ' + sobrenome
print(nome_completo)  # Python Programming
```

Quando um dos operandos **não** é String (ex.: `int`), o Python verifica os tipos e, por ser de **tipagem forte**, **não permite** a operação:

```python
numero = 123
texto = 'Aqui é uma string'
concatenar = numero + texto  # TypeError
```

- **Quando usar:** Para juntar partes de mensagem, montar nome completo, combinar textos fixos com variáveis String.  
- **Quando NÃO usar:** Para somar números – nesse caso ambos os operandos devem ser numéricos e o objetivo é cálculo, não texto.

**Conversão de tipos para evitar erro:**

- Converter número → String para **concatenar**:

```python
numero = 123
texto = 'Aqui é uma string'
concatenar = str(numero) + texto
print(concatenar)  # 123Aqui é uma string
```

- Converter String numérica → número para **somar**:

```python
numero = 123
numero_em_string = '123'
resultado = numero + int(numero_em_string)  # 246
```

❌ **Erros comuns reais:**
- Achar que Python “se vira” e converte automaticamente `int` para `str` ou vice-versa (`TypeError: unsupported operand type(s) for +: 'int' and 'str'`).  
- Achar que `'123'` e `123` são “o mesmo tipo”; `type('123')` é `str`, não `int`.  
⚠️ **Pegadinha de prova:** Mostrar código que funciona (`'123' + '456'` → `'123456'`) ao lado de um que falha (`123 + '456'`) e perguntar o motivo.  
🧪 **Como testar entendimento:** Pedir para reescrever um código que gera `TypeError` usando `str()` ou `int()` conforme o objetivo (somar ou concatenar).  
🛠️ **Aplicação mínima correta (passos):**
1. Identificar se o resultado desejado é **texto** ou **cálculo numérico**.  
2. Conferir o tipo de cada operando com `type()`, se necessário.  
3. Converter explicitamente para `str` (para texto) ou para `int`/`float` (para cálculo).  
4. Só então aplicar o operador `+`.  
📏 **Critério de acerto:** O código não lança `TypeError` e o resultado impresso bate com a intenção (texto concatenado ou soma correta).


### 5.6 Operador `*` como repetição de String

**Definição operacional:**  
Quando um dos lados de `*` é uma String e o outro é um inteiro, o resultado é aquela String **repetida N vezes**.

```python
nome = 'Python\n'
multi = 5 * nome
print(multi)
```

Saída:

```text
Python
Python
Python
Python
Python
```

Aplicação mostrada na aula: gerar linhas de separação e “molduras” em terminal:

```python
separador = '-' * 30
print(separador)
print('Name:\t', name)
print('Addr:\t', address)
print(separador)
```

- **Quando usar:**  
  - Criar barras horizontais (`'-' * 30`, `'=' * 50` etc.).  
  - Repetir um mesmo texto várias vezes sem escrever linha por linha.  
- **Quando NÃO usar:**  
  - Com número fracionário (`3.5 * 'x'` não faz sentido).  
  - Entre duas Strings (`'a' * 'b'` gera `TypeError`).

❌ **Erro comum real:** Esperar que `'*'` entre duas Strings faça “produto cartesiano de textos” ou algo avançado; em Python padrão isso **não existe**.  
⚠️ **Pegadinha de prova:** Questão com `print('-'*5 + 'Titulo' + '-'*5)` pedindo para o aluno prever a saída exata.  
🧪 **Como testar entendimento:** Pedir para o aluno gerar uma linha com exatamente 40 sinais de `+` usando uma única linha de código.  
🛠️ **Aplicação mínima correta (passos):**
1. Definir o caractere base (ex.: `'-'` ou `'+'`).  
2. Definir o tamanho desejado da linha (ex.: `largura = 40`).  
3. Criar a String repetida: `linha = caractere * largura`.  
4. Usar `print(linha)` onde for necessário.  
📏 **Critério de acerto:** O número de caracteres repetidos coincide com o inteiro usado na multiplicação.


## 6. Procedimento / Execução (como aplicar na prática)

### 6.1 Formatar parágrafo com quebras de linha

**Objetivo:** Transformar um texto “corridão” em um parágrafo com quebras de linha específicas usando `\n`.

**Passos executáveis:**
1. Copiar o texto base para dentro de uma String:  
   `texto = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'`
2. Decidir onde cada linha deve terminar (ex.: após cada vírgula ou ponto).  
3. Substituir esses pontos por `\n` dentro da String:  
   `texto = 'Sed do eiusmod tempor,\nincididunt ut labore...'`.  
4. Executar `print(texto)` e ajustar a posição dos `\n` até ficar legível.

**Erro típico:** Esquecer de fechar aspas ao editar, ou deixar `\` isolado no fim da String.  
**Evidência de acerto:** Cada parte do texto aparece em sua própria linha, sem `SyntaxError`.


### 6.2 Criar tabela simples de nomes e endereços

**Objetivo:** Mostrar uma lista de pessoas com nome e endereço minimamente alinhados.

**Passos executáveis (versão inspirada na aula):**
1. Definir variáveis para nome e endereço:
   ```python
   name = 'John Doe'
   address = 'Avenue A'
   ```
2. Usar `print()` com `\t` para alinhar rótulo e valor:
   ```python
   print('Name:\t', name)
   print('Address:\t', address)
   ```
3. Repetir o padrão para outras pessoas, reatribuindo `name` e `address` entre os blocos e imprimindo um separador com `'-'*30`.

**Erro típico:** Reatribuir `name` e `address` **antes** do `print()` e achar que o Python vai lembrar o valor anterior (a variável sempre guarda o último valor atribuído).  
**Evidência de acerto:** Cada bloco de três linhas (separador, nome, endereço) aparece com visual consistente; os rótulos “Name” e “Address” alinham-se verticalmente.


### 6.3 Juntar número e texto em mensagem única

**Objetivo:** Exibir uma mensagem como `"A soma é 123"` sem `TypeError`.

**Passos executáveis:**
1. Calcular o valor numérico normalmente:
   ```python
   resultado = 100 + 23
   ```
2. Converter o número para String ao concatenar:
   ```python
   mensagem = 'A soma é ' + str(resultado)
   print(mensagem)
   ```
3. Verificar a saída.

**Erro típico:** Escrever `mensagem = 'A soma é ' + resultado` e receber `TypeError`.  
**Evidência de acerto:** Mensagem exibida corretamente, sem erro, com o valor numérico desejado.


## 7. Exemplos Relevantes (aula + slides)

### Exemplo 1 — `\n` dentro de texto longo

Trecho ilustrativo da aula (adaptado do gerador de Lorem Ipsum):

```python
texto = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
print(texto)
```

*O que fixa:* uso de `\n` para quebrar um parágrafo em múltiplas linhas mais legíveis.


### Exemplo 2 — Comparando String normal e Raw String

```python
texto_normal = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit'
texto_raw = r'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit'

print(texto_normal)
print('---')
print(texto_raw)
```

*O que fixa:*  
- `texto_normal` quebra linha onde há `\n`.  
- `texto_raw` exibe literalmente `\n`.


### Exemplo 3 — Escape de barra e aspas

```python
texto = 'aqui está um texto explicativo sobre a "barra invertida" - \\'
print(texto)
```

*O que fixa:* necessidade de `\\` quando a barra faz parte do texto, senão vira início de escape inválido.


### Exemplo 4 — Concatenação com número convertido

```python
numero = 123
numero_em_string = '123'

resultado_1 = str(numero) + numero_em_string    # '123123'
resultado_2 = numero + int(numero_em_string)    # 246
```

*O que fixa:*  
- A mesma informação pode ser tratada como texto (`'123'`) ou número (`123`), mas o **tipo** determina quais operações são válidas.


### Exemplo 5 — Moldura de texto com multiplicação de String

```python
barra = '+' + 30 * '-' + '+'
print(barra)
print('Name:\t', 'John Doe')
print('Addr:\t', 'Avenue A')
print(barra)
```

*O que fixa:* combinação de concatenação e repetição para deixar a saída mais organizada visualmente.


## 8. Diferenças e Confusões Comuns

| Confusão | Distinção |
|----------|-----------|
| `\n` vs `n` | `\n` é escape de nova linha; `n` é apenas a letra `n`. Em Raw String, `\n` volta a ser apenas dois caracteres. |
| `\t` vs espaços normais | `\t` insere tabulação, cujo tamanho real depende do ambiente; espaços são sempre 1 caractere. |
| `\` isolado vs `\\` | `\` sozinho quase sempre inicia um escape e pode quebrar a String; `\\` representa uma barra literal. |
| String normal vs Raw String | Na normal, escapes são interpretados; na Raw, são ignorados e o texto é literal. |
| `+` entre Strings vs `+` entre String e número | `str + str` concatena; `int + str` gera `TypeError` se não houver conversão. |
| `*` com String vs `*` entre Strings | `int * str` ou `str * int` repete a String; `str * str` não é permitido. |
| Operador `%` em String | No slide aparece `'123' % '456'` gerando erro; a funcionalidade de formatação com `%` **não foi explicada nesta aula**, então não é exigida aqui. |


## 9. Como Cai em Prova

Possíveis formatos de questão com base na aula:

- **Previsão de saída:**  
  Dado um trecho com `\n`, `\t`, `\\` e operadores `+`/`*`, pedir para escrever exatamente o que aparece no terminal (incluindo quebras de linha).

- **Correção de erro:**  
  Mostrar código com `SyntaxError` por String mal fechada ou barra invertida solta e pedir para corrigir usando escape adequado.

- **Justificativa conceitual:**  
  Perguntar por que `123 + '456'` gera erro enquanto `'123' + '456'` funciona, pedindo menção explícita à tipagem forte e tipos diferentes.

- **Transformação de código:**  
  Solicitar que o aluno transforme várias chamadas `print()` com separadores “na força bruta” em uma versão com `'-' * 30` ou `'=' * 50`.

- **Identificação de Raw String:**  
  Dado código com `r'...'`, perguntar se há quebras de linha reais ou se `\n` será exibido literalmente.

**Pontos avaliados:**
- Capacidade de **ler** e **prever** saída de código com escapes.  
- Noção correta de tipos (`str` vs `int`) em operações com `+`.  
- Uso consciente de conversão (`str()`, `int()`) para atingir o resultado desejado.


## 10. Pontos de Atenção

1. Nunca deixe uma barra invertida (`\`) sozinha no final da String – isso quase sempre gera `SyntaxError`.  
2. Cuidado ao editar Strings longas: um par de aspas apagado quebra toda a linha até o final.  
3. Lembre que `\n` e `\t` **não aparecem como texto**; eles controlam a formatação.  
4. Não use `\t` para identar blocos de código; indentação é fora da String.  
5. Antes de usar `+` com variáveis de tipos diferentes, confirme os tipos com `type()` e converta quando necessário.  
6. Não espere que Raw String interprete `\n` ou `\t` – ela foi feita justamente para **não** fazer isso.  
7. Se aparecer o operador `%` com Strings em exercícios, lembre que nesta aula ele só foi mostrado gerando erro; o uso correto será tratado em outro momento.


## 11. Checklist de Domínio

- [ ] Sei explicar o que é uma String e o que é um caracter de escape.  
- [ ] Sei usar `\n` para controlar quebras de linha em saídas de texto.  
- [ ] Sei usar `\t` para alinhar colunas simples em terminal.  
- [ ] Sei escapar barra invertida e aspas usando `\\`, `\'`, `\"`.  
- [ ] Sei quando usar Raw String (`r'...'`) e qual seu efeito sobre `\n` e `\t`.  
- [ ] Sei concatenar Strings com `+` e explicar por que `int + str` dá erro.  
- [ ] Sei converter tipos com `str()` e `int()` para evitar `TypeError`.  
- [ ] Sei usar `*` para repetir uma String N vezes (linhas de separação, molduras).  
- [ ] Consigo prever a saída de um código que mistura todos esses recursos.


## 12. Auto-Teste

1. **Pergunta aberta:**  
   Em suas palavras, explique a diferença entre:
   - `texto = 'linha 1\nlinha 2'`  
   - `texto = r'linha 1\nlinha 2'`  
   O que muda na saída de `print(texto)` em cada caso?

2. **Mini exercício de correção:**  
   O código abaixo dá erro. Corrija-o sem remover a barra invertida do texto:
   ```python
   texto = 'a barra invertida é: \'
   print(texto)
   ```
   (Escreva a versão correta da String.)

3. **Cenário de decisão (concatenação vs soma):**  
   Você recebe dois valores: `a = 10` e `b = '20'`.  
   a) Como exibir a mensagem `"Resultado: 1020"`?  
   b) Como obter o valor numérico `30`?

4. **Exercício de formatação com `\t` e `*`:**  
   Escreva um trecho de código que imprima:
   ```text
   ------------------------------
   Produto:     Notebook
   Preço:       4500.00
   ------------------------------
   ```
   Usando `'-' * N` e `\t`.

5. **Previsão de saída (multiplicação de String):**  
   Qual a saída do código a seguir?
   ```python
   padrao = '=' * 5 + '\n'
   resultado = padrao * 3
   print(resultado)
   ```


## 13. Resumo Estratégico Consolidado

- Strings em Python são objetos `str` que podem conter **caracteres de escape** como `\n` e `\t` para controlar a apresentação do texto.  
- `\n` quebra a linha; `\t` cria tabulação; `\\`, `\'`, `\"` permitem mostrar barra e aspas literalmente sem quebrar a String.  
- Raw Strings (`r'...'`) desativam a interpretação desses escapes, exibindo-os como texto literal – útil quando o conteúdo é rico em barras.  
- O operador `+` concatena Strings mas **não** mistura tipos; `int + str` gera `TypeError` e exige conversão explícita (`str()` ou `int()`).  
- O operador `*` repete Strings, permitindo criar separadores e molduras de forma concisa, melhorando a legibilidade de saídas em terminal.


## 14. Resumo em 5 Linhas

1. Caracteres de escape (`\n`, `\t`, `\\`) controlam a forma como Strings são exibidas em vez de aparecerem literalmente.  
2. Para mostrar barra ou aspas no texto, é preciso escapá-las ou escolher bem o tipo de aspas externas.  
3. Raw Strings (`r'...'`) tratam `\n`, `\t` e outros como texto comum, sem efeitos especiais.  
4. `+` concatena Strings, mas não aceita misturar `int` com `str` sem conversão explícita.  
5. `*` repete Strings, sendo ideal para criar linhas de separação e estruturas visuais simples em terminal.


## 15. Palavras-Chave

- String (`str`)  
- caracter de escape  
- `\n` (nova linha)  
- `\t` (tabulação)  
- `\\` (barra invertida)  
- escape de aspas  
- Raw String (`r'...'`)  
- concatenação (`+`)  
- repetição de String (`*`)  
- tipagem forte  
- conversão de tipo (`str()`, `int()`)  
- `SyntaxError`  
- `TypeError`

