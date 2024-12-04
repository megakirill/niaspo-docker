# Используем официальный образ Drupal
FROM drupal:9.4-apache

# Устанавливаем необходимые расширения PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

# Устанавливаем Composer для управления зависимостями
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Копируем файлы сайта (если есть)
COPY src/index.html /var/www/html


# Устанавливаем права доступа
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
