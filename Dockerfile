FROM node:alpine
RUN apk update && \
    apk upgrade
RUN mkdir /app 
WORKDIR /app
COPY . /app
RUN yarn
ENV PORT=80
EXPOSE 80
CMD node index.js
