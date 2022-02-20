pipeline {
    agent any

    stages {
        stage('Installation') {
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
