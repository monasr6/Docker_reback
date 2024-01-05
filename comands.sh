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


