## Desafio - 02 (FortBrasil)
<div align="justify">
<p>Certo dia, os irmãos Little Chitão e Xor Or Oh, exímios digitadores, fizeram um desafio,
para ver quem era o melhor na digitação. Para isto, conseguiram um computador que
não processa teclas pressionadas, ou seja, se for para digitar a mesma letra duas vezes
seguidas, precisa pressionar a tecla duas vezes, visto que, pressionar a tecla por mais
tempo, não adianta. Também mediram o tempo de uma tecla pressionada, que foi de,
exatamente, um centésimo de segundo. O desafio seria quem digitasse a palavra
“galopeira”, formada por mais letras e, mas ambos eram muito bons, e chegava num
ponto que não era possível contar quantas letras haviam sido digitadas. Então,
pediram a sua ajuda para escrever um programa que verifique a palavra digitada e veja
quanto tempo foi gasto para a digitação.</p>

<p>Escreva um programa que, dada uma palavra digitada, informe quanto tempo foi gasto
para ser digitada.</p>

**Entrada:**

<p>Um número inteiro C será informado, que será a quantidade de casos de teste. Cada
caso tem uma palavra, de, no mínimo, 9 e, no máximo 10000 letras.</p>

**Saída:**

<p>Para cada caso de teste, imprima um número T, que é o tempo gasto, em segundos,
para digitar a palavra do respectivo caso de teste, com aproximação de duas casas
decimais.</p>
</div>

| Exemplo de Entrada | Exemplo de Saída |
| :--- | ---: |
| 3 | |
| galopeira     | 0.09 |
| galopeeeeeeeeeeeeeeeeeira | 0.25 |
| galopeeira | 0.10 |

## Resultados

<div align="justify">
<p>Bom, os resultados obtidos com o teste serão colocados abaixo, lembrando que foram colocados dois tempos, sendo eles o <b>Tempo Real</b> que mostra o tempo que a pessoa levou para digitar a palavra inteira e o <b>Tempo (Com base na quantidade de letras)</b> como o próprio nome já diz, basicamente é o tempo calculado com base na quantidade de letras da palavra digitada, levando em consideração o enunciado do desafio, de que cada letra leva em média <b>1 centesimo</b> de segundo de duração. </p>
</div>

| Palavra	| Tempo (Real) | Tempo (Com base na quantidade de palavras) |
| :--- | :--- | ---: |
| galopeiraaaaaaaaaaaaaaaaaaaaaa |	3.16 | 0.3 |

## Demonstração

Link do projeto rodando em uma VPS - [Desafio](http://157.245.249.89:3010)

## Rodando o projeto (desenvolvimento)

1. Para rodar o projeto e realizar os testes, use os comandos abaixo.

### Localmente (node + yarn)

2. Crie um .env com as variáveis de ambiente se baseando no arquivo `.env-example`.

3. Siga o procedimento abaixo

```bash
# instalação das dependencias
$ yarn install

# modo "watch" (hot reloading)
$ yarn start
```

### No Docker (docker-compose)

Para rodar com o docker-compose será necessário ter ele e o docker instalados
localmente. Instruções de como fazê-lo podem ser encontradas na documentação
oficial do Docker.

- [Docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

```bash
# faça o build
$ docker-compose build

# suba o contêiner
$ docker-compose up -d
```
