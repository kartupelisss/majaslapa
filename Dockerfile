# Izmanto Node.js oficiālo attēlu
FROM node:20-alpine

# Darba direktorija konteinerā
WORKDIR /app

# Nokopē package.json un package-lock.json (ja ir)
COPY package*.json ./

# Instalē atkarības
# Ja ir lockfile, izmanto to, ja nav — instalē parastā veidā
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; \
    else npm install --omit=dev; fi

# Nokopē visu projektu
COPY . .

# Izbūvē Next.js projektu
RUN npm run build

# Atver porta
EXPOSE 3000

# Startē serveri
CMD ["npm", "start"]
