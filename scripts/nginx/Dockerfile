# This dockerfile uses the ubuntu image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM ubuntu
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com
# Install Nginx.
RUN \
#  echo "nameserver 8.8.8.8" >> /etc/resolv.conf && \
#  echo "deb http://archive.ubuntu.com/ubuntu/ bionic main universe" >> /etc/apt/sources.list && \
  apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf 
COPY reverse.conf /etc/nginx/conf.d
# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80
EXPOSE 443