# quickstart-ng-cli

 ![Codeship Status for spboyer/quickstart-ng-cli](https://codeship.com/projects/93a14c00-fa7e-0133-18ae-12544c2ab455/status?branch=master)

## CodeShip Builds
Configure your tests > Select "I want to create my own commands"

### Setup Commands

```bash
#install node version
nvm install 4.1

#install angular-cli
npm install angular-cli --registry=https://registry.npmjs.org/

#run npm install, passing registry flag for proxy issues
npm i --registry=https://registry.npmjs.org/
```

### Test Commands

```bash
#serve the application adding '&' to run command in background
ng serve &

#start enf to end tests using protractor
ng e2e
```
