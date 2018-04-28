yarn install

export NODE_ENV=production
yarn build

rm /home/mcordes/maweco/static/simFour -rf
cp dist /home/mcordes/maweco/static/simFour/ -r
