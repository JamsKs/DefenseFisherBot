FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY node_modules ./node_modules

EXPOSE 3000

CMD ["node", "app.js"]
