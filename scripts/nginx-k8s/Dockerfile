# This dockerfile uses the ubuntu image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM nginx:1.17.6-alpine
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com
# Delete default nginx conf.
RUN \
  rm -f /etc/nginx/conf.d/default.conf
COPY reverse-k8s.conf /etc/nginx/conf.d
# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80
EXPOSE 443