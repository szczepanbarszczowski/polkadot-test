### I made a project with an expo architecture. For small projects it is typically ok but it may be limited factor if you want to install some library which does not support it. As Polkadot api is written in js I found no problems with using it in this project.

- For navigation I used react-navigation 6. It has nice developer experience and I achieved pretty good user experience with it for this project.
- For state management I used redux and redux-toolkit. It gives nice centralized store for a whole application.
- For styling I used Stylesheet api. I experimented with styled-components but there were some performance issues and I sticked with this solution.
- I tried to make a simple and intuitive ui, to do this I created bunch of basic components and exposed some basic design system (Figma file was far from perfect).
- I utilized polkadot.js api. I had some problems with a simulator after refresh. When refreshing it was impossible to sign a transaction. I had to do login/register  and then signing in one go because otherwise there were some problems. I assume it is simulator related.
- I used react-hook-form for form state management. It is headless, peak performance and easy to use.
- If I had to start this project once again I would use bare bone react-native without expo because I had problem with gradient on text and all types of gradients on Android and I think it was very important for this app considering design identity.
