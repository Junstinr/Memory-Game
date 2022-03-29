# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Junstin Reh**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/few-spurious-huckleberry?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- I added a background image

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/GIOqayf.gif)

![](https://i.imgur.com/Rzp587z.gif)

![](https://i.imgur.com/gDD5QBl.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.youtube.com/watch?v=Sv_NAxi_jNs&ab_channel=WebDevSimplified

https://www.freepik.com/free-vector/flat-green-geometric-shapes-background_6283431.htm

https://www.w3schools.com/cssref/pr_background-blend-mode.asp

https://www.flaticon.com/free-icons/shapes?word=shapes&type=icon&shape=outline&order_by=4

https://www.w3schools.com/cssref/css_colors.asp

https://www.w3schools.com/jsref/met_win_clearinterval.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    The biggest challenge that I encountered in creating this submission is making the time countdown function. I looked at the link that was provided for the setInterval and clearInterval and I was confused at how the function worked. After looking at it for a while, I figured out how to create a countdown from 10 seconds. I used the function called myTimer that was provided in the link for setInterval and clearInterval. Since setInterval is like a for loop that calls the function myTimer every 1 second, I created a global variable named Start that holds the number 10 (10 seconds). Every time that setInterval calls the function, I decrease the variable Start by 1 and printed it using the myTimer function. Then, I used conditionals to stop the timer and end the game when the time goes to 0 seconds because the player is limited to 10 seconds to make his/her guess. However, I didn't know how to stop and start the timer. After messing around with my code, I found the solution to this by creating a global variable named myInterval, and set it equal to setInterval to start the timer, and used that variable on clearInterval to stop the timer. Now that I know how to start and stop the timer, it was just knowing where to stop and start the timer. I knew I had to start the timer when the game started so I used setInterval there to start the time timer. Then, when the player guesses the correct answer, I stop the timer, reset the Start variable to 10 so that it starts counting by 10 again, and start the timer again.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After I complete this submission, I found web development to be fun. It is similar to iOS development because I can see the changes that I have made instantly. While working on this submission, I had many questions. I wonder how Glitch was able to publish the website that I made and host it for free and how long will it be hosted? How do I make my website look professional? I spend 5 hours on this website (plus 3 hours answering questions) and it looked amazing, I wonder how it will look if I spend more time on this. How do I host my own website? These are a few of the questions that I have about web development. I am curious about the possibility that I can do with web development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had more hours to work on this project, I would add features like animated buttons, animated background. I have seen games where they have an animated button and background that are not too distracting and I think that would look good in this project. Additionally, The pop-up looks plain and it pops up above the website. I would change the pop-up to have a different background color, bigger font, and make the letters red. I would also make it so that it pops up in the middle of the website to make it easier for the player to see it. Finally, I would change the mouse cursor to something more fun, like a hand pointer.



## Interview Recording URL Link

[My 5-minute Interview Recording]
https://buffalo.zoom.us/rec/play/VxY1Q0pHliulUEZ9tTHTmOHGILg5egVcl_3Ch710aEopAiBAwJTPqnn_PP8QcYUJBPdBfzjIfCLmOiwF.Lh0c0nBf5HnPeYxU?startTime=1648522124000


## License

    Copyright [Junstin Reh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
