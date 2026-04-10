FROM node:24-alpine

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]