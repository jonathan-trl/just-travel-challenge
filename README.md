# JustTravel - Frontend

Este é o front-end do desafio JustTravel, uma loja de turismo que oferece uma variedade de pacotes de viagem para destinos incríveis ao redor do mundo.

## Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React para desenvolvimento de aplicações web.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e eficiente.
- [Storybook](https://storybook.js.org/) - Ferramenta de desenvolvimento para UI de componentes React.
- [Jest](https://jestjs.io/pt-BR/) - Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

## Requisitos

- Node >= 18.17.1
- Yarn 3 ou Corepack habilitado

## Instalação

### Clone o projeto:
```bash
git clone https://github.com/jonathan-trl/just-travel-challenge.git
```

### Navegue até a pasta do projeto:
```bash
cd just-travel-challenge
```

### Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Configure o ambiente
 Copie o arquivo `.env.local.example` e renomeie para `.env.local`, a seguir defina o valor da variável `NEXT_PUBLIC_API_URL` para a url da api

### Abrir o desafio:
#### O desafio estará disponível em `http://localhost:3000`.
```bash
npm run dev
# ou
yarn dev
```

### Abrir Storybook:
#### O Storybook estará disponível em `http://localhost:6006`.
```bash
npm run storybook
# ou
yarn storybook
```

### Rodar os testes:
```bash
npm run test
# ou
yarn test
```