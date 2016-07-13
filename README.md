# A Node.js application

## Installing packages

```
docker-compose run app npm install
```

## Creating the database

```
docker-compose run app npm run db:create
```

## Running database migrations

```
docker-compose run app npm run db:migrate
```

## Seeding the database

```
docker-compose run app npm run db:seed
```

## Starting the app

```
docker-compose up
```

The app should now be running on http://\<docker machine ip>:3500/.
