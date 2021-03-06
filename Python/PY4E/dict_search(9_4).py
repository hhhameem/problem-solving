# -*- coding: utf-8 -*-
"""dict_search(9.4)

Write a program to read through the mbox-short.txt and figure out who has sent the greatest number of mail messages. The program looks for 'From ' lines and takes the second word of those lines as the person who sent the mail. The program creates a Python dictionary that maps the sender's mail address to a count of the number of times they appear in the file. After the dictionary is produced, the program reads through the dictionary using a maximum loop to find the most prolific committer
"""

fname = input("Enter file name: ")
if len(fname) < 1:
    fname = "mbox-short.txt"
fh = open(fname)
count = 0
sender_dict = {}

for line in fh:
    if 'From ' not in line:
        continue
    line_content = line.split()
    sender_dict[line_content[1]] = sender_dict.get(line_content[1], 0)+1

max_sender = None
max_sent = None
for sender, sent in sender_dict.items():
    if max_sent is None or sent > max_sent:
        max_sender = sender
        max_sent = sent

print(max_sender, max_sent)
