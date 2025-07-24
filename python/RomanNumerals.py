# Translate decimal numbers into Roman numerals
# Use a translation table
numbers = [1000, 900, 500, 400, 100,  90, 50,  40,  10,  9,  5,    4,   1]
names   = [  'M', 'CM','D','CD', 'C','XC','L','XL', 'X','IX','V','IV', 'I']

def roman(number:int)->str:
    "Take a decimal number and return Roman Numeral Representation"

    #List of Roman symbols
    res=[]

    while (number>0):
       #Find the largest amount we can chip off
       for i,val in enumerate(numbers):
           if(number>=val):
               res.append(names[i])
               number=number-val 
               break 

    return ''.join(res)