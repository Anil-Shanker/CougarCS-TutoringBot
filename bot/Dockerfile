FROM node:16.9.1-alpine3.14

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ./src ./src

CMD ["node", "./src/bot.js"]