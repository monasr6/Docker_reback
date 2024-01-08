# to show the containers that is running now
docker ps

# to remove container and stop it (-f for force stop)
docker rm reback-container -f

# to run container and name it (-d to don't show cmd of opp in my cmd )
docker run --name reback-container -d docker-reback

# to create image (-t for naming image)
docker build -t docker-reback .

# to show the list of images in machine
docker image ls

# to run the terminal of container ( -it to extract terminal to me in my cmd )
docker exec -it reback-container bash

# to stop container
docker stop reback-container

# to run container
docker start reback-container

# to show the logs of container
docker logs reback-container

# to show the logs of container in real time
docker logs reback-container -f

# to create containers with docker-compose ( -d to don't show cmd of opp in my cmd , --build to build the image , -f to choose the file ) ()
# scale to create more than one container and have to delete container name from docker-compose.yml file
docker-compose -f .\docker-compose.yml -f .\docker-compose-dev.yml up -d --build --scale node-reback=2




