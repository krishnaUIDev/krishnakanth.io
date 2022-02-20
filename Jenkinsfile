pipeline {
    agent any

    stages {
        stage('Installation') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 12.x') {
                    sh 'npm config ls'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
                echo 'Hello World'
            }
        }
    }
}
