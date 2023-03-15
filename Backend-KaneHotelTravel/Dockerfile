FROM node:16.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-cache-dir -r package.json

RUN npm i express

RUN npm i axios

RUN npm i cookie-parser

RUN npm i morgan

RUN npm i dotenv

RUN npm i sequelize

RUN npm i stripe

RUN npm i pg

RUN npm i cors

COPY . .

EXPOSE 8080

CMD [ "node", "/usr/src/app/Server/index.js" ]

# FROM postgres:14-alpine



# abrir Docker Desktop
# abrir la terminal desde la carpeta "root"  
# ingresar desde terminal el siguiente comando
# docker build -t backendc33t13 .
# el comando debe incluir el punto
# esperar que se ejecute, esto creará ña imagen
# la imagen aparecerá en Images dentro Docker Desktop
# ejecutar siguiente comando
# docker-compose up -d
# docker run backendc33t13
