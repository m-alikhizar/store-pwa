# Extending image
FROM node:9.11.2-jessie as builder

# RUN npm install npm@6.2.0
# RUN rm -rf /usr/local/lib/node_modules/npm
# RUN mv node_modules/npm /usr/local/lib/node_modules/npm

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app/
# COPY package-lock.json /usr/src/app/
# COPY node_modules /usr/src/app/

# RUN npm install -dd

# Bundle app source
COPY . /usr/src/app

# Expose port 8090 for NGINX

# Environment variables
ENV NODE_ENV production
ENV PUBLIC_PATH "/"


ENV PATH /usr/src/app/node_modules/.bin:$PATH

# RUN yarn start:build

# production environment

FROM nginx:1.15.1

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 8080

ENV PORT 8080

#CMD ["nginx", "-g", "daemon off;"]

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
