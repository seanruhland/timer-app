# ReadMe: Timer Take Home

## Table of Contents
- [ReadMe: Timer Take Home](#readme-timer-take-home)
  - [Table of Contents](#table-of-contents)
  - [Decisions Made](#decisions-made)
      - [Mui Time Picker](#mui-time-picker)
      - [Canvas VS SVG](#canvas-vs-svg)
      - [requestAnimationFrame](#requestanimationframe)
      - [useMemo](#usememo)
  - [Next Steps](#next-steps)
      - [Draggability](#draggability)
      - [Improved Animations](#improved-animations)
  - [Installation](#installation)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Start Application](#start-application)
    - [Test Application](#test-application)

## Decisions Made
#### <li>Mui Time Picker</li>
  <ul>
    <p>I chose Mui for the time picker because it has multiple out of the box features such as:  </p>
    <ol>
      <li>accessibility</li>
      <li>time parsing</li>
      <li>formatting</li>
      <li>validation</li>
    </ol></br>
    <p>Some drawbacks for using the MUI time picker vs a custom component are ease of testing, difficulty with custom styles</p>
  </ul>

#### <li>Canvas VS SVG</li>
  <ul>
    <p>I chose to go with a Canvas progress bar for performance reasons. Since the component updates every second, I thought it best to go with the more performant option. </p>
    <p>I drew the knob with Canvas but in order to implement a draggable option, one would need to add a custom component for the knob that rotates around the Canvas' center axis. </p>
      <ul>Could use the css effect <strong>transform: rotate(0deg) </strong>and depending on the resulting degree the progress of the max time could be updated proportionately.</ul>
  </ul>

#### <li>requestAnimationFrame</li>
  <ul>
    <p>I decided to implement the requestAnimationFrame method because the timer will be consistently animating the progress bar so this will allow the animation to be optimized for the screen and reduce the load on the performance. </p>
  </ul>

#### <li>useMemo</li>
  <ul>
    <p>I implemented the useMemo in the context of the timer to prevent unecessary re-renders and improve performance. </p>
  </ul>

## Next Steps
<p>Given more time there are a few changes I would make to the timer</p>

#### <li>Draggability</li>
  <ul>
    <p>Draggability would be a great UI improvement, unfortunately I was not able to get it to work properly for this take-home but that would be a great improvement.</p>
  </ul>

#### <li>Improved Animations</li>
  <ul>
    <p>Might be nice for the animation to progress slowly around the radial progress bar instead of one second at a time. Could achieve this by updating the progress bar more than once per second.</p>
  </ul>

## Installation

To get started with this project, you'll need to clone the repository and install the dependencies.

### Clone the Repository

```bash
git clone https://github.com/seanruhland/timer-app
cd timer-app
```

### Install Dependencies
This project uses npm (Node Package Manager) to manage its dependencies. Make sure you have [Node.js](https://nodejs.org/) installed on your machine, which includes npm.

Once you have Node.js and npm installed, run the following command to install the project's dependencies:

```bash
npm install
```

### Start Application
Once downloaded you can run the application using

```bash
npm start
```

This will start the application in development mode. By default, the application will be accessible at [http://localhost:3000](http://localhost:3000).

### Test Application
You can run the applications tests using

```bash
npm test
```
