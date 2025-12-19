FROM oven/bun:1.1.0

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

CMD ["bun", "backend/server.js"]
