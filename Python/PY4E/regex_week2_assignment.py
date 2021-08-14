# -*- coding: utf-8 -*-
"""Regex_week2_assignment
"""

import re

fname = input("Enter file name: ")
fh = open(fname)

lsts = list()
lst = list()
all_num = list()

for line in fh:
    number = re.findall('[0-9]+', line)
    if len(number) > 0:
        lsts.append(number)

for lst in lsts:
    for elem in lst:
        all_num.append(int(elem))

print(sum(all_num))
