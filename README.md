# A Node.js application

## Installing packages

```
docker-compose run app npm install
```

## Starting the app

```
docker-compose up
```

The app should now be running on http://\<docker machine ip>:3500/. Switch to a new terminal for the rest of the setup (I know, I'm working on this).

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
