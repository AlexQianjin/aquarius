# This dockerfile uses the mongo image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM mongo
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com
# Config MongoDB.
ENV MONGO_INITDB_DATABASE aquariusdb
COPY initmongo.js /docker-entrypoint-initdb.d

# Define default command.
CMD ["mongod"]

# Expose ports.
EXPOSE 27017
