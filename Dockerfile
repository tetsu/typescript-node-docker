FROM node:alpine

COPY ./ ./

RUN npm install -g typescript

RUN npm install

CMD ["npm", "start"]