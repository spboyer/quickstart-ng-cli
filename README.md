# quickstart-ng-cli

 ![Codeship Status for spboyer/quickstart-ng-cli](https://codeship.com/projects/93a14c00-fa7e-0133-18ae-12544c2ab455/status?branch=master)

# Blog Posts Related to angular-cli
* Continuous Integration to Azure using Codeship and the Angular CLI - http://tattoocoder.com/angular2-azure-codeship-angularcli/
* A Re-Quickstart using the CLI - http://tattoocoder.com/angular2-requickstart-using-cli/
* Giving Your CLI a Server - http://tattoocoder.com/angular2-giving-your-cli-server/


## CodeShip Builds
Configure your tests > Select "I want to create my own commands"

### Setup Commands

```bash
#install node version
nvm install 4.1

#install angular-cli
npm install -g angular-cli --registry=https://registry.npmjs.org/

#run npm install, passing registry flag for proxy issues
npm i --registry=https://registry.npmjs.org/
```

### Test / Build Commands

```bash
#serve the application adding '&' to run command in background
ng serve &

#start enf to end tests using protractor
ng e2e

#build the production code with the node server
npm run build:nodserver-prod
```

### Azure Website Deployment Script

```bash
#Set your git user information
git config user.email "yourname@domain.com"
git config user.name "Your Name"

# $AZURE_REPO_URL needs to be set in your projects Variables section
# and include both username and password, e.g: https://username:password@site.scm.azurewebsites.net:443/site.git

# Clone Azure repository
git clone $AZURE_REPO_URL ~/azure

# change into the local azure directory
cd ~/azure

# delete local repository azure contents
rm -rf *

# Copy /dist folder contents (our application)
cp -rf ~/clone/dist/* .

git add -A
git commit --all --author "$CI_COMMITTER_NAME <$CI_COMMITTER_EMAIL>" --message "$CI_MESSAGE ($CI_BUILD_URL)"

# Push changes to Azure
git push origin master
```
