pipeline {
   environment {
     imageName = "test-docker"
     dockerRegistry = "https://534562368940.dkr.ecr.ap-south-1.amazonaws.com/test-docker"
     dockerRegistryCredential = 'ecr:ap-south-1:test-ecr-credentials'
     dockerImage = ''
   }
   agent any
   tools {nodejs "node" }
   stages {
     stage('Cloning Git') {
       steps {
         git 'https://github.com/sandelicious/react-app'
       }
     }
     stage('Build') {
        steps {
          sh 'npm install'
        }
     }
     stage('Test') {
       steps {
         sh 'npm test'
       }
     }
     stage('Building image') {
       steps{
         script {
           dockerImage = docker.build imageName + ":$BUILD_NUMBER"
         }
       }
     }
     stage('Upload Image') {
       steps{
         script {
           docker.withRegistry( dockerRegistry, dockerRegistryCredential ) {
             dockerImage.push()
           }
         }
       }
     }
     stage('Remove Unused docker image') {
       steps{
         sh "docker rmi $imageName:$BUILD_NUMBER"
       }
     }
   }
 }
