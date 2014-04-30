#!/usr/bin/env python
import urllib2
import json
from array import *
from bs4 import BeautifulSoup
import sys

url_constituency=sys.argv[1]
candidate_name=[]
party=[]
cases=[]
education=[]
age=[]

url="http://myneta.info/ls2014/%s" % url_constituency
#url="http://myneta.info/ls2014/index.php?action=show_candidates&constituency_id=172"
soup = BeautifulSoup(urllib2.urlopen(url).read())

table=soup.findAll("table",{"id":"table1"})
tr=table[0].findAll('tr');
for index in range(1,len(tr)):
	td=tr[index].findAll('td')
	temp=td[0].contents[0].contents
	candidate_name.append(str(temp[0]))
	temp=td[1].contents
	party.append(str(temp[0]))
	temp=td[2].contents
	if str(temp[0])=="0":
		cases.append(str(temp[0]))
	else:
		cases.append(str(temp[0].contents[0]))
	
	temp=td[3].contents
	education.append(str(temp[0]))
	temp=td[4].contents
	age.append(str(temp[0]))

# print(candidate_name)
# print(party)
# print(cases)
# print(education)
# print(age)
name_json={}
name_json["name"]=candidate_name
party_json={}
party_json["party"]=party
cases_json={}
cases_json["cases"]=cases
education_json={}
education_json["education"]=education
age_json={}
age_json["age"]=age
final=[]
final.append(name_json)
final.append(party_json)
final.append(cases_json)
final.append(education_json)
final.append(age_json)
print json.dumps(final);





