FROM node:slim

WORKDIR /app

ENV JWT_SECRET="5MQPFqbEAEfr6JDjg50Eoz2qDlNb0XvpZPQ0Su8DDWM="
ENV MONGO_URI="mongodb+srv://vinayak:vinayak070905@cluster1.1lltw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
ENV NODE_ENV="development"

ADD package*.json /app/

RUN npm install 

COPY . .

CMD [ "node", "backend/server.js" ]