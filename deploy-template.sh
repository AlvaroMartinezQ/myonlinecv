#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/spa

git init
git add -A
now=$(date)
git commit -m "Github pages deployment $now"

# If you are deploying to git@github.com:<USERNAME>.github.io/<REPO>
# Change as needed
git push -f git@github.com:<USERNAME>.github.io/<REPO>

cd -