FROM nginx:alpine
LABEL author="Albert Alises"
COPY ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]