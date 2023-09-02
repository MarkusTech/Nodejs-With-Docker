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






--------------------------------------------------------------------------------
> docker build .
> docker build -t node-app-image .
> docker run -v ${pwd}:/app -p 5000:5000 -d --name node-app node-app-image
