# -*- coding: utf-8 -*-
"""read_file-data(7.1)

Write a program that prompts for a file name, then opens that file and reads through the file, and print the contents of the file in upper case
"""

file_name = input("Enter the file name: ")

file_handler = open(file_name, 'r')
file_content = file_handler.read()

file_content_uppercase = file_content.upper()

print(file_content_uppercase.rstrip())
