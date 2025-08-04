FROM nginx:1.29.0-alpine

# Install envsubst (from gettext)
RUN apk add --no-cache gettext

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
COPY static/config.template.js /usr/share/nginx/html/config.template.js
COPY entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
