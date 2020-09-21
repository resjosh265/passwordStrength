# Pure Javascript Password Strength Indicator

Password strength indicator is exactly as the title describes, a password strength indicator build purely in javascript

## Usage

Include the css and script in your page
```
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="passwordIndicator.js"></script>
```

In the passwordIndicator.js, change the following variables at the top of the page to whatever you want the minimum excellent rating to be
```
    //variables to make the password the highest rating
    var minLength = 10;
    var minNumber = 1;
    var minUppercase = 1;
    var minSpecial = 1;
```


Add the onkeyup event to the password field you want to compare again
```
    onkeyup="evaluatePassword(this)"
```

To display the indicator, add the following to wherever you want it to display
```
    <div id="indicatorPlacement"></div>
```

To display the password tips that indicates how to score excellent, add the following wherever you want it to display
```
    <div id="tipsPlacement"></div>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)