DISCIPLINA: Introdução à Programação com Python  
PROFESSOR: Gesiel Lopes  
DATA DA AULA: 04/02/2026  
TEMA DA AULA: Variáveis, Operadores e Strings
TIPO: Aula técnica/híbrida  
ORIGEM: https://drive.google.com/file/d/192iJaR2g9QM5MOTqpzWSjbRi0F2Tv04z/view?usp=drivesdk



## 1. Tema e Escopo

**Tema:** Resolução de problemas com variáveis numéricas, convenções de nomenclatura e introdução a Strings em Python.

**Problema que resolve:** Como codificar problemas do mundo real em Python, nomear variáveis corretamente e manipular textos.

**Para que serve:** Permitir que o aluno transforme problemas em algoritmos executáveis e trabalhe com o tipo String.

**Inclui:**
- Conversão de unidades (Celsius ↔ Fahrenheit)
- Cálculo de área e perímetro de figuras
- Estatísticas básicas (média, desvio padrão, média geométrica)
- Convenções de nomenclatura (snake_case)
- Definição de Strings (aspas simples, duplas, docstrings)
- Strings com múltiplas linhas
- Aspas dentro de Strings

**Não inclui:**
- Operadores de comparação (`==`)
- Estruturas de decisão (if)
- Estruturas de repetição (for, while)
- Métodos de String (`.upper()`, `.split()`, etc.)

---

## 2. Contexto na Disciplina

**Onde entra:** Quinto encontro. Assume domínio de variáveis, operadores aritméticos, `print()` e tipos básicos.

**Pré-requisitos:**
- Operadores: `+`, `-`, `*`, `/`, `**`
- Atribuição (`=`), parênteses para precedência
- Função `type()` e `print()`
- Tipos básicos: int, float, str, bool

**Dependências futuras:** Strings são base para input de usuário, formatação de saída, manipulação de dados e estruturas de decisão.

---

## 3. Visão Conceitual Geral

Algoritmo é a tradução de um problema do mundo real para uma linguagem que o computador entende. Variáveis armazenam valores; operadores realizam cálculos. Strings armazenam cadeias de caracteres (textos). O resultado deve ser determinístico: o mesmo algoritmo deve produzir o mesmo resultado para as mesmas entradas. A forma de resolver pode variar; o que não varia é a correção do resultado.

---

## 4. Ideias-Chave (máx 7)

