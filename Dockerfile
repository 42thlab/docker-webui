FROM node:0.12.2

ENV APP=/arkis-webui VENDOR=/vendor

# Add user dev.
RUN useradd dev && mkdir /home/dev && chown -R dev:dev /home/dev

# Install ember and bower.
RUN npm install -g \
    ember-cli@1.13.8 \
    bower

# Copy package.json  and bower.json into the image.
COPY *.json $VENDOR/

RUN chown -R dev:dev $VENDOR

USER dev

# npm install inside app's location.
RUN cd $VENDOR && npm install

# Everything up to here was cached. This includes
# the npm install, unless package.json changed.

# bower install inside app's location.
RUN cd $VENDOR && bower install

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
