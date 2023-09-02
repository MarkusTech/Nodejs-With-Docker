FROM node:18
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . ./
EXPOSE 5000
ENV PORT 5000
USER node
CMD npm run dev
