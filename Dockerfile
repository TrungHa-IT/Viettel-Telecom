# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Install build tools for better-sqlite3 native compilation
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install --include=dev

COPY . .

# Run build
RUN npm run build

# Clean up devDependencies
RUN npm prune --omit=dev

# Directory for SQLite DB
RUN mkdir -p /app/data

EXPOSE 3000

CMD ["npm", "start"]
