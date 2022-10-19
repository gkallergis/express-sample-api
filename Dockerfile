FROM node:latest

WORKDIR /app
COPY package.json /appd
RUN npm install

COPY . /app

EXPOSE 8000
CMD ["npm", "start"]
