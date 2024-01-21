FROM node

# Create app directory
WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install ; \
    fi
# RUN npm install

COPY . .
