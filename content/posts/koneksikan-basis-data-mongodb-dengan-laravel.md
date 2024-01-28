---
title: Koneksikan Basis Data MongoDB dengan Laravel
date: 2024-01-27T16:00:00.000Z
image: /images/post/banner/18.png
categories:
  - MongoDB
  - Laravel
draft: false
---

Dukungan MongoDB di Laravel disediakan secara resmi pada paket [mongodb/laravel-mongodb](https://github.com/mongodb/laravel-mongodb) yang merupakan perluasan dari Eloquent, bawaan Laravel ORM. 

### Instalasi MongoDB di Windows

Untuk menggunakan MongoDB di sistem operasi Windows, saya menyarankan Anda untuk menggunakan [Laragon](https://laragon.org/ "Laragon") sebagai lingkungan pengembangan pada perangkat Anda.

### Aktivasi MongoDB PHP Driver di Windows

1. Silahkan unduh driver dan sesuaikan pada versi PHP yang digunakan pada tautan berikut [https://github.com/mongodb/mongo-php-driver/releases/](https://github.com/mongodb/mongo-php-driver/releases/)
2. Kemudian ekstrak file yang sudah diunduh dan silahkan salin file php\_mongodb.dll ke direktori ekstensi php. Contohnya terletak pada C:\laragon\bin\php\php-8.2.3-nts-Win32-vs16-x64\ext. Jika menggunakan Laragon, untuk masuk ke direktori ekstensi dapat dilakukan dengan cara seperti berikut :
3. Kemudian tambahkan baris berikut extension=php\_mongodb.dll ke file php.ini untuk setiap lingkungan yang perlu menggunakan driver. Jika menggunakan Laragon, untuk mengaktifkan ekstensi mongodb dapat dilakukan dengan cara seperti berikut :

### Konfigurasi MongoDB di Proyek Laravel

##### Instalasi paket MongoDB dengan menggunakan Composer 

```bat
composer require mongodb/laravel-mongodb
```

Tambahkan Service Provider pada file config/app.php

```php
'providers' => [
    // ...
    MongoDB\Laravel\MongoDBServiceProvider::class,
],
```

Tambahkan koneksi MongoDB ke config/database.php:

```php
'connections' => [
    'mongodb' => [
        'driver' => 'mongodb',
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', 27017),
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', 'secret'),
        'options' => [
            'appname' => 'forge',
        ],
    ],
],
```

Terakhir, silahkan atur file .env atau environment variable :

```
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=forge
DB_USERNAME=root
DB_PASSWORD=
```
