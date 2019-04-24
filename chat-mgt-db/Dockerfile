FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 1234
ENV MYSQL_DATABASE chat_management
ENV MYSQL_USER chat-mgt
ENV MYSQL_PASSWORD 1234

COPY chat-mgt.sql /docker-entrypoint-initdb.d
