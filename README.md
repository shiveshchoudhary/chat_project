# REALTIME CHAT PROJECT 

## Tech Stack Used 
- [React](https://github.com/jherr/wp5-starter-react "React Github Link")
- [Apollo](https://www.apollographql.com/docs/react/ "Apollo Documentation Link")
- [GraphQl-Yoga](https://github.com/prisma-labs/graphql-yoga "GraphQl-Yoga Documentation Link")

## Steps Involved
- Creating Server.js for GraphQl Server to initialise GraphQl playground.
- Adding Apollo Client which helps in managing local data with GraphQl.
- React Hooks are used to provide UI support.
- Provided polling support for realtime update of messages.

## Modules Installation guide

### Yarn install
```shell
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\
$ sudo apt update\
$ sudo apt install yarn
```
### GraphQl install
```shell
$ yarn init -y\
$ yarn add graphql-yoga
```
### React Starter Pack
```shell
$ npx degit https://github.com/jherr/wp5-starter-react.git\#main "client folder name"
```
### Shards install
```shell
$ yarn add shards-react
```
### Apollo client
```shell
$ yarn add @apollo/client graphql
```
## Output 
*(Sample comms conversation of two characters from fps valorant (sova, killjoy) )*

![Sample Output](https://media.giphy.com/media/MSxxQA8nVRF3mHCRrF/giphy.gif)

