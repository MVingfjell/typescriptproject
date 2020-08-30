FROM node:12.0.0
RUN mkdir -p /usr/src/webapp/typescriptproject

COPY dist /usr/src/webapp/typescriptproject/dist
COPY assets /usr/src/webapp/typescriptproject/assets

COPY data.json /usr/src/webapp/typescriptproject/
COPY server.js /usr/src/webapp/typescriptproject/
COPY deploy-package.json /usr/src/webapp/typescriptproject/package.json

WORKDIR /usr/src/webapp/typescriptproject/

RUN echo 'package-lock=false' >> .npmrc 
RUN  npm install 
EXPOSE 4000
CMD ["node", "server.js"]
