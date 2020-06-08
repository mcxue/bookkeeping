#!/usr/bin/env bash
yarn build
cd build
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:mcx2020/bookkeeping.git master:gh-pages
git push -f git@gitee.com:mcx2020/bookkeeping.git master
cd ..