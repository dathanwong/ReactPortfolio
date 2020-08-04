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
                    <div className="col-4">
                        <ProjectCard title="Food Dropoff" imageLink={FoodDropoff} description="Help restaurants organize food drop off events during Covid19" technologies="Python, Django, HTML, CSS, JavaScript, Ajax, Bootstrap, SQL, BCrypt"/>
                    </div>
                    <div className="col-4">
                        <ProjectCard title="Jira Clone" imageLink={JiraClone} description="Clone of the popular project management software Jira" technologies="React, JavaScript, MongoDB, Mongoose, Express, Node, HTML, CSS, Sockets, NoSQL" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ProjectCard title="SolBox" imageLink={SolBox} description="Bluetooth speaker with UV monitoring to improve skin health" technologies="Arduino, C++, SPI, Bluetooth, Soldering"/>
                    </div>
                    <div className="col-4">
                        <ProjectCard title="Sorting Algo Visualizer" imageLink={SortingAlgos} description="Visualizer for common sorting algorithms" technologies="Java, JavaScript, SpringBoot, D3js, jQuery, HTML, CSS, Bootstrap" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ProjectCard title="Vacation Days Tracker" imageLink={VacationTracker} description="Help employees keep track of their vacation balances accounting for future days off" technologies="JavaScript, HTML, CSS, JQuery"/>
                    </div>
                    <div className="col-4">
                        <ProjectCard title="Restaurant Roulette" mobile={true} imageLink={RestaurantRoulette} description="Can't decide where to eat! Just spin it!" technologies="SwiftUI, Swift, Alamofire, iOS, XCode" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ProjectCard title="Super Simple Workout Tracker" imageLink={WorkoutTracker} mobile={true} description="Keep track of your weight lifting progress with a super simple interface" technologies="Xamarin, Xamarin.Forms, C#, SQLite"/>
                    </div>
                </div>
                
        <Footer/>
        </>
     );
}
 
export default Main;