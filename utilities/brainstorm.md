######Before starting to code, it's important to define the specific features and behaviors you want to include in our simulation. Some questions to consider include:

1. What kind of organisms will you simulate?
2. What are the environmental factors that will affect their survival and reproduction?
3. How will genetic diversity and mutation be incorporated?
4. Will there be predators and prey, and how will they interact?
5. What are the desired outputs of the simulation?

######Answers

1. Pre-Defined organism types for now [*later can be changed to custom or auto-generated*]
2. Undecided [*maybe distance-to-prey; distance-to-mate; distance-to-predator*]
3. Undecided
4. In all probability **yes**. Interactions can happen initially based on their distances to each other and their hunger statuses.
5. To get an insight into **Emergent Theory** and of course to broaden my programming horizons

# Updates
#####These below updates are all just brainstorming activities :exclamation: Don't necessarily makes it to deployment. (*Or maybe!*)
- Installed `brain.js`
- Created a boilerplate for survival in *NeuroFunction* folder in `test.js` for now.
- Also, introduced `fs` module for dynamic file operations in `createFirstGen` function. What it effectively does is it creates a one time `organisms.json` file with all first Gen creatures as objects.