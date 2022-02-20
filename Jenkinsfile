pipeline {
    agent any
    
    tools {nodejs "node"}

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
