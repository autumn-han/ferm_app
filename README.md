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
- moved infrastructure for gridFS into server.js 
- built out route for file uploads in server.js

# NOTES
- when testing routes via Postman, remove 'authenticate' parameter to allow server access
- try pulling GridFS initation strictly into server file