# See Mars site
A simple, static site with user-directed calls to NASA's Mars Rover images API.

**Link to project:** https://seemars.netlify.app/

![Site Preview Image](https://github.com/cynthiablack/nasa-api/blob/main/nasa-api.png)

## How It's Made:

**Tech used:** HTML, CSS, Javascript

The site allows users to enter a date, then choose a Mars Rover (Curiosity, Spirit, or Opportunity) to return images from NASA's Mars Rover images database. A date search currently returns the first two images from the selected rover on a given date.

## Planned Enhancements

- image randomization for a given date
- add more search parameters, including keywords
- return thumbnails for large data sets; implement click-to-enlarge
- add image captions

## Lessons Learned:

It's crucial to console.log data as an initial fetch response; while it's important to read documentation, seeing how JSON data shows up in a browser's console helped me choose how much data to attempt to display and led to my decision to initially limit displayed images to the first 2 results.