#!/usr/bin/env python
import urllib2
import json
from array import *
from bs4 import BeautifulSoup
states=[]
constituencies=[]
constituency_list=[]
url="http://en.wikipedia.org/wiki/List_of_constituencies_of_the_Lok_Sabha"
soup = BeautifulSoup(urllib2.urlopen(url).read())
h3=soup.findAll('h3')
for index  in range(0,35):
   individual_h3=h3[index]
   name= individual_h3.contents[0].contents[0].get("title")
   states.append(name)


   
  
def json_list(list):
    lst = []
    for pn in list:
        d = {}
        d['state_name']=pn
        lst.append(d)
    return json.dumps(lst)

def json_list2(list2):
   lst=[]
#   print len(list2)
   for i  in range(0, len(list2)):
      pn=list2[i]
      d={}
      d["constituency_name"]=pn
      lst.append(d)
   return json.dumps(lst)
 
def json_final(list3):
   lst=[]
   for j in range(0,len(list3)):
      pn=list3[j]
      d={}
      d[states[j]]=pn
      lst.append(d)
   return json.dumps(lst)
      
      



tables=soup.findAll('table')
for index in range(1,36):
   individual_h3=h3[index-1]
   individual_table=tables[index]
   table_row= individual_table.findAll('tr')
   for index2 in range(1,len(table_row)):
      table_individual_row=table_row[index2]
      columns=table_individual_row.findAll('td')
      desired_column=columns[1]
      desired_link=desired_column.findAll('a')[0]
      inner_link=desired_link.contents
      for index3 in range(0,len(inner_link)):
         individual_link=inner_link[index3]
         constituencies.append(individual_link)
   constituency= json_list2(constituencies)
   constituency_list.append(constituency)
   constituencies=[]

state_names_list={}
state_names_list["all_names"]=states;
small= json.dumps(state_names_list) 
big= json_final(constituency_list)

final_json_object={};
final_json_object["only_states"]=small
final_json_object["all_the_detail"]=big
print json.dumps(final_json_object)
