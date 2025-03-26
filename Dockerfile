FROM node:22-alpine as dev
WORKDIR /app

RUN npm -g upgrade

CMD npm run dev