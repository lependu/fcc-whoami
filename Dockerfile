FROM node:6.11-alpine

RUN addgroup -g 1024 dps && \
  addgroup node dps && \
  mkdir -p /home/node/app && \
  chown node:dps /home/node/app && \
  chmod g+x /home/node/app

USER node

WORKDIR /home/node/app

ENV PATH "$PATH:node_modules/.bin"
