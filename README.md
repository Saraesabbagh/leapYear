# leapYear

We want a simple tool that can tell us if a given year is a leap year or not. 

To do this we must write a method that take a year as an argument and returns a boolean value true/ false (true being- yes it is a leap year, false being- no it is not a leap year.)

## input/output table
| input | output |
| ------| ------- |
|2000   | true |
| 1970 | false |
|1988 | true |
| 1500 | false |

## How to break problem up?
### is a leap year if:
- if year is divisible by 400 (% by 400 = 0) then it is Leap year (eg 2000)
- If year is divisible by 4 but not divisible by 100 then it is a leap year (eg 2004, 2008)
### is a not leap year if:
- if year is divisible by 100 but NOT 400(eg 1700, 1800)
- of year is NOT divisible by 4.(2009, 2011)

-This will probably just need one method and does not need to be a class
- will probably need a conditional statement. with 4 variations. 
- You should call method leapYear
