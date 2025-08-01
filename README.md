Manual instalixation
- clone the repo
- strat a postgres database locally, either via docker or the direct postgres setup, on 5432 
- pnpm install
- add your database string in the .env
- go to packages/db , run 
    npx prisma generate
    npx prisma migrate dev
- cd apps/apps/web

Docker1
- docker network create turbo_network
- docker run -d -e POSTGRES_PASSWORD=your_password --name my_postgres --network turbo_network -p 5432:5432 postgres
- docker build -f ./docker/Dockerfile.backend -t turbo-be .
- docker build -f ./docker/Dockerfile.ws -t turbo-ws .
- docker build -f ./docker/Dockerfile.web -t turbo-web .
- docker run --name turbo-web -p 3000:3000 --network turbo_network turbo-web  
- docker run --name turbo_ws -p 8080:8080 --network turbo_network turbo-ws   
- docker run --network turbo_network -p 3001:3001 --name turbo_backend  turbo-be

Docker compose

