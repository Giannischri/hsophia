# Specify the base image. Here, we use Node.js 16 as our base image.
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) files
COPY package*.json ./

# Install project dependencies
RUN npm install
COPY . .
RUN npm run build -- --configuration production
# Copy the rest of your app's source code
EXPOSE 4200

CMD ["npm", "start"]

# Expose the port the app runs on

