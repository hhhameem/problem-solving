# -*- coding: utf-8 -*-
"""search and sort(10.2)

Write a program to read through the mbox-short.txt and figure out the distribution by hour of the day for each of the messages. You can pull the hour out from the 'From ' line by finding the time and then splitting the string a second time using a colon.

 Once you have accumulated the counts for each hour, print out the counts, sorted by hour as shown below.
"""

fname = input("Enter file name: ")
if len(fname) < 1:
    fname = "mbox-short.txt"

fh = open(fname)
count = 0
hours = {}

for line in fh:
    if 'From ' not in line:
        continue
    line_content = line.split()
    time = line_content[5]
    split_time = time.split(':')
    hour = split_time[0]
    hours[hour] = hours.get(hour, 0)+1

for h, o in sorted(hours.items()):
    print(h, o)
