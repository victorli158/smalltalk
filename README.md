# Friends4U

## Background/Overview
This app will allow users to connect with friends to plan trips around the world.  Trip planning will include links to hotel reservations, flight dates, and event information that will be extracted from a Yelp API response. In order to use the Yelp API, we will allow users to pick the city that the event will take place in with Google Maps API.  Once we have this location, we will use Yelp API’s searchable feature so users can see the options that are available to them in the area their event is taking place based on search box input.  We will allow users in the group to edit the itinerary.

## Functionality & MVPs
- [ ] User authentication
- [ ] Users can add events/logistics to itinerary (activities/lodging/flights)
- [ ] Incorporate Yelp API and search function to find activities
- [ ] Bonus: Incorporate Google Maps API (approved by Andrew MacIver)
- [ ] Bonus: Users can create itineraries and invite other users (approved by Andrew MacIver)
- [ ] Bonus: Incorporate sockets to allow groups to chat
- [ ] Bonus: Search auto-completion with Yelp results

## Technologies & Technical Challenges

##### Backend: Python/Django
##### Frontend: React-Native/JavaScript

#### Using Yelp API
We will allow users to search for events, lodging, transportation, etc in different destinations using yelp api to generate search results. As a bonus, we will use yelp’s autocomplete api to populate dynamic search results based on user input.

#### Google Maps API
We will also use google maps API to allow the user to filter search results by certain ranges of latitude/longitude to yelp api.

## Accomplishments Over the Weekend:

 - Went through Python tutorials and got comfortable with the language
 - Configured Django on our laptops and went through an in-depth tutorial
 - Went through a class on Udemy on React Native to get comfortable with it

## Group Members & Work Breakdown

Backend Members: Sean Perfecto and Miles Hobby

Frontend Members: Victor Li and John Ballon

DAY ONE: Backend will make tests before writing out code. Get started with the user authentication and splash/home page for the mobile application. By the end of the day we should have figured out:
TDD/ Start user authentication (Backend)
Create homepage (Frontend)

DAY TWO: Today will be focused on fleshing out the main models and ideas for the mobile application. Backend will continue user authentication and front end will start implementing itineraries and events. By the end of the day:
User authentication (Backend)
Start with itinerary and event components (Frontend)

DAY THREE: Focus more on building different features and functions to the itinerary component. Today we will work on:
Finish user auth (if needed)/JSON format different models/views (Backend)
Continue designing itinerary and event components (Frontend)

DAY FOUR: Incorporate Yelp API and search function so users can find and add events to their itinerary. By today:
Integrating Yelp API to save info to the backend (Backend)
Formatting the API to provide a more efficient user experience

DAY FIVE - SEVEN: Incorporate Google Maps API and begin work on bonus features. Also create the demo website. By Monday, we will finish:
Integrating the Google Maps to save info on backend, continue fixing database and functionality (Backend)
Fixing/Designing rest of mobile application (Frontend)
Create demo page (All)

## Plan for getting users and reviews
We will ask at least 10 of our friends to try out our application and leave good reviews.
We will try to find an appropriate subreddit and ask the users for review feedback
