FROM maven:3.9.5-eclipse-temurin-17

# Устанавливаем Node.js и npm
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файл настроек Maven
COPY settings.xml /root/.m2/settings.xml

# Копируем файл server.js
COPY server.js /usr/src/app/

# Копируем скрипт entrypoint.sh
COPY entrypoint.sh /usr/local/bin/

# Делаем скрипт исполняемым
RUN chmod +x /usr/local/bin/entrypoint.sh

# Открываем порт 8080
EXPOSE 8080

# Указываем ENTRYPOINT
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
