
# RosMolodezhProgredi
Сайт для трансофрмирования данных о субъектах государственной молодёжной политики и результатах их деятельности в понятный визуальный формат

## Содержание

* [Установка](#установка)
* [Использование](#использования)
* [Что используется](#что-использоваться)
* [Разработчики](#разработчики)

## Установка

### Клонирование репозитория
``` bash
# clone repo
$ git clone https://github.com/IamVOC/RosMolodezhProgredi.git

# go to app's dir
$ cd RosMolodezhProgredi

# install dependencies
$ pip install -r requirements.txt
```

## Исполльзование
``` bash
# run django app
$ python3 manage.py runserver
```

## Что используется
```
<PROJECT_ROOT>
├── main/
│   ├── templates/
│   │   └── <HTML, CSS, JS>
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   └── views.py
├── RosM/
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── requirements.txt
└── manage.py
```

## Разработчики
**ProgRedi **
