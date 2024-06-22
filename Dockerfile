FROM --platform=linux/amd64 node:18-alpine
ARG DB_HOST=${DB_HOST}
ARG DB_USERNAME=${DB_USERNAME}
ARG DB_PASSWORD=${DB_PASSWORD}
ENV DB_HOST="test-host"
ENV DB_USERNAME="test-username"
ENV DB_PASSWORD="test-password"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=DB_HOST=${DB_HOST} --configuration=DB_USERNAME=${DB_USERNAME} --configuration=DB_PASSWORD=${DB_PASSWORD}
CMD ["node", "dist/main.js"]