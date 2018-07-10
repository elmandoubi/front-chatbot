# Installation

To start a new project clone this repo

```bash
git clone https://github.com/elmandoubi/front-chatbot.git
cd front-chatbot
rm -rf .git/
git init
npm install
```

# Start dev environment

```bash
npm start
```

# Build for production
```bash
npm run build
```
which will generate the ***dist/*** folder that contains a compiled version of your app.


# Fake Data
in a new Terminal window
```bash
cd fakeData && http-server --cors .
```