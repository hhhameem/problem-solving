# -*- coding: utf-8 -*-
"""grade_calculator(3.3)

Write a program to prompt for a score between 0.0 and 1.0. If the score is out of range, print an error. If the score is between 0.0 and 1.0, print a grade using the following table:
Score Grade
  gt= 0.9 A(gt means greater than)
  gt= 0.8 B
  gt= 0.7 C
  gt= 0.6 D
  st 0.6 F(st means smaller than)
If the user enters a value out of range, print a suitable error message and exit. For the test, enter a score of 0.85.
"""

score = float(input("Enter a value between 0.0 and 1.0: "))

if(score > 1.0 and score < 0.0):
    print("Your entered value is out of range")
    quit()
else:
    if(score >= 0.9):
        print("A")
    elif(score >= 0.8):
        print("B")
    elif(score >= 0.7):
        print("C")
    elif(score >= 0.6):
        print("D")
    elif(score < 0.6):
        print("F")
