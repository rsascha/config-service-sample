FROM nginxinc/nginx-unprivileged:alpine

COPY ./k8s/config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./src/index.html /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
