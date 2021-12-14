## PasswordStrengthBars

A React module to render colored bars based on password strength

The modules takes password as an prop and checks following rules on it

1. #### hasDigits = (string) =>
   /\d/.test(string);
2. #### hasUppercase = (string) =>
   /[A-Z]/.test(string);
3. #### hasLowercase = (string) =>
   /[a-z]/.test(string);
4. #### hasEightLength = (string) =>
   (string.length >= 8 ? true : false);
5. #### hasSpecialCharacter = (string) =>
   /._[/!`~\_;'+=@#$%^&_()\]\\,.?":{}|<>-]/.test(string);

Password is categorized into 4 types.

> 1.  Strong: If all above rules are passed, password will be declared as **Strong** and all 4 bars will get **Green**
> 2.  Good: If any 1 of the rules failed password will be declared as **Good** and 3 of the bars will get **Blue**
> 3.  Normal: If any 2 of the rules failed password will be declared as **Normal** and 2 of the bars will get **Orange**
> 4.  Weak: If any 3 of the rules failed password will be declared as **Weak** and 1 of the bars will get **Red**

#### Installation

npm install password-strength-bars
or
yarn add password-strength-bars

#### Usage

```
import PasswordStrengthBar from "password-strength-bars";
<PasswordStrengthBar password={"SamplePass123!"} />
```

#### Props

| Name           | Type    | Default                                                          | Description                                                                     |
| -------------- | ------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| password       | String  | ""                                                               | password for which modules will check the strength and will render bars (lines) |
| containerClass | String  | ""                                                               | Container className to modify any style                                         |
| showTitle      | Boolean | true                                                             | If password title need to be shown below the bars                               |
| strengthTitles | Object  | { weak: "Weak",normal: "Normal", good: "Good", strong: "Strong"} | You can mofify title of the password by passing strengthTitles object           |
