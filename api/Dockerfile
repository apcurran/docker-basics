FROM node:lts-alpine

WORKDIR /app

# copy dep manifests to allow for layer caching
COPY package*.json ./

# install clean production dependencies
RUN npm ci --omit==dev

# copy application code
COPY . .

EXPOSE 5000

# run the node process within container
CMD ["node", "app.js"]