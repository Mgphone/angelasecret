Authenication...
Level 1. just simple two ways authenication
Level 2. create .env files and .gitignore file
Whenever u want to create need to think the env first with gitignore.
level 4..bcrypt using.. password +salt... in salt you can make as much as you like salt round. the more salt round up the more difficult to encryt as weel as the more your server need to get more runtime
recap the process for level 5.

1.first create 3 requirement modules

1.1set session 

2.passport intialize and passport session

3.plugin passport-local-mongoose

4.passport create stratgey.. serialize..deseriaize(local login setup)

level 6... connect with google login oAuth
did use the npm of passport-google-oauth20. mongoose-findorcreate
create google developer console
passport authenicate
add googleid to the schema
seralize and desearlize

facebook add ons..
need to use 2 npms. first is for passport but this has been used in google npm.second is passport-facebook
1.require passport-facebook. 
2.add facebookId in schema (don't wanna duplicate facebookID)
3.add appID and appSecret in env
4.facebook strategy
5.use two ejs path.. .get auth/facebook and auth/facebook/secrets


