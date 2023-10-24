# ferm_app
Building out a fermentation tracker application using MERN technologies
The application will allow users to login to their personal page, where a list of current and ongoing projects will be displayed as well as the option to create a new project
Project pages will capture information about the fermentation process as well as allow users to log progress and upload pictures

# TO-DO
 - add GridFS to provide file upload and storage
 - implement date-fns to format time display
 - try to fix useEffect axios call such that edit forms can be prepopulated
 - add live time display
 - fix authenticate for delete methods

# RECENT ACTIVITY
- added encType attribute to log entry form on ProjectDetail component
- imported dependencies into server file
- added 'upload' to User model file (type: String), within logEntries
- added middleware into server file
- rearranged server.js file

# NOTES
- when testing routes via Postman, remove 'authenticate' parameter to allow server access