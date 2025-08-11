# --- 1) Atkarības ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# nelietojam `ci`; ļaujam npm atrisināt atkarības
RUN npm install --legacy-peer-deps

# --- 2) Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ja vajag, var atslēgt Next telemetriju:
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- 3) Runtime ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# iekopējam visu, ko uzbūvējām
COPY --from=build /app ./
# izvācam dev-deps no gala attēla
RUN npm prune --omit=dev

EXPOSE 3000
CMD ["npm","start"]
