FROM node:22-alpine

# Instalar dependencias globales necesarias
RUN npm install -g @nestjs/cli

WORKDIR /usr/src/app

# Copiar archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto 3008
EXPOSE 3008

# Comando para desarrollo con hot-reload
CMD ["npm", "run", "start:dev"]
