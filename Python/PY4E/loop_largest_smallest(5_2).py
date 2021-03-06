# -*- coding: utf-8 -*-
"""loop_largest_smallest(5.2)

Write a program that repeatedly prompts a user for integer numbers until the user enters 'done'. Once 'done' is entered, print out the largest and smallest of the numbers. If the user enters anything other than a valid number catch it with a try/except and put out an appropriate message and ignore the number.
"""

largest = -999999
smallest = 999999
while True:
    user_input = input("Enter any integer number:")
    if user_input == "done":
        break
    try:
        int_usr_inp = int(user_input)
    except:
        print("Invalid input")
        continue

    if (int_usr_inp > largest):
        largest = int_usr_inp
    elif (int_usr_inp < smallest):
        smallest = int_usr_inp

print("Maximum is", largest)
print("Minimum is", smallest)
