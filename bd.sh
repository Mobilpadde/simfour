yarn install

export NODE_ENV=production
yarn build

rm /home/mcordes/maweco/simFour -rf
cp dist /home/mcordes/maweco/simFour/ -r
