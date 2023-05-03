FROM node:16

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
# RUN yarn build
EXPOSE 9000
# RUN yarn add nodemon
RUN npm install nodemon --save-dev
COPY . ./
# production stage
# FROM nginx:1.17-alpine as production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["yarn", "start" ]