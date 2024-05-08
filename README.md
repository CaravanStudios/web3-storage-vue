# A web3 Vue application to facilitate of data to and from [Web3 Storage](https://web3.storage/)

## Prerequisites

* Node.js v18 or higher
* NPM 
* Text Editor
* web3.storage account
* [web3 CLI](https://web3.storage/docs/w3cli/)

## Setup
* `w3 login <email account>`
* `w3 space ls`
* `w3 space use <space key>`
* `w3 key create`
* `w3 delegation create <did:key:...> --base64`
* [!IMPORTANT] Save the output to a .env file and save it to the project root.
> You will need to repeat this step on any device you configure to run this app.
> The .env file should _never_ be committed to the repo. If you do, anyone with access to your repo will be able to access your W3.Storage > account and access your files.
* Clone the repo and cd upfile-vue
* `npm install`
* `npm run dev`
-------------------------------------------------
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
