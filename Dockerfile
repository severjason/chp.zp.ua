FROM node:18 as front-end

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --network-concurrency 1 --loglevel=error

COPY . ./

RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=front-end /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
