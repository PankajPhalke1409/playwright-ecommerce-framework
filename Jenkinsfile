pipeline {

    agent any

    tools {

        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {

            steps {

                git branch: 'main',
                url: 'https://github.com/your-repo.git'
            }
        }

        stage('Install Dependencies') {

            steps {

                sh 'npm install'
            }
        }

        stage('Install Browsers') {

            steps {

                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {

            steps {

                sh 'npx playwright test'
            }
        }

        stage('Publish Report') {

            steps {

                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**/*'
        }
    }
}