FROM node:5

# Install apt based dependencies required to run the app.
# As the app image itself is based on a Debian image, we
# use apt-get to install those.
RUN apt-get update && apt-get install -y \
  locales

# Use en_US.UTF-8 as our locale
RUN sed -i "s/^# en_US\.UTF-8/en_US\.UTF-8/" /etc/locale.gen
RUN locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8
RUN update-locale LANG=en_US.UTF-8

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
ENV APP_USER app
ENV APP_HOME /$APP_USER
RUN mkdir -p $APP_HOME && \
    useradd -m -s /usr/sbin/nologin $APP_USER && \
    chown -R $APP_USER:$APP_USER $APP_HOME
USER $APP_USER
WORKDIR $APP_HOME

# Run CLIs from /app/node_modules/.bin
ENV PATH $PATH:/app/node_modules/.bin

EXPOSE 3000 3500

CMD ["npm", "start"]
