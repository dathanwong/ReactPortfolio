import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import FoodDropoff from '../images/FoodDropoff.gif';
import JiraClone from '../images/JiraClone.gif';
import SolBox from '../images/SolBox.PNG';
import SortingAlgos from '../images/SortingAlgos.gif';
import VacationTracker from '../images/VacationTracker.gif';
import RestaurantRoulette from '../images/RestaurantRoulette.gif';
import WorkoutTracker from '../images/WorkoutTracker.gif';

const Main = (props) => {

    return (
        <>
        <Header/>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard expanded={true} id="1" title="Jira Clone" imageLink={JiraClone} 
                    description="Clone of the popular project management software Jira" 
                    technologies="React, JavaScript, MongoDB, Mongoose, Express, Node, HTML, CSS, Sockets, NoSQL" 
                    inspiration="Jira and AzureDevops are tools I used a lot in my project management days and they are fundamental to any software development project. I wanted to get a better sense of how the tool is working under the hood so it seemed like a great project to work on for our MERN stack coding bootcamp project. It uses a lot of complex principles like sockets for real time udpating and different database relationships so it was a great learning opportunity." 
                    challenges="One of the biggest challenges was getting all of the pieces to work together and update seamlessly. We used React for the frontend and ended up creating lots of different components for each so making sure to update the states in all the right places got messy. Another big challenge was using MongoDB and Mongoose since it is a NoSQL database. Tasks, projects, and users are all very connected and a NoSQL db isn't really meant for objects with lots of relationships so making our db work was more difficult than if we used a SQL db." 
                    nextSteps="If I was to take this project further I would definitely refactor the code to use something like Redux to more easily manage global states across the application. Also, refactor the backend to use a SQL database to make the relationships easier to manage. There are also small bugs here and there that I would like to clean up that we weren't able to get to in a week's time." 
                    collaborators={<p><a href="https://www.linkedin.com/in/aricjeon/">Aric Jeon</a>, <a href="https://www.linkedin.com/in/bradymoir/">Brady Moir</a></p>} 
                    links={<a href="https://github.com/JiraClone/JiraClone">GitHub Repo</a>} />
            </div>
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="2" title="Sorting Algo Visualizer" imageLink={SortingAlgos} 
                    description="Visualizer for common sorting algorithms" 
                    technologies="Java, JavaScript, SpringBoot, D3js, jQuery, HTML, CSS, Bootstrap" 
                    inspiration="Going through the Coding Dojo bootcamp I had the pleasure of working with people from a lot of different backgrounds. Not everybody had a computer science or engineering background so some struggled more than others to understand how sorting algorithms worked. This gave me the idea to create a visualization tool that would help people see exactly what is happening for each sorting algorithm at each step of the code. Our visualizer uses colors heavily so of course we added a color blind mode that changes the color palette to be more color blind friendly. This was a lesson I really took to heart from my time at Microsoft working on Windows devices." 
                    challenges="The biggest challenge was figuring out how to get the animations to display properly and at the right time. What really helped was breaking down each animation into a separate re-usable function so we had a function for moving a colored bar down, changing the color of a bar, and much more. After we were able to get one or two sorts working with the animations it was trivial to add more sorting algorithms." 
                    nextSteps="I was really proud of our team on how polished we were able to take this but if I was to take this further I would maybe add a comparison tool that would allow someone to compare two algorithms side by side." 
                    collaborators={<p><a href="https://www.linkedin.com/in/bradymoir/">Brady Moir</a>, <a href="https://www.linkedin.com/in/jkoopub/">Jayoung K</a></p>} 
                    links={<a href="https://github.com/SortingAlgosVisualizer/SortingAlgosVisualizer">GitHub Repo</a>}/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="3" title="Restaurant Roulette" mobile={true} imageLink={RestaurantRoulette} 
                    description="Can't decide where to eat! Just spin the wheel!" 
                    technologies="SwiftUI, Swift, Alamofire, iOS, XCode" 
                    inspiration="My friends and family love to eat out but we always have the problem where nobody has any preferences on where to eat. I created this app so we no longer have to sit there for 30 minutes trying to decide. I wrote this for iOS using SwiftUI because most of my friends have iPhones and I had just heard about SwiftUI which I'm really starting to enjoy working with." 
                    challenges={<p>SwiftUI is an entire framework that I had to learn and Swift was a brand new language to me which was definitely a challenge but <a href="https://www.hackingwithswift.com/100/swiftui">Paul Hudson's 100 days of SwiftUI</a> was a great tutorial which taught me a lot. The most difficult thing with SwiftUI was getting used to the declarative programming which requires a different way of thinking than traditional programming languages that read from top down.</p>}
                    nextSteps="This is a project I've been working on consistently a couple times a week so there will definitely be a lot of changes. I want to refactor the navigation code since there are some issues right now and I also want to add a lot of new features and maybe different randomization animations. I hope to launch this in the iOS store in the future but right now it is available for beta testing in Apple's TestFlight using the link below. I would love to hear your feedback!" 
                    collaborators={<p><a href="https://www.linkedin.com/in/rbfajardo/">Richard Fajardo</a></p>}
                    links={<a href="https://testflight.apple.com/join/O3qINeDz">Apple TestFlight Download</a>}    
                />
            </div>
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="4" title="Food Dropoff" imageLink={FoodDropoff} 
                    description="Help restaurants organize food drop off events during Covid-19" 
                    technologies="Python, Django, HTML, CSS, JavaScript, Ajax, Bootstrap, SQL, BCrypt" 
                    inspiration="When Covid-19 really hit Los Angeles all the restaurants closed and there was always news about a different restaurant closing down. Some restaurants around the LA area would set up Facebook events where people could comment what they wanted and then they would meet the restaurant at a specified time to pick up the food and pay for it. This was a great idea except the organization needed improvement since everything was being done over Facebook comments, messenger, and spread sheets. This is what gave me the idea to create a platform that would make things easier for the restaurants to manage their orders and make things easier for the customers to trust that their order was received. The goal of this project was to streamline that entire workflow." 
                    challenges="This was the first project I worked on with a team so the biggest challenge was really just collaborating. I had managed software projects in the past but I never had to start one up myself as the developer. We had tons of issues with Github merge conflicts because we didn't properly set up our gitignore and dev environments and we just didn't know how to work as a team in general. After this project I never forgot to create a good gitignore file from the start." 
                    nextSteps="I really wanted to push this website live and reach out to some restaurants in the area to see if they were interested but unfortunately just never found the time while doing the coding bootcamp. I still think the idea is really great but maybe would be more useful as a mobile app so I may explore that." 
                    collaborators={<p><a href="https://www.linkedin.com/in/ben-jensen-68b62940/">Ben Jensen</a>, <a href="https://www.linkedin.com/in/jkoopub/">Jayoung K</a></p>} 
                    links={<a href="https://github.com/Dojo-DjangoProject/Food_Dropoff">GitHub Repo</a>} />
            </div>            
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="5" title="Vacation Days Tracker" imageLink={VacationTracker} 
                description="Help employees keep track of their vacation balances accounting for future days off" 
                technologies="JavaScript, HTML, CSS, JQuery" 
                inspiration="I love to travel and I was lucky at Microsoft that they have great benefits and vacation time policy. The problem I would run into though was I never knew if I had enough vacation days to go on a trip I was planning. We had an internal tool to check our current balance but it would not tell us our balance in the future and would not account for our future plans. I had a lot of coworkers that would use Excel but I decided to create a web application that would hopefully do a better job." 
                challenges="Dates are a huge hassle for any programming language and since my entire app was based on dates and times this was much more challenging than I anticipated. Especially working with JavaScript where there is no type safety I had to do lots of date conversions from readable strings to Unix time while also trying to perform operations on both." 
                nextSteps="The current iteration doesn't have too much customization and does not have a backend database since I had not learned this yet when I started the project. I would definitely add in a database to store the vacation data instead of calculating it each time the page loads and would also add in additional inputs so the user can customize their vacation accrual rate and accrual dates." 
                collaborators="None" 
                links={<a href="https://github.com/dathanwong/VacationDaysTrackerHTML">GitHub Repo</a>}/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="6" title="Super Simple Workout Tracker" imageLink={WorkoutTracker} mobile={true} 
                description="Keep track of your weight lifting progress with a super simple interface" 
                technologies="Xamarin, Xamarin.Forms, C#, SQLite" 
                inspiration="I try to go to the gym every day, which usually turns more into every other day if not longer, but I would always forget how much weight I lifted the time before. I wanted something to track my weight lifting progress and there are tons of apps out there that do this but they all had a lot of extra features I didn't need. I really just wanted something that showed me my previous weight lifted and previous reps. Being a problem solver/developer I decided to write my own using Xamarin.Forms so I could use it on all my devices and share it with friends." 
                challenges="At the time Xamarin.Forms was new to me which was a challenge to learn but I was also just inexperienced as a developer. This was one of my first full coding projects so there were a lot of growing pains looking at documentation and learning different syntax." nextSteps="If I was to take this further I would add in some graphs for users to see how much they have progressed over time. Other than that I'm not too sure since I have been using this app since I made it and works great at what it does." 
                collaborators="None" 
                links={<><a href="https://github.com/dathanwong/WorkoutTracker">GitHub Repo</a><a href="https://play.google.com/store/apps/details?id=com.companyname.WorkoutTracker">, Google Play Store</a></>}/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="7" title="SolBox" imageLink={SolBox} 
                    description={<p>Bluetooth speaker with UV monitoring to improve skin health awareness. Winner of the <a href="https://www.hackster.io/contests/2019chinausyoungmakercompetition">Hackster 2019 US China Young Makers Competition Grand Prize</a>.</p> } 
                    technologies="Arduino, C++, SPI, Bluetooth, Soldering" 
                    inspiration="This project was actually for the 2019 US China Young Makers Competition which we won the grand prize for and won a trip to Beijing, China to compete in the finals. We were trying to think of a project that would appeal to people in China and one thing they are very careful with is sun protection. We came up with the idea for a portable bluetooth speaker that would play messages when you have been in the sun too long to make it fun but still useful." 
                    challenges="I have an electrical engineering degree from Villanova University but none of my jobs after graduating had that much to do with electrical engineering. I would tinker with things here and there but never really committed to making a full project. Re-familiarizing myself with electrical engineering principles and how to read documentation was a challenge but really fun and reminded me why I got into EE in the first place." 
                    nextSteps="Unfortunately we didn't win the competition in China but it was a great experience. I don't have any plans to take this project any further at the moment but I had a lot of fun working on it and getting my hands dirty with wire and solder." 
                    collaborators={<p><a href="https://www.linkedin.com/in/gracejhan/">Grace Han</a>, <a href="https://www.linkedin.com/in/kevinlevo/">Kevin Vo</a>, Chia-Chun Chen, <a href="https://www.linkedin.com/in/sarahjhan024/">Sarah Han</a></p>}
                    links={<a href="https://www.hackster.io/solbox/solbox-cb1a5b">Hackster Page</a>}/>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Main;