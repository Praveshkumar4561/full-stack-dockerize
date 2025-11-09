# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Install serve package globally
RUN npm i -g serve

# Copy build output from previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
