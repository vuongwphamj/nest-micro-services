FROM node:12-alpine as build

WORKDIR /usr/local/nab-core-service

# RUN mkdir -p /usr/local/nab-core-service
# RUN mkdir -p /usr/local/nab-product-service

COPY ../nab-core-service /usr/local/nab-core-service

RUN cd /usr/local/nab-core-service; \
yarn && yarn build

WORKDIR /usr/local/nab-product-service

COPY ../nab-product-service /usr/local/nab-product-service

RUN cd /usr/local/nab-product-service; \
yarn && yarn build;

EXPOSE 3000

CMD ["yarn", "start"]