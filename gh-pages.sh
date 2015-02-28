npm run less
npm run example
cd ../tip-gh-pages
rm -rf build/
mkdir build
cp -r ../tip/build/ build
git add --all
git commit -am "update examples"
git push origin gh-pages:gh-pages