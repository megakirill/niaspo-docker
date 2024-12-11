FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и устанавливаем зависимости
ADD package*.json ./
RUN npm install

# Копируем содержимое папки src
ADD src /app/src

# Открываем порт 80
EXPOSE 80

# Запускаем приложение
CMD ["npm", "start"]
