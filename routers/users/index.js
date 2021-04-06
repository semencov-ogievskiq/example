/**
 * Подключение библиотек
 */
const router = require('express').Router()

router.use('/', require('./users'))


/**
 * Экспортируем объект с параметрами:
 * path - Корневой каталог маршрута
 * router - Объект созданный с помощью express.Router()
 */
module.exports = { path: '/users', router: router}  