#!/bin/bash
cd /home/ubuntu/kelp-sale-dApp 
git pull origin main
source .env
. ~/.nvm/nvm.sh
yarn install &&
yarn build &&
pm2 restart kelp-presale-dApp