# youtube-rest-api

### Required tools
```
vscode
terminal
docker
```
### Required commands
```
git
docker
docker-compose
node
npm
npx
```

Documentation running this project
- clone
```
cd your_dir
git clone github......
cd youtube-rest-api
npm install
```

Documentation develompent
- initial npm
```
npm init --yes
```
- install dev dependencies
```
npm install --save-dev sequelize-cli nodemon
```
- install dependencies
```
npm install --save express sequelize pg pg-hstore
```
- initial sequelize
```
npx sequelize-cli init
```
- create migrations or new table
```
npx sequelize-cli model:generate --name Char --attributes name:string,element:string
```
- up migrations
```
npx sequelize-cli db:migrate
```
- create seeders
```
npx sequelize-cli seed:generate --name char-seeder
```
- up seeders
```
npx sequelize-cli db:seed:all
```
