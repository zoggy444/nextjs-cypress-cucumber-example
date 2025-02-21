# E2E Testing Project with Cypress and Cucumber with Next.js App

This project contains an example of E2E testing using Cypress and Cucumber with a Next.js App. It is a fork from hidayahapriliansyah. 

**This project is created using Node.js v20.11.1 version**

## Project Structure

- **SUT**: This folder contains the System Under Test, a Next.js project.
- **TAS**: This folder contains the Test Automation Solution, a Cypress project with Cucumber.
  - Test files are located in the `SUT/cypress/e2e/signup` directory with a simple test scheme.

## How to Run the Project

### Running the Next.js Project

1. Navigate to the `SUT` directory:
   ```bash
   cd SUT
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the Next.js project to speed up page loading:
   ```bash
   npm run build
   ```
4. Start the built Next.js project:
   ```bash
   npm run start
   ```
   The project will be available at [http://localhost:3000](http://localhost:3000).

### Running the Cypress Project

1. Navigate to the `TAS` directory:
   ```bash
   cd ../cypress-cucumber
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Cypress:
   ```bash
   npm run test
   ```
On the Cypress screen, follow these steps:

1. Select "E2E Testing" on the main screen.
  ![Choose E2E](/images/1.png)

2. Choose the browser to use.
  ![Choose Browser](/images/2.png)

3. Click on `signup.feature` to run the test.
  ![Choose signup.feature](/images/3.png)

4. Cypress will execute the test.
  ![Cypress runs the test](/images/4.png)