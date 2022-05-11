FROM openjdk:13-alpine
RUN mkdir /opt/app
COPY ./build/libs/backend-0.0.1-SNAPSHOT.jar /opt/app
CMD ["java", "-jar", "/opt/app/backend-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080/tcp