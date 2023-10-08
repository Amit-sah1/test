#1 tutorial weekss
'''a=[[24,3,6],[8,12,18],[2,66,7]]
min =a[0][0]
max=a[0][0]
divide=[]
for i in range (len(a)):
    for j in range(len(a[i])):
                   if a[i][j]%2==0 and a[i][j]%3==0:
                       divide.append(a[i][j])
                   if max<a[i][j]:
                       max=a[i][j]
                   if min> a[i][j]:
                       min=a[i][j]
                   
                   
                   
print(divide)
print(max)
print(min)

#write a program that takes inut as name and marks obtained on a certain subject of N students.then the data on must be stored int a dictionary with the name
d={}
loop=True
while loop == True:
    name = input("enter your name: ")
    marks = int(input("enter your marks: "))
    d.update ({name:marks})
    A = input("Do you want to continue bitch : ")
    if A == "no" :
        #loop = False
        break
        
print(d)
'''
#workshop
#q.5
a=[[]]
