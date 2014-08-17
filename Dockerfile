FROM node
MAINTAINER Johannes Schickling "schickling.j@gmail.com"

# copy application
ADD app /data

# set workdir
WORKDIR /data

# install dependencies
RUN npm install

# define volume mount point
VOLUME ["/data/crawlers"]

CMD ["node", "index.js"]
