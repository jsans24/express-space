// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
    {
        name: "Curiosity",
        launchDate: "26 Nov 2011",
        operator: "NASA",
        missionType: "Rover",
        img: "https://www.extremetech.com/wp-content/uploads/2019/01/curiosity.jpg"
    },
    {
        name: "Opportunity",
        launchDate: "8 Jul 2003",
        operator: "NASA",
        missionType: "Rover",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1200px-NASA_Mars_Rover.jpg"
    },
    {
        name: "Spirit",
        launchDate: "10 Jun 2003",
        operator: "NASA",
        missionType: "Rover",
        img: "https://www.brownspaceman.com/wp-content/uploads/2014/01/spirit-rover.jpg"
    },
    {
        name: "Sojourner",
        launchDate: "4 Dec 1996",
        operator: "NASA",
        missionType: "Rover",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sojourner_on_Mars_PIA01122.jpg/1200px-Sojourner_on_Mars_PIA01122.jpg"
    },
    {
        name: "Rosetta",
        launchDate: "2 Mar 2004",
        operator: "ESA",
        missionType: "Gravity Assist",
        img: "https://www.universetoday.com/wp-content/uploads/2007/02/2007-0220rosetta.jpg"
    }
];

module.exports = marsMissions;