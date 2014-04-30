#! /usr/bin/env bash
basename='/home/Anshul/cxps/dev/Seer-Clari5.4.X-baseline/deployment/tomcat-6.0.32/webapps'
pathname='/home/Anshul/cxps/dev/Seer-Clari5.4.X-baseline/deployment/tomcat-6.0.32/webapps/Hackathon';
cd $pathname;
echo "working directory is `pwd`"
sencha app build production
cd build/production/Hackathon

for token in `ls`
do
echo $token
rm -rf $basename/hac/www/$token
cp -r $token $basename/hac/www
pwd
done
cd $basename/hac
cordova prepare android
cordova compile android
cordova run android
