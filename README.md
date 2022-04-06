# Browser Technologies: Enquête

Fill in a enquête, which works on every device and every browser

HTML | HTML+CSS 
:-------------------------:|:-------------------------:
![HTML](https://github.com/lottekoblens/browser-technologies-2122/blob/main/images/css-html.png) |  ![HTML and CSS](https://github.com/lottekoblens/browser-technologies-2122/blob/main/images/css-css.png) 

## :bookmark_tabs: Table of contents
* [Concept](https://github.com/lottekoblens/browser-technologies-2122#bulb-concept)
* [Wireflow]()
* [Progressive Enhancement](https://github.com/lottekoblens/browser-technologies-2122#progressive-enhancement)
* [Features](https://github.com/lottekoblens/browser-technologies-2122#high_brightness-features)
* [Browsers]()
* [Assessment](https://github.com/lottekoblens/browser-technologies-2122#clipboard-assessment)
* [Rubric](https://github.com/lottekoblens/browser-technologies-2122#clipboard-rubric)
* [Installation](https://github.com/lottekoblens/browser-technologies-2122#wrench-installation)
* [Process](https://github.com/lottekoblens/browser-technologies-2122#chart_with_upwards_trend-process)
* [Wishlist](https://github.com/lottekoblens/browser-technologies-2122#pencil-wishlist)
* [Resources](https://github.com/lottekoblens/browser-technologies-2122#open_file_folder-resources)
* [License](https://github.com/lottekoblens/browser-technologies-2122#bookmark-license)

## :bulb: Concept

The user can fill in a enquête about the minor web design and development. The user experience gets better and better when CSS and JavaScript work, but with only HTML the core functionality (filling in and sending the survey) still works. CSS and JAvascript are only there to add functionality and improve the design.

**User story:**

'I want to be able to fill in a survey about the minor Web Development, with different answer options. If I don't finish the survey, I'll want to pick up where I left off later.'

## Wireflow

<img src="https://github.com/lottekoblens/browser-technologies-2122/blob/main/images/wireflow.jpg" width="600">

## Progressive Enhancement

The core functionality is filling in the survey. I achieved this by writing good HTML built with forms. 
The layer on top of that is the CSS. This makes the survey look nicer and adds a small animation to trigger the user to start the survey. 
The layer on top of that is JavaScript. With this I give the user the option to change the answers after completing the survey.

### Layers

<details>
  <summary>Functional</summary>
  
* Users fill in and submit a survey
* User can fill in survey with the use of the keyboard
</details>

<details>
  <summary>Reliable</summary>
  
* Validate the form by using the required attribute in HTML
</details>

<details>
  <summary>Usable</summary>
  
* CSS for more positioning elements, adding padding and margin to make everything more readable.
* Focus state added with CSS
* Show a green border with CSS around the input field when the input is valid
</details>

<details>
  <summary>Pleasurable</summary>
  
* Answers will be stored in json files
* Change answers after completing the entire survey
* Animation to trigger the user to start the survey
</details>

### Insights

During this project I gained several insights regarding the application of progressive enhancement. You can read about this [here](https://github.com/lottekoblens/browser-technologies-2122/wiki/Inzichten).

## :high_brightness: Features

* Fill in enquête
* Save answers that are filled in
* Change the answers after completing the survey

## Browsers

<details>
  <summary>Google Chrome (desktop)</summary>
  
* Disable Javascript: 
  You can no longer change answers (because this requires client side JavaScript)
* Disable CSS: 
  Survey can still be completed and sent correctly
* Focus state: 
  The focus state works properly in Chrome
</details>

<details>
  <summary>Safari (desktop)</summary>
  
* Disable Javascript: 
  You can no longer change answers (because this requires client side JavaScript)
* Disable CSS: 
  Survey can still be completed and sent correctly
* Focus state: 
  The focus state works properly in Chrome
</details>

<details>
  <summary>Safari (iOS)</summary>

* Disable Javascript: 
  You can no longer change answers (because this requires client side JavaScript)
* Disable CSS: 
  Survey can still be completed and sent correctly
* Border of the input fields is almost invisible, so I made it more visible with the following code:
  ```css
  input[type="text"],
  input[type="date"],
  textarea {
    border: 0.15em solid black;
  }
  ```
</details>

<details>
  <summary>Browser Revolution telefoon</summary>

* Disable Javascript: 
  You can no longer change answers (because this requires client side JavaScript)
* Disable CSS: 
  Survey can still be completed and sent correctly
* Border of the input fields is almost invisible, so I made it more visible with the following code:
  ```css
  input[type="text"],
  input[type="date"],
  textarea {
    border: 0.15em solid black;
  }
  ```
</details>

## :clipboard: Assessment

For this assignment you will design an interactive application. Ensure that all users, with all browsers, see, hear and/or feel at least the core functionality in every context.

### :clipboard: Rubric

![Rubric](https://github.com/lottekoblens/browser-technologies-2122/blob/main/images/rubric.png)

## :wrench: Installation

1. Clone this repository by putting this in your terminal:

`git clone https://github.com/lottekoblens/browser-technologies-2122.git`

2. Install the project by putting in the following in the terminal:

`npm install`

3. Run the project by putting this in the terminal:

`npm start`

## :chart_with_upwards_trend: Process

If you want to know more about my process, you can read it [here](https://github.com/lottekoblens/browser-technologies-2122/wiki/Proces).

## :pencil: Wishlist

There are a few things I haven't done (because of a lack of time), but I wanted to do in this project:

* Save the data that is filled in in a database and not in a JSON file. So it can be saved for every user

## :open_file_folder: Resources

* Can I use. . . Support tables for HTML5, CSS3, etc. (z.d.). Caniuse. Geraadpleegd op 23 maart 2022, van https://caniuse.com/
* W3 Schools. (z.d.-b). Node.js File System Module. Geraadpleegd op 6 april 2022, van https://www.w3schools.com/nodejs/nodejs_filesystem.asp

## :bookmark: License

This repository has the [MIT](https://github.com/lottekoblens/browser-technologies-2122/blob/main/LICENSE) license.

