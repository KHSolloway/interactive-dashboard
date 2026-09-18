# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TO DO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.


## Weekly Task Goals
The Weekly Task Goal Calculator takes the Daily Task Goal, multiplies it by 5 (5 days/week) to calculate the Weekly Goal. It then adds the Weekly Bonus Tasks to the  Weekly Goal and displays the Total Weekly Tasks.


## Imperial/Metric Converter
This program accepts two inputs from the user: a measurement value and a conversion type. Once these two values are inputted, the program converts the measurement value from Imperial to Metric OR Metric to Imperial. It is set up to allow for the following conversions:

- inch to centimeter
- foot to centimeter
- yard to meter
- mile to kilometer
- centimeter to inch
- centimeter to foot
- meter to yard
- kilometer to mile

### Logic and Pseudocode

BEGIN  
INPUT Value  
INPUT conversionChoice  
IF conversionChoice = “inch to centimeter” THEN  
	SET result = Value * 2.54  
ELSE IF conversionChoice = “foot to centimeter” THEN  
	SET result = Value * 30.48  
ELSE IF conversionChoice = “yard to meter” THEN  
	SET result = Value * 0.91  
ELSE IF conversionChoice = “mile to kilometer” THEN  
	SET result = Value * 1.61  
ELSE IF conversionChoice = “centimeter to inch” THEN  
	SET result = Value * 0.39  
ELSE IF conversionChoice = “centimeter to foot” THEN  
	SET result = Value * 0.0328  
ELSE IF conversionChoice = “meter to yard” THEN  
	SET result = Value * 1.09  
ELSE IF conversionChoice = “kilometer to mile” THEN  
	SET result = Value * 0.62  
DISPLAY result  
END
