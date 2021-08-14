# -*- coding: utf-8 -*-
"""Extracting Data from JSON(C-14)
"""

import urllib.request
import urllib.parse
import urllib.error
import ssl
import json

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

address = input('Enter location: ')
print('Retriving ', address)

url = urllib.request.urlopen(address, context=ctx)
data = url.read()
print('Retrieved', len(data), 'characters')

data_json = json.loads(data)
# print(type(data_json))

data_list = data_json['comments']
# print(data_list)

count_list = list()
for item in data_list:
    count_list.append(item['count'])

print(sum(count_list))


data = '''
[
  { "id" : "001",
    "x" : "2",
    "name" : "Chuck"
  } ,
  { "id" : "009",
    "x" : "7",
    "name" : "Brent"
  }
]'''

info = json.loads(data)
print(type(info))
print('User count:', len(info))

for item in info:
    print('Name', item['name'])
    print('Id', item['id'])
    print('Attribute', item['x'])
