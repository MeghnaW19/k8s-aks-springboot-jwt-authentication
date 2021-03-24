## Exercise: Deploy a Spring Boot microservice that performs JWT authentication on K8s Cluster in Azure AKS.  

* In this exercise, you will deploy Spring Boot microservices which performs JWT authentication on K8s Cluster in Azure AKS.

This exercise contains following folders:  

	- AngularFrontend - This is an Angular SPA
	- k8s - A folder that contains manifest files
	- UserService - A Spring Boot microservice which generates and returns a JWT token after successful authentication.
	- ProfileService - A Spring Boot microservice which receives a request with a JWT token and verifies it. This service performs the verification using a filter.

  
This exercise contains following files in k8s folder: 

	- angular.yml - This is to create the Service of type LoadBalancer for Angular SPA.
	- configmap.yml - This is to create the ConfigMap.
	- secret.yml - This is to create the K8s Secret.
	- mysql.yml - This is to create the Service for MySQL. It will also configure a PersistentVolume, PersistentVolumeClaim, Deployment, and a Service of type ClusterIP.
	- userservice.yml - This is to create the Service of type LoadBalancer for UserService.
	- profileservice.yml - This is to create the Service of type LoadBalancer for ProfileService.
  

**Note**: You need to go through the comments thoroughly and complete the exercise.  

Understand and perform following steps to complete this exercise:
  

	1. Verify that the AKS cluster is created and is ready.
	2. Modify the properties in `application.yml` of `UserService`. Push UserService image to Docker Hub
	3. Modify the properties in `application.yml` of `ProfileService`. Push ProfileService image to Docker Hub.
	4. Implement `configmap.yml` to define a ConfigMap.
	5. Implement `secret.yml` to define a Secret.
	6. Implement `mysql.yml`.
	7. Implement `userservice.yml` to define the Deployment, a Service of type LoadBalancer for UserService.
	8. Implement `profileservice.yml` to define the Deployment, a Service of type LoadBalancer for ProfileService.
	9. In AngularFrontend, make changes in environments/environment.ts file, change API as follows `<external-ip-of-UserService>:<port>/api/v1/`, API_PROFILE as '<external-ip-of-ProfileService>:<port>/api/v1/'.
	10. Build AngularFrontend and push the docker image to Docker Hub.
	11. Implement `angular.yml` to define the deployment, service of type LoadBalancer for Angular SPA.
	12. To test the Angular SPA, open browser and access `<external-ip-of-angular-service>:<port>` url.



### Instructions

- Take care of whitespace/trailing whitespace
- Do not change the provided code unless instructed
- Ensure your code compiles without any errors/warning/deprecations
- Follow best practices while coding
