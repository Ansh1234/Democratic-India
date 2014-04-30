#!/usr/bin/env python
import urllib2
import json
from array import *
from bs4 import BeautifulSoup
states_name=[]
name_link=[]

url="http://myneta.info/ls2014/"
soup = BeautifulSoup(urllib2.urlopen(url).read())
div=soup.findAll("div",{"class":"items"})


for index in range(1,len(div)):
  contents=div[index].contents[1]
  link=contents.contents
  for index2 in range(0,len(link)):
    name=link[index2]
    states_name.append(name);
  name_link.append(contents.get("href"))

states_name_json={}
states_name_json["name"]=states_name
name_link_json={}
name_link_json["link"]=name_link
final = []
final.append(states_name_json)
final.append(name_link_json)
print json.dumps(final)
