# Chat management server

**2110315: Parallel and Distributed project**

**Note**

- Due to the [restricted ports on Chrome](https://superuser.com/questions/188058/which-ports-are-considered-unsafe-by-chrome), this project will change the requirements from using port 6000 to port 5001
- To test with python file: If using docker toolbox on Windows 10, please **change the uri before testing**.

## Docker

### .env requirements

```
MYSQL_USER=chat-mgt
MYSQL_PASSWORD=1234
MYSQL_DATABASE=chat_management
```

### Run in docker

```
docker-compose up -d
```

### Stop and remove container

```
docker-compose down -v
```

### Testing

Change uri before testing!!!

```
pytest -v test_chatmgmt_server.py
```

## Development

### Steps:

1. install dependency by using `npm install`
2. run mysql database
3. import database by using file: database.sql
4. run development by using `npm start`
5. [for testing:](#Dev-test) `npm test`

### Install dependency

```
npm install
```

### Dev run:

```
npm start
```

### [](#Dev-test) Dev test:

Require package

1. pytest: `pip install pytest`
2. requests: `pip install requests`

```
npm test
```
