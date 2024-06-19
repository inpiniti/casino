# Use the official Node.js 18.17.0 runtime as a parent image
FROM node:18.17.0-buster-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install necessary libraries
RUN apt-get update && apt-get install -y \
    wget \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    libgbm-dev \
    libxshmfence-dev \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libegl1 \
    libgles2 \
    libatk-bridge2.0-0 \
    libepoxy0 \
    libfribidi0 \
    libgtk-3-0 \
    libharfbuzz0b \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libxinerama1 \
    libxkbcommon-x11-0 \
    libxrandr2 \
    libxshmfence1 \
    libxxf86vm1 \
    libgbm1 \
    libxshmfence1 \
    libxkbcommon-x11-0 \
    libxinerama1 \
    libharfbuzz0b \
    libepoxy0 \
    libgtk-3-0 \
    libfribidi0 \
    libegl1 \
    libgles2 \
    libxrandr2

# Automatically fix detected vulnerabilities
# RUN npm audit fix

# Copy the build output to the working directory
COPY .output ./

# Make port 3000 available to the outside of the docker container
EXPOSE 3000

# Run the application
CMD [ "node", "server/index.mjs" ]

# sudo docker build -t inpiniti/comics:3.3.0 .