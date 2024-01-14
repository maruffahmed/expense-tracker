ARG NODE_VERSION=18.18.2

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 5173

CMD yarn dev
