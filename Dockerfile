FROM node:7
WORKDIR /snippet	
COPY package.json /snippet
RUN npm install 
COPY . /snippet
CMD node server.js
EXPOSE 3000