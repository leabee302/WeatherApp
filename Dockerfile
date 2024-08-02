FROM node:14 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage
EXPOSE 80
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]