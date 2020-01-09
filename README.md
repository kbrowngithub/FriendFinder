# FriendFinder
```
Compatibility-based "Friend-Finder" application
```

### Link: 

https://limitless-mountain-34938.herokuapp.com/


```
Designed and Developed by: Kevin Brown
```

# Project Overview
```
A compatibility-based "FriendFinder" application. This full-stack site takes in results from a users'
surveys, compares their answers with those from other users, and then displays the name and picture 
of the user with the best overall match.

```

# Organizational Overview

### Process Flow
```
    A survey is first offered to the user with 10 questions. Each answer is on a scale of 1 to 5 based on 
    how much the user agrees or disagrees with a question.

    Data is stored inside of app/data/friends.js as an array of objects. Each of these objects
    has the following format:
            {
                "name":"SomeName",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/some-pic.jpg",
                "scores":[
                            5,
                            1,
                            4,
                            4,
                            5,
                            1,
                            2,
                            5,
                            4,
                            1
                        ]
            }

    Compatible friends are determined by converting each user's scores into a simple array of 
    numbers and then taking the absolute value of the difference between each of the current 
    user's scores and each of the scores of other users, question by question. The 10 
    differences are then summed up to determine the 'Total Difference' score. The closest match
    will be the two users with the least amount of difference (i.e the lowest Total Difference).

    Once the user's most compatible friend is found a modal pop-up displays the compatible 
    friend's name and picture.

```

### Technologies Used in this application

```
Technology Requirements:
    - HTML
    - Javascript
    - node.js
    - Express
    - Source Control: Github
    - Hosting: Heroku
    
```

### Implementation

```
User Interface:
    home.html - home/default page.
    survey.html - user survey page.

Node Dependencies:
    "express": "^4.17.1"

Routes:
    htmlRoutes.js file includes two routes:
        - A GET Route to /survey which displays the survey page.

        - A default, catch-all route that leads to home.html which displays the home page.

    apiRoutes.js file contains two routes:
        - A GET route with the url /api/friends. This is used to display a JSON of all 
        possible friends.

        - A POST route /api/friends. This is used to handle incoming survey results. 
        This route is also used to handle the compatibility logic.

```

# How to run the app

### Setup

```
1.) Clone the app to your local system: 'git clone git@github.com:kbrowngithub/FriendFinder.git'

2.) From a terminal cd into the root directory of your FriendFinder instance and run
the command:  npm install
This will install the required node packages.
```

### Heroku deployment instructions

```
https://du.bootcampcontent.com/denver-coding-bootcamp/DU-VIRT-FSF-PT-09-2019-U-O/blob/master/01-Class-Content/13-express/03-Supplemental/HerokuGuide.md
```


### Execution

```
To execute the FriendFinder app locally, from a terminal window cd into the root
directory of the FriendFinder app and start the server by typing:  
    
    node server.js

You should see something similar to the following output:

    Server listening on: http://localhost:8080
    connected as id 236

Once the server is up and listening, in a web browser browse to http://localhost:8080/home
```

