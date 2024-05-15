# A web 3 sandbox project showcasing basic IPFS upload and listing functionality using Web.storage/Filecoin and Vue.js.

In this sandbox, we will walk through the steps to create a basic, distributed, decentralized  Web 3 file storage solution using web3.storage, which acts as un interface to Filecoin which in turn stores files in the Interplanetary File System (IPFS). The advantages of IPFS include decenteralization, enhanced security, resistance against censorship, improved content control, and more. Using Filecoin and Web3.storage as an interface with IPFS grants access to a robust, rapidly expanding open source ecosystem of technical solutions and service providers.

To use this sandbox, the following skills and technology are required or good to have:

## Prerequisites

### Skills
* Familiarity with command line interfaces (CLI) (required)
* Familiarity with Github (required)
* Javascript (good to have)
* Application Programming Interface (API) theory (good to have)

### Technology
* [Node.js](https://nodejs.org/en) v18 or higher 
* [NPM](https://www.npmjs.com/)
* Text Editor
* [web3.storage account](https://web3.storage/)
* [web3 CLI](https://web3.storage/docs/w3cli/)

Let's start by ensuring that the required technology has been installed on your computer. If you are unsure about the current status of Node and NPM on your computer, open your Terminal application and type `node`. This should result in a 'Welcome to Node.js' message, such as:

'Welcome to Node.js v18.18.2.'

Exit Node, typically by using 'ctrl-z' on your keyboard, and type `npm`. If NPM is installed a listing of all available NPM commands will be shown. Should either of these steps fail, the quickest way to install both is to use Node.js's supplied package manager which includes both Node.js and NPM. There are options available for Windows, Mac OSX, Linux and AIX. It is recommended that the latest version of each is installed.

- [https://nodejs.org/en/download](https://nodejs.org/en/download)

For web3.storage, the web3.storage CLI client is required in order for the Node application to communicate properly with the service. If you are unsure about the CLI status on your computer, type `w3` in your terminal. If it is installed, this will show a message that lists all available web3.storage CLI commands. Othewise, use the steps outlined on the web3.storage installation documentation. These require both Node and NPM to be functioning on your computer.

- [https://web3.storage/docs/w3cli/](https://web3.storage/docs/w3cli/)

After successfully installing the web3.storage CLI, follow these steps to creat your account:

- [https://web3.storage/docs/how-to/create-account/](https://web3.storage/docs/how-to/create-account/)

Then create a web3.storage space that you will use to recieve the files being uploaded via the sandbox. This is easily done through the web3.storage console.

- [https://console.web3.storage/](https://console.web3.storage/)

## Setup

Once all of the requirements are taken care of the following steps are required to finish preparing your system to run the sandbox project.

 Clone the sandbox repository to your computer.
 In the Terminal, navigate to the `web3-storage-vue` directory.
 Connect the sandbox to web3.storage with the following series of commands:
* `w3 login <email>` - where the email is the one used to create your web3.storage account.
* `w3 space ls` - lists your spaces within web3.storage.
* `w3 space use <space key>` - chooses a space to recieve the files being uploaded via the sandbox.
* `w3 key create` - creates a local web3.storage key.
* `w3 delegation create <did:key:...> --base64` - tells web3.storage that the client using the key you just made is authorized to interact with your account.

Save the output - both key and proof - to a .env file and save it to the project root. There is a sample `.env.example` within the sanbox code repository. The format is as follows, as found within the `.env.example` file:

> KEY=SOMEKEYHERE
> PROOF='SOMEMULTLINESTRINGTHATSREALLYLONGHERE'

The KEY value is second line of output from the `w3 key create` command. The PROOF value is the long, BASE64 output from the `w3 delegation create <did:key:...> --base64` command.
 
> [!IMPORTANT] You will need to repeat this step on any device you configure to run this app.
> The .env file should _never_ be committed to the repo. If you do, anyone with access to your repo will be able to access your W3.Storage account and access your files.
 
The last step is to install the code itself via NPM using the NPM install command with your Teminal.
* `npm install`

There are three ways to run the sandbox. `npm run dev` is used for development with features like hot module replacement, `npm run build` is used to create an optimized production build, and `npm run start` is used to run the Next.js server in production mode after the build process is completed. For our immediate purposes, let's use the development option. Start the development server on `http://localhost:3000`:

* `npm run dev`

Once done, there the Node.js server should be running and the application available in your browser at:
* `http://localhost:3000/`

-------------------------------------------------

### Additional Notes:
The sandbox application was built using Nuxt, a Vue based application framework. You can look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
