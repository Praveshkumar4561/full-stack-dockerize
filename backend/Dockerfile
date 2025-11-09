# Use Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port (same as your server.js)
EXPOSE 1700

# Start the server
CMD ["node", "server.js"]
