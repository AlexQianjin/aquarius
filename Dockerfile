# This dockerfile uses the ubuntu image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM node:11.14.0-alpine
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN \
  cd client && \
  npm install && \
  npm run build && \
  cp -r build/* ../server/public && \
  cd ../server && \
  npm install
# Define default command.
# CMD ["npm install && npm start"]
CMD cd server && npm start

# Expose ports.
EXPOSE 1233