# Run project for production mode
```sh
copy docker/.env.dist docker/.env
docker compose -f docker/docker-compose.yml build --no-cache
docker compose -f docker/docker-compose.yml up -d
```

## Open project in your browser.
http://localhost:80/
