FROM node:13-alpine
COPY . . 
RUN npm install --production
CMD ["npm", "run", "start"]