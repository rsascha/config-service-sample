FROM docker.elastic.co/logstash/logstash:7.8.0

COPY config/logstash /usr/share/logstash/config/
COPY config/pipeline/default.conf /usr/share/logstash/pipeline/logstash.conf

ENTRYPOINT [ "/usr/share/logstash/bin/logstash" ]
