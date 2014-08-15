FROM dockerfile/nodejs
MAINTAINER Johannes Schickling "schickling.j@gmail.com"

ADD package.json /data/package.json
RUN cd /data && npm install
ADD index.js /data/index.js

CMD ["node", "/data/index.js"]
