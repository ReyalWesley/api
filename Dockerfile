# Utilisez une image Node.js
FROM node:latest

# Créez un répertoire pour l'application
WORKDIR /app

# Installez les dépendances de l'application
COPY package*.json ./
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Compilez le code TypeScript en JavaScript
RUN npm run build

# Exposez le port sur lequel votre application s'exécute
EXPOSE 3000

# Démarrez l'application
CMD [ "node", "dist/src/index.js" ]