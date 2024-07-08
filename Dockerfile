FROM node:20-alpine as build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm i

COPY . .

# RUN npm run build

# FROM node:20-alpine as final

# WORKDIR /app

# COPY --from=build /app/package.json /app/package-lock.json /app/

# COPY --from=build /app/.next /app/.next

# COPY --from=build /app/public /app/public

# RUN npm install 

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
