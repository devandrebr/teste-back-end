FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libicu-dev \
    libcurl4-openssl-dev \
    libxml2-dev \
    default-mysql-client

RUN docker-php-ext-install \
    intl \
    pdo_mysql \
    curl \  
    zip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/app

COPY ./backend ./

RUN composer install --no-interaction --optimize-autoloader

RUN chmod 777 -R ./storage

EXPOSE 9000

CMD ["php-fpm"]
