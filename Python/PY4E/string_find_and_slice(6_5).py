# -*- coding: utf-8 -*-
"""String_find and slice(6.5)

Write code using find() and string slicing (see section 6.10) to extract the number at the end of the line below. Convert the extracted value to a floating point number and print it out.
"""

text = "X-DSPAM-Confidence:    0.8475"

colonpos = text.find(":")
extracted_data = text[colonpos+1:]
data_to_print = extracted_data.strip()
print(float(data_to_print))
