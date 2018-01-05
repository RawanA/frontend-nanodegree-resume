/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

 var bio = {
   "name" : "Rawan BiN-Salman",
   "role" : "Fresh Graduate",
   "contacts" :
   { //an object with
       "mobile": "966563325665",
       "email": "rawan.abdullah.bs@hotmail.com",
       "github": "RawanA",
       "twitter": "Rawan_Abdullah_", //(optional)
       "location": "Saudi Arabia"
     },
   "welcomeMessage": "welcome to my Resume",
   "skills": ["Analyist","Writing","Drawing","Programming"],
   "biopic": "images/user.jpg", // URL.createObjectURL(object);

 display: function(){

   var name = bio.name.split(" ");
   var firstName = name[0].substr(0,1).toUpperCase() +
            name[0].substr(1).toLowerCase();
   var lastName = name[1].toUpperCase();
   var name_new = firstName + ' ' + lastName;

   var formattedName = HTMLheaderName.replace(data,name_new);
   var formattedRole = HTMLheaderRole.replace(data,bio.role);
   var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
   var formattedgithub = HTMLgithub.replace(data,bio.contacts.github);
   var formattedtwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
   var formattedLocation = HTMLlocation.replace(data,bio.contacts.location);
   var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
   var formattedBioPic = HTMLbioPic.replace(data,bio.biopic);

   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);

   $("#topContacts, #footerContacts").append(formattedEmail);
   $("#topContacts, #footerContacts").append(formattedMobile);
   $("#topContacts, #footerContacts").append(formattedLocation);
   $("#topContacts, #footerContacts").append(formattedtwitter);
   $("#topContacts, #footerContacts").append(formattedgithub);
   $("#topContacts, #footerContacts").append("<br>");

   $("#header").append(formattedWelcomeMessage);
   $("#header").append(formattedBioPic);
   $("#header").append(HTMLskillsStart);

   for( var x=0; x < bio.skills.length; x++){
     var formattedSkills = HTMLskills.replace(data,bio.skills[x]);
     $("#skills").append(formattedSkills);
   }



 }
};

 var education = {
   "schools": [
     {
       "name": "Umm Al-Qura University",
       "location": "Sadui Arabia",
       "degree": "Bachelors degree",
       "majors": ["Computer Science"],
       "dates": "2011 - 2017",
       "url": "https://uqu.edu.sa/en"
     }
   ],

 "onlineCourses": [
   {
     "title": "InfoGraphic",
     "school": "MasaQat",
     "dates": "2017",
     "url": "https://www.edraak.org/courses/"
   },
   {
     "title": "Essential Skills to Mastering the Art of Win-Win Negotiation",
     "school": "Doroob",
     "dates": "2017",
     "url": "https://lms.doroob.sa/courses/Doroob/DRB-WW01-EL-PD1--013-WW01-00-00-En-2ed-001/2017/about"
   },
   {
     "title": "INTERNATIONAL ENGLISH LANGUAGE TESTING SYSTEM (IELTS) OVERVIEW",
     "school": "Doroob",
     "dates": "2017",
     "url": "https://lms.doroob.sa/courses/Doroob/DRB-106Ax-2ed/2017/about"
   }
 ],//array of objects with

 display: function(){
   $("#education").append(HTMLschoolStart);

   for(var x=0; x < education.schools.length; x++){

     var formattedschoolName = HTMLschoolName.replace(data, education.schools[x].name) + HTMLschoolDegree.replace(data, education.schools[x].degree);
     var formattedschoolLocation  = HTMLschoolLocation.replace(data,education.schools[x].location);
     var formattedschoolDates = HTMLschoolDates.replace(data,education.schools[x].dates);

     $(".education-entry:last").append(formattedschoolName);
     $(".education-entry:last").append(formattedschoolLocation);
     $(".education-entry:last").append(formattedschoolDates);


     if (education.schools[x].majors.length > 0){

       for(var y=0; y < education.schools[x].majors.length; y++){

         $(".education-entry:last").append(HTMLschoolMajor.replace
         (data, education.schools[x].majors[y]));
       }
     }
   }

    $(".education-entry:last").append(HTMLonlineClasses);

   for(var  x=0; x < education.onlineCourses.length; x++){

     var formattedonlineTitle = HTMLonlineTitle.replace(data,education.onlineCourses[x].title);
     var formattedonlineSchool  = HTMLonlineSchool.replace(data,education.onlineCourses[x].school);
     var formattedonlineDates = HTMLonlineDates.replace(data,education.onlineCourses[x].dates);
     var formattedonlineURL = HTMLonlineURL.replace("%content%",education.onlineCourses[x].url);

     $(".education-entry:last").append(formattedonlineTitle);
     $(".education-entry:last").append(formattedonlineSchool);
     $(".education-entry:last").append(formattedonlineDates);
     $(".education-entry:last").append(formattedonlineURL);

   }
 }
};

 var work = {
   "jobs": [
     {
      "employer": "Mrs.Aysha",
       "title": "Salon's suppervisor",
       "location": "Makkah",
       "dates": "2017",
       "description": "I worked for a few days at a salone in makkah as a make up coordinator."
     },
     {
       "employer": "Mrs.Amnah",
        "title": "Assistant",
        "location": "Makkah",
        "dates": "2017",
        "description": "An assistant for a public hight school priciple, organizing..."
     }
   ],//array of objects with

 display: function(){

   for(var x=0; x < work.jobs.length; x++){
     $("#workExperience").append(HTMLworkStart);

     var formattedworkEmployer = HTMLworkEmployer.replace(data,work.jobs[x].employer);
     var formattedworkTitle = HTMLworkTitle.replace(data,work.jobs[x].title);
     $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);

     var formattedworkDates = HTMLworkDates.replace(data,work.jobs[x].dates);
     $(".work-entry:last").append(formattedworkDates);

     var formattedworkLocation = HTMLworkLocation.replace(data,work.jobs[x].location);
     $(".work-entry:last").append(formattedworkLocation);

     var formattedworkDescription = HTMLworkDescription.replace(data,work.jobs[x].description);
     $(".work-entry:last").append(formattedworkDescription);
   }
 }
};

 var projects = {
   "projects": [
     {
       "title": "AliveMath",
       "dates": new Date("2017-05-01").toDateString(),//string (works with a hyphen between them)
       "description": "a graduation project of an iOS application that helps students with "+
       "diffiecelities with mathematics using Agumented Reality feature and 3D game feature to "+
       "add the fun part to the aplication.",
       "images": ["images/course3.jpg","images/course1.jpg"]//array with string urls
     },
     {
       "title": "Trancase",
       "dates": new Date("2016-03-25").toDateString(),//string (works with a hyphen between them)
       "description": "A simple private website of a small comapeny named Trancase, its's"+
       "a website for the transportations booking and offering.",
       "images": ["images/course1.jpg","images/course2.jpg"]//array with string urls
     }
   ],//array of objects with

 display: function(){

   for(var x=0; x < projects.projects.length; x++){
     $("#projects").append(HTMLprojectStart);
     var formattedprojectTitle = HTMLprojectTitle.replace(data,projects.projects[x].title);
     $(".project-entry:last").append(formattedprojectTitle);

     var formattedprojectDates = HTMLprojectDates.replace(data,projects.projects[x].dates);
     $(".project-entry:last").append(formattedprojectDates);

     var formattedprojectDescription = HTMLprojectDescription.replace(data,projects.projects[x].description);
     $(".project-entry:last").append(formattedprojectDescription);

     if (projects.projects[x].images.length > 0){
       for(var y=0; y < projects.projects[x].images.length; y++){

         var formattedprojectImage = HTMLprojectImage.replace(data,projects.projects[x].images[y]);
         $(".project-entry:last").append(formattedprojectImage);
       }
     }
   }
 }
};

 bio.display();
 work.display();
 education.display();
 projects.display();
 $("#main").append(internationalizeButton);
 $("#mapDiv").append(googleMap);
