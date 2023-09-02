# Nodejs-With-Docker

> docker build .
> docker image ls
> docker image rm 259119df41ed          --- // delete docker image
> docker build -t node-app-image .      --- // Create docker image
> docker run node-app-image             --- // Run docker
> docker run -d --name node-app node-app-image
> > docker ps                           --- // display docker
> docker rm romantic_montalcini -f      --- // Kill Docker container
> docker run -p 5000:5000 -d --name node-app node-app-image      --// RUN DOCKER IMAGE
> docker ps ------ and select the port
> docker exec -it node-app bash         --- // Open bash for docker
> docker run -v ${pwd}:/app -p 5000:5000 -d --name node-app node-app-image       ---// run docker
> docker logs node-app






--------------------------------------------------------------------------------
> docker build .
> docker build -t node-app-image .
> docker run -v ${pwd}:/app -p 5000:5000 -d --name node-app node-app-image
> docker rm node-app -f        ----// kill docker running
> docker logs node-app         ----// run docker under nodemon

>docker run -v ${pwd}:/app:ro -p 5000:5000 -d --name node-app node-app-image      ----// ro-(READ ONLY) added

---------------------------------------------------------------------------------
--------------------- chose these if above is not running -----------------------
> docker run -v ${pwd}:/app -v /app/node_modules -p 5000:5000 -d --name node-app node-app-image      ----// docker with a path node_modules

