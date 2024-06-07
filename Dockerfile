# Use the official Node.js 18.17.0 runtime as a parent image
FROM node:18.17.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install necessary libraries
RUN apt-get update && apt-get install -y libnss3 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libcups2

# Automatically fix detected vulnerabilities
# RUN npm audit fix

# Copy the build output to the working directory
COPY .output ./

# Make port 3000 available to the outside of the docker container
EXPOSE 3000

# Run the application
CMD [ "node", "server/index.mjs" ]

# sudo docker build -t inpiniti/comics:3.3.0 .