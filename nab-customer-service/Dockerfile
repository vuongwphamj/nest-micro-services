FROM node:12-alpine as build

WORKDIR /usr/local/nab-core-service

COPY ../nab-core-service /usr/local/nab-core-service

RUN cd /usr/local/nab-core-service; \
yarn && yarn build

WORKDIR /usr/local/nab-customer-service

COPY ../nab-customer-service /usr/local/nab-customer-service

RUN cd /usr/local/nab-customer-service; \
yarn && yarn build;

EXPOSE 4000

CMD ["yarn", "start"]