| Ideia | Importância | Prova | Prática | Impacto de não entender |
|-------|-------------|-------|---------|-------------------------|
| Variáveis em snake_case, minúsculas | Legibilidade do código | Pode cobrar boas práticas | Padrão Python oficial | Código confuso, difícil manutenção |
| Parênteses para precedência | Evitar erro em expressões complexas | Cálculo incorreto sem parênteses | Qualquer fórmula com múltiplas operações | Resultado errado em provas |
| Raiz enésima = potência 1/n | Expressar fórmulas em Python | Média geométrica, desvio padrão | Estatística, física | Não consegue implementar fórmulas |
| Aspas simples vs duplas | Strings com aspas literais no texto | Erro de sintaxe | Textos com citações | `SyntaxError` ao rodar |
| Docstrings (""") para múltiplas linhas | Textos longos, poemas, documentação | Definir String multilinha | Documentação, textos grandes | Erro ao quebrar linha em aspas simples |
| Atribuição vs comparação | `=` atribui; `==` compara (não visto) | Confusão entre operadores | Todo código Python | Bug silencioso |
| Problema → Algoritmo → Código | Pensamento computacional | Enunciado para código | Desenvolvimento | Não traduz enunciado em solução |

---

## 5. Conceitos Essenciais — Explicação Operacional

### 5.1 Convenções de nomenclatura (snake_case)

**Definição:** Variáveis em minúsculas; palavras compostas separadas por `_`.

**Quando usar:** Sempre que definir variáveis em Python.

**Quando NÃO usar:** Nomes em maiúsculas (reservados para constantes); camelCase (não é padrão Python).

**Como reconhecer:** `graus_celsius`, `area_retangulo`, `desvio_padrao` — corretos. `GrausCelsius`, `areaRetangulo` — não recomendados.

❌ **Erro comum:** `Graus Celsius` (espaço não é permitido em nome de variável).

⚠️ **Pegadinha:** Python aceita `GrausCelsius` sem erro; a prova pode cobrar “padrão Python” e a resposta correta é snake_case.

🧪 **Como testar:** Reescrever `AreaRetangulo` como `area_retangulo` e verificar se o código continua funcionando.

---

### 5.2 Parênteses e precedência

**Definição:** Parênteses garantem ordem de execução. Potenciação (`**`) antes de soma; soma antes de atribuição.

**Quando usar:** Em expressões com múltiplas operações (soma + divisão, produto + raiz).

**Quando NÃO usar:** Em operação única: `x = 10` não precisa.

**Exemplo operacional:**
```python
# Média: soma primeiro, depois divide
media = (numero_1 + numero_2 + numero_3) / 3

# Sem parênteses: numero_2 + numero_3 / 3 — a divisão ocorre antes
```

❌ **Erro comum:** `media = numero_1 + numero_2 + numero_3 / 3` — divide só o último; resultado errado.

🛠️ **Aplicação mínima correta:**
```python
media = (n1 + n2 + n3) / 3
```

📏 **Critério verificável:** Trocar valores (ex.: 3, 5, 7); média deve ser 5,0.

---

### 5.3 Raiz enésima via potenciação

**Definição:** √x = x^(1/2); ⁿ√x = x^(1/n).

**Quando usar:** Média geométrica, desvio padrão, qualquer fórmula com raiz.

**Quando NÃO usar:** Quando a linguagem oferece função `sqrt()` (não abordada na aula).

**Exemplo:**
```python
# Raiz cúbica do produto
media_geometrica = (n1 * n2 * n3) ** (1/3)

# Raiz quadrada
raiz_quadrada = valor ** (1/2)
```

❌ **Erro comum:** `(n1 * n2 * n3) ** 1/3` — 1/3 é avaliado como 0 (divisão inteira em Python 2) ou precisa de parênteses.

⚠️ **Pegadinha:** `1/3` sem parênteses: `valor ** 1 / 3` = `(valor ** 1) / 3` — resultado errado.

🛠️ **Aplicação correta:** `valor ** (1/3)`.

---

### 5.4 Strings: aspas simples e duplas

**Definição:** String é cadeia de caracteres. Pode ser definida com `'...'` ou `"..."`.

**Quando usar:** Qualquer texto; escolher o delimitador que não conflita com aspas internas.

**Regra crítica:** Se o texto contém aspas duplas, usar aspas simples para delimitar (e vice-versa).

```python
texto = 'Ele disse "olá"'   # correto
texto = "Ele disse "olá""   # SyntaxError
```

❌ **Erro comum:** Usar o mesmo tipo de aspas dentro e fora — o interpretador fecha a String antes do esperado.

🛠️ **Aplicação correta:** Alternar: aspas externas ≠ aspas internas.

---

### 5.5 Docstrings (Strings multilinha)

**Definição:** Strings com três aspas (`'''` ou `"""`) permitem múltiplas linhas.

**Quando usar:** Textos longos, poemas, documentação.

**Quando NÃO usar:** Texto em uma linha — aspas simples/duplas bastam.

```python
poema = '''Linha um
Linha dois
Linha três'''
```

❌ **Erro comum:** Tentar quebrar linha dentro de aspas simples sem fechar — `SyntaxError: unterminated string`.

---

### 5.6 Atribuição de variável a variável

**Definição:** Uma variável pode receber o valor de outra: `lado_a = lado_b` — ambas terão o mesmo valor.

**Uso na aula:** Garantir lados iguais em retângulo (lado_a = lado_b = 10; lado_c = lado_d = 50).

**Ordem de execução:** Na expressão `lado_a = lado_b`, primeiro `lado_b` é avaliado, depois o valor é atribuído a `lado_a`.

**Duas abordagens:**
1. Atribuir valores iguais manualmente: `lado_a = 10`, `lado_b = 10`.
2. Atribuir via outra variável: `lado_b = 10`, `lado_a = lado_b`.

---

## 6. Procedimento / Execução

### Exercício 1 — Celsius para Fahrenheit

**Fórmula:** F = C × (9/5) + 32

**Passo a passo:**
1. Declarar `graus_celsius = 100` (ou valor desejado).
2. Calcular `graus_fahrenheit = graus_celsius * (9 / 5) + 32`.
3. Exibir com `print()`.

❌ **Erro típico:** Esquecer o `+ 32` ou trocar 9/5 por 5/9.

📏 **Evidência de acerto:** 100°C = 212°F; 0°C = 32°F.

---

### Exercício 2 — Área e perímetro do retângulo

**Fórmulas:** Perímetro = soma dos lados; Área = base × altura.

**Passo a passo:**
1. Definir base (ex.: 50) e altura (ex.: 10).
2. Garantir lados iguais: `lado_a = lado_b = 10`, `lado_c = lado_d = 50`.
3. Calcular `perimetro = lado_a + lado_b + lado_c + lado_d`.
4. Calcular `area = lado_c * lado_a` (base × altura).
5. Exibir resultados.

❌ **Erro típico:** Atribuir valores diferentes a lados que devem ser iguais — deixa de ser retângulo.

📏 **Evidência de acerto:** 10, 10, 50, 50 → perímetro 120, área 500.

---

### Exercício 3 — Estatísticas com três números

**Dados de exemplo:** n1 = 3, n2 = 5, n3 = 7.

**Passo a passo:**
1. Declarar os três números.
2. Média: `(n1 + n2 + n3) / 3`
3. Média geométrica: `(n1 * n2 * n3) ** (1/3)`
4. Desvio padrão: raiz da média dos desvios quadráticos — `((n1-media)**2 + (n2-media)**2 + (n3-media)**2) / 3) ** (1/2)`
5. Dobro da soma: `2 * (n1 + n2 + n3)`
6. Triplo do produto: `3 * (n1 * n2 * n3)`
7. Raiz da soma dos quadrados: `(n1**2 + n2**2 + n3**2) ** (1/2)`

❌ **Erro típico:** Calcular desvio padrão antes de ter a média; esquecer parênteses em `(1/3)` ou `(1/2)`.

📏 **Evidência de acerto:** Média = 5,0; triplo do produto = 315; raiz da soma dos quadrados ≈ 9,11.

---

## 7. Exemplos Relevantes

**Exemplo 1 — Conversão Celsius → Fahrenheit:**
```python
graus_celsius = 100
graus_fahrenheit = graus_celsius * (9 / 5) + 32
print(f'{graus_celsius} graus Celsius = {graus_fahrenheit} graus Fahrenheit')
```
*O que fixa:* Fórmula, variáveis em snake_case, uso de parênteses.

**Exemplo 2 — Retângulo (forma alternativa com atribuição encadeada):**
```python
lado_b = 10
lado_a = lado_b
lado_d = 50
lado_c = lado_d
perimetro = lado_a + lado_b + lado_c + lado_d
area = lado_c * lado_a
```
*O que fixa:* Garantir lados iguais via atribuição; convenção base/altura.

**Exemplo 3 — String com aspas internas:**
```python
texto = 'O professor disse "pratiquem"'
print(texto)  # O professor disse "pratiquem"
```
*O que fixa:* Usar aspas distintas para delimitar e para o conteúdo.

---

## 8. Diferenças e Confusões Comuns

| Confusão | Distinção |
|----------|-----------|
| `=` vs `==` | `=` atribui valor; `==` compara (não visto na aula). |
| Aspas simples vs duplas | Funcionalmente iguais; escolha conforme aspas no texto. |
| String vs número | `"123"` é texto; `123` é número. Não soma Strings com números sem conversão. |
| `1/3` vs `(1/3)` em expressão | `x ** 1/3` = `(x**1)/3`; `x ** (1/3)` = raiz cúbica. |
| Perímetro vs área | Perímetro = soma dos lados; área = base × altura. |

---

## 9. Como Cai em Prova

- **Enunciado:** "Escreva um trecho Python que converta X graus Celsius em Fahrenheit."
- **Formato:** Código completo ou completar lacunas.
- **Erro cobrado:** Fórmula invertida, ausência de `+ 32`, uso de inteiros em 9/5 sem cuidado.
- **Armadilha:** Pedir resultado para valor específico (ex.: 25°C = 77°F) para verificar se a fórmula está correta.
- **Questão conceitual:** "Qual o padrão de nomenclatura recomendado para variáveis em Python?" — resposta: snake_case, minúsculas.
- **Questão sobre Strings:** "Por que usar aspas simples ao definir uma String que contém aspas duplas?" — para não fechar a String prematuramente.

---

## 10. Pontos de Atenção

1. Esquecer parênteses em `(9/5)` ou `(1/3)` — altera resultado.
2. Usar mesmo tipo de aspas dentro e fora da String — `SyntaxError`.
3. Quebrar linha em String com aspas simples/duplas sem fechar — erro de sintaxe.
4. Calcular desvio padrão sem ter calculado a média antes.
5. Definir lados do retângulo com valores inconsistentes (lado_a ≠ lado_b quando deveriam ser iguais).
6. Confundir área com perímetro em enunciados.

---

## 11. Checklist de Domínio

- [ ] Sei definir variáveis em snake_case.
- [ ] Sei usar parênteses para controlar precedência.
- [ ] Sei expressar raiz enésima como potência `x ** (1/n)`.
- [ ] Sei escolher aspas para Strings com aspas internas.
- [ ] Sei criar String multilinha com `'''` ou `"""`.
- [ ] Sei converter Celsius para Fahrenheit.
- [ ] Sei calcular área e perímetro de retângulo.
- [ ] Sei calcular média, média geométrica e desvio padrão com 3 números.
- [ ] Sei evitar erro de aspas conflitantes.

---

## 12. Auto-Teste

1. **Pergunta aberta:** Por que `lado_a = lado_b` garante que ambas tenham o mesmo valor? Explique a ordem de execução.
2. **Mini exercício:** Escreva o código para calcular a raiz quadrada da soma dos quadrados de 4, 5 e 6.
3. **Cenário:** Você precisa armazenar o texto: `Ele perguntou "Qual a fórmula?"`. Qual forma está correta e por quê?
4. **Cenário:** O código `media = n1 + n2 + n3 / 3` para n1=10, n2=20, n3=30 retorna 40. Qual o erro e qual o valor correto?
5. **Cenário:** Qual o resultado de `8 ** (1/3)` e qual operação matemática representa?

---

## 13. Resumo Estratégico Consolidado

- Variáveis em **snake_case**, minúsculas.
- Parênteses são essenciais em expressões compostas: média, raiz, fórmulas estatísticas.
- Raiz enésima: `x ** (1/n)`.
- Strings: aspas simples ou duplas; usar o tipo oposto quando houver aspas no texto; docstrings (`'''` ou `"""`) para multilinha.
- Atribuição: `a = b` faz `a` receber o valor de `b`.
- Problema → algoritmo → código Python: foco em resultado correto e legibilidade.

---

## 14. Resumo em 5 Linhas

1. Use snake_case e minúsculas para variáveis.
2. Parênteses controlam precedência; raiz = potência 1/n.
3. Strings: aspas simples ou duplas; docstrings para multilinha.
4. Aspas internas exigem aspas externas diferentes.
5. Celsius→Fahrenheit: F = C×(9/5)+32; retângulo: perímetro = soma dos lados, área = base×altura.

---

## 15. Palavras-Chave

- snake_case
- variável
- String
- docstring
- parênteses
- precedência
- potência
- raiz enésima
- média geométrica
- desvio padrão
- atribuição
- algoritmo
- tipo (str)
