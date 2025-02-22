# Use Node.js as the base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files, including src/
COPY . /app

# Expose Vite port
EXPOSE 5173

# Start the development server and allow external access
CMD ["npm", "run", "dev", "--", "--host"]
