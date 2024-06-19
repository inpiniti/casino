# Use the official Node.js 18.17.0 runtime as a parent image
FROM node:18.17.0-buster-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install necessary libraries
RUN apt-get update && apt-get install -y wget gnupg2 unzip fontconfig \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/* \
    && wget https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKkr-hinted.zip \
    && unzip NotoSansCJKkr-hinted.zip \
    && mkdir -p /usr/share/fonts/noto \
    && mv *.otf /usr/share/fonts/noto \
    && chmod 644 -R /usr/share/fonts/noto/ \
    && fc-cache -fv

# Automatically fix detected vulnerabilities
# RUN npm audit fix

# Copy the build output to the working directory
COPY .output ./

# Make port 3000 available to the outside of the docker container
EXPOSE 3000

# Run the application
CMD [ "node", "server/index.mjs" ]

# sudo docker build -t inpiniti/comics:3.3.0 .