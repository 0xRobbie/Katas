'''
KATA: https://www.codewars.com/kata/551f37452ff852b7bd000139/train/python
Solutions: https://www.codewars.com/kata/551f37452ff852b7bd000139/solutions/python
Brief: Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
@param: int, int
@return: str
'''
def add_binary(num1, num2):
    strBinary =  str(bin(num1 + num2))
    return strBinary[2:]

print(add_binary(1,1))   # 10
print(add_binary(0,1))   # 1
print(add_binary(1,0))   # 1
print(add_binary(2,2))   # 100
print(add_binary(51,12)) # 111111