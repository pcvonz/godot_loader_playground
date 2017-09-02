#/bin/zsh

yarn run build
git checkout gh-pages
cp -r dist/* .
git add .
git commit -a -m "Updating gh pages"
git push origin gh-pages
git checkout master
echo "Deployed"
