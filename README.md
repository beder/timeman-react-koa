# A Node.js application

## Starting the app

```
docker-compose up
```

The app should now be running on http://\<docker machine ip>:3500/.

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
