FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

copy --from=builder /app/out /usr/share/nginx/html

expose 80

cmd ["nginx", "-g", "daemon off;"]

