# CI/CD
- [GitLab CI/CD](https://link.medium.com/DeUwWz62fnb)
- GitHub actions
  * today's lab [repository](https://github.com/biligunb/github-actions)
    - GitHub Actions - workflow
    - deploy.sh

## When MR merged into `develop` branch
- Run unit test (CI)
  * Skipped in this lab
  * Usually CD comes after CI stage passes successfully
- Deploy to EC2 (pm2)
  * using GitHub actions to EC2
