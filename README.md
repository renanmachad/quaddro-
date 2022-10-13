# Documentação básica

- [Remix Docs](https://remix.run/docs)

## Development

Para iniciar o projeto após clonar ele deste repositório

```sh
npm install
```
E logo depois
```sh
npm run dev
```
Assim o o projeto iniciará na seguinte [url](http://localhost:3000/)


# Observações

Sobre as variáveis de ambiente do arquivo 
- `./app/client/client.ts`

Deixei as variáveis de ambiente no arquivo, inline mesmo, por conta desse problema [aqui](https://github.com/remix-run/remix/issues/1186).

Outro motivo para a utilização da minha própria database(do supabase), são as regras que criei, e que são crucias para funções requeridas no teste.

Na ISSUE em si o problema foi resolvido, pois o usuário em questão usa a CloudFare, porém eu não e nem tinha pretensão para tal teste.

Essa foi uma das únicas dificuldades que tive.


# Pastas e mapeamentos

Resumo do conteúdo das pastas

- `app/client` - Cliente do supabase
- `app/components` - Componentes da aplicação, botões, Containers, forms etc..
- `app/interfaces`- Interfaces de tamanho médio que decidi criar pois foram amplamente reutilizadas.
- `app/services` - Chamadas do supabase que foram utilizadas repetidas vezes em diversos lugares.
- `app/utils`- Validadores em geral, e formatação de datas.
- `app/validator`- Apesar de também ser um validador, esse validador é específico para o form de criação de um agendamento
- `./styles` - Estilos do tailwindcss, apesar de proposto o html puro sem a necessidade de estilização, decidi usar o básico do básico do tailwindcss porquê a visualização da aplicação ficou difícil sem nenhum estilo.


# Outras soluções

Aqui descrevo soluções alternativas aquelas que adotei para solucionar os problemas propostos no teste.

A primeira delas e a principal para mim foi essa regra em questão

> -- <cite> 
 Acontecer no mesmo horário que outro agendamento
Ex: Existe um agendamento começando no dia 19/02 às 14:00 e terminando às 14:15.
Não deve ser possível criar outro agendamento começando às 14:10 e terminando às
14:20.
</cite>

Inicialmente encontrei um artigo no stackoverflow que citava exatamente a mesma problemática

Ele pode ser encontrado [aqui](https://stackoverflow.com/questions/19217378/date-exists-between-range-of-dates-not-working)

Aqui o usuário em questão propõe aplicar a regra diretamente no banco de  dados, utilizando-se de [procedures](https://www.postgresql.org/docs/current/sql-createprocedure.html)

O que de fato é muito bem vindo, pois toda regra criada logo no banco de dados é extremamente performática dependendo de como foi aplicada
pois evita que qualquer aplicação front-end ou back-end precise criar uma nova request e validar por si mesmo os dados que vem do banco

Porém não me encontrei muito bem na interface do SUPABASE e mesmo com os exemplos da question no stackoverflow não me senti confortável para aplicar desta forma, visto o pouco uso de SQL puro feito por mim, não me sentindo confortável.


Para resolver o problema então, criei uma solução bem manual, que aparentemente resolveu meu problema corretamente.
