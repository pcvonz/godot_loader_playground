#/bin/zsh

git checkout gh-pages
cp -r static/* .
git add .
git commit -a -m "Updating gh pages"
git push origin gh-pages
git checkout master
echo "Deployed"
