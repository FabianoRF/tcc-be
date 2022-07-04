
# Docker banco de dados

docker run -d --name postgresql -e POSTGRES_PASSWORD=docker  -e POSTGRES_USER=user -e POSTGRES_DB=tcc_project -p 5432:5432 postgres

docker start postgresql
