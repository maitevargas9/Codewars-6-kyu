/*
Description

We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias Roy Miller. He employs a nomadic lifestyle to 
evade detection, constantly moving from one location to another, with each of his journeys following a perplexing and non-standard sequence 
of itineraries. Our mission is to decipher the routes he will undertake during each of his voyages.

Task
You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to 
his meticulously planned itineraries.

Example
Based on the provided routes:
[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
The correct sequence of destinations is:
"USA, BRA, UAE, JPN, PHL"

Note:
You can safely assume that there will be no duplicate locations with distinct routes.
All routes provided will have non-empty itineraries.
There will always be at least one (1) route connecting one waypoint to another.
*/

export function findRoutes(routes: string[][]): string {
  const map = new Map<string, string>();
  const destinations = new Set<string>();

  for (const [from, to] of routes) {
    map.set(from, to);
    destinations.add(to);
  }

  let start = "";
  for (const [from] of routes) {
    if (!destinations.has(from)) {
      start = from;
      break;
    }
  }

  const result: string[] = [];
  while (start) {
    result.push(start);
    start = map.get(start) || "";
  }

  return result.join(", ");
}
