
# hello-docker
[![Build Status](https://travis-ci.org/lomkju/hello-docker.svg?branch=master)](https://travis-ci.org/lomkju/hello-docker)

Just use this container to test your kubernetes node/pod public ip and hostname.

#### Simple command to start the container:

    docker run -d --name hello-docker -p 8080:80 lomkju/hello-docker
  
#### Sample yaml for kubernetes:

    ---
    kind: Service
    apiVersion: v1
    metadata:
      name: hello-docker
      labels:
        app: hello-docker
    spec:
      ports:
      - name: tcp-80-80-dvpfq
        protocol: TCP
        port: 80
        targetPort: 80
      selector:
        app: hello-docker
    status:
      loadBalancer: {}
    ---
    kind: Deployment
    apiVersion: extensions/v1beta1
    metadata:
      name: hello-docker
      labels:
        app: hello-docker
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: hello-docker
      template:
        metadata:
          name: hello-docker
          labels:
            app: hello-docker
        spec:
          containers:
          - name: hello-docker
            image: lomkju/hello-docker:latest
          restartPolicy: Always
