FROM node:20-alpine AS build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:20-alpine AS final

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json /app/

COPY --from=build /app/.next /app/.next

COPY --from=build /app/public /app/public

RUN npm install 

EXPOSE 3000

CMD [ "npm", "run", "start" ]
