# Loop / Iteration / Repeating the same thing 

def calculateCircleInfo(radius):
    pi = 3.14 
    circumference = 2 * pi * radius 
    area = pi * radius * radius 
    return  "circumference: "+str(circumference)+ " Radius: "+str(radius);    


# Components of loop
#  1) initial value  ::: let x=0
#  2) condition      ::: x<=5
#  3) incriment / decement  ::: x++ 

# Example-1 
for x in range(1,100):
    # starting point
    print("Circle Radius is :" + str(x))
    print(calculateCircleInfo(x))
# Ending point


# loop with 1) For & 2) Map fuction

weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] 
# Type -1  Example-2
for y in weekdays:
    print(y) 




