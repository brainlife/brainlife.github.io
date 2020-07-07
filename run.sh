
#build
docker run --name brainlife-web -d --network host --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll serve

