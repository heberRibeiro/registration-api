FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]