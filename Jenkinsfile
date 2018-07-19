node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    // stage('Build Docker test'){
    //   sh 'docker build -t store -f Dockerfile.test --no-cache . '
    // }
    // stage('Docker test'){
    //   sh 'docker run --rm store'
    // }
    // stage('Clean Docker test'){
    //   sh 'docker rmi store'
    // }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t store --no-cache .'
        sh 'docker tag store localhost:5000/store'
        sh 'docker push localhost:5000/store'
        sh 'docker rmi -f store localhost:5000/store'
      }
    }
  }
  catch (err) {
    throw err
  }
}
