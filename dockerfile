FROM node:18-buster-slim AS development
ENV NODE_ENV development

RUN apt-get update && \
    apt-get install -y build-essential \
    wget \
    python3 \
    make \
    gcc \
    libc6-dev
# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY .env .
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

## Seed data
## RUN npm run seed:run

# Start the app
CMD [ "npm", "run", "start:dev" ]
