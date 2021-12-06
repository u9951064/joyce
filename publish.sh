#!/bin/bash
# Program:
#       Publish to git hub page
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
set -e

export DOMAIN=$(<"./static/CNAME")
echo "Target Domain: ${DOMAIN}"
echo "Generate static files"
npm run generate

echo "Delopy to github page"

cd dist
[ -d .git ] && rm -rf .git
git init
git add --all
git commit -m "delopy"
git branch -M gh-page
git push --set-upstream -f git@github.com:u9951064/joyce.git gh-page

echo "Succcess! https://${DOMAIN}/"
exit 0
