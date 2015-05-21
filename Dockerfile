FROM node:0.12.2

ENV APP /home/dev/docker-webui

# Add user exec.
RUN useradd dev

# Install ember and bower.
RUN npm install -g ember-cli bower

# Copy package.json into the image.
COPY package.json $APP/

# Copy package.json into the image.
COPY bower.json $APP/

# Change app's files owner.
RUN chown -R dev:dev $APP /home/dev

USER dev

# npm install inside app's location.
RUN cd $APP && npm install

# Everything up to here was cached. This includes
# the npm install, unless package.json changed.

# bower install inside app's location.
RUN cd $APP && bower install

# Everything up to here was cached. This includes
# the bower install, unless bower.json changed.

USER root

COPY . $APP

# Change app's files owner.
RUN chown -R dev:dev $APP

# Switch to user dev
USER dev

# Set the final working dir to the app's location.
WORKDIR $APP
