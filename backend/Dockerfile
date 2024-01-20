ARG NODE_VERSION=18.18.2

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn db:push && yarn db:seed && yarn dev
