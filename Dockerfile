FROM node

ENV MONGO_URL=mongodb://mongo:27016/crud-mongo PORT=3020 WAIT_FOR=MONGO:27016

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it

RUN chmod a+xr /wait-for-it

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3020

CMD ./wait-for-it ${WAIT_FOR} -- npm start