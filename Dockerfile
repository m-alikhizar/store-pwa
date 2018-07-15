# Extending image
FROM node:9.11.2-jessie

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Install app dependencies
COPY package.json /usr/src/app/
#COPY package-lock.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Port to listener
EXPOSE 8090

# Environment variables
ENV NODE_ENV development
ENV PORT 8090
ENV PUBLIC_PATH "/"

RUN npm run start:hot

# Main command
CMD [ "npm", "run", "start:hot" ]
