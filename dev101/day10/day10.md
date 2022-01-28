# AWS EC2 - Ubuntu 20.04 + Nginx 80 to 3000
## native NVM + pm2
- Install NVM & pm2 globally
  ```
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  nvm install 12
  npm install -g pm2@latest
  ```

## Nginx
- Install Nginx
  ```
  sudo apt update
  sudo apt -y install nginx
  nginx -v
  sudo nano /etc/nginx/sites-available/node
  ```
- Configuration 80 to 3000
  ```
  server {
      listen 80;
      server_name localhost;

      location / {
          proxy_set_header   X-Forwarded-For $remote_addr;
          proxy_set_header   Host $http_host;
          proxy_pass         "http://127.0.0.1:3000";
      }
  }
  ```
- Remove default & start node nginx
  ```
  rm -rf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
  sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node
  sudo nginx -t
  sudo service nginx restart
  service nginx status
  ```
- Restart automatically on server reboot
  ```
  sudo chmod +x /etc/init.d/nginx
  sudo update-rc.d -f nginx defaults
  ```
