npm i для клиента и сервера

Парочку команд для Postgres:
1. Создание таблиц
- npx sequelize model:generate --name User --attributes name:string
- npx sequelize model:generate --name Post --attributes body:text,user_id:integer
- Донастраиваем в migrations
2. Создаем таблицы на основании миграций
- npx sequelize db:migrate
3. Удаление всех данных npx sequelize db:migrate:undo:all
4. Создание сидов npx sequelize seed:create --name User



У НАС ВСЕ ПОЛУЧИТСЯ!
