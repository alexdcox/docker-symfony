FROM debian:jessie

MAINTAINER Alex Cox <dev@alexdcox.co.uk>

RUN apt-get update && apt-get install -y php5-common php5-cli php5-fpm php5-mcrypt php5-mysql php5-apcu php5-gd php5-imagick php5-curl php5-intl

# CMD ["tail", "-f", "/dev/null"]
CMD ["php", "/var/ratchet/src/server.php"]

EXPOSE 8080