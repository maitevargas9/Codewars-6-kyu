/*
Description

Story
Old MacDingle had a farm.
To be more precise, he had a free-range chicken farm.
But Old MacDingle also had a fox problem.
Foxes F eat chickens C
At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)

Kata Task
Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry 
foxes have been feasting?

Examples
Ex1	Before	
CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
After	
...[CCC]F..[CCCCC].FFFF[CCC]FFFF
Ex2	Before	
...[CCC]...[CCCFC].....[CCC]....
After	
...[CCC]...[...F.].....[CCC]....
Ex3	Before	
CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF
After	
...[CCC]F..[...F.].FFFF[CCC]FFFF

Notes
Anything not a fox, a chicken, or a cage is just dirt .
All cages are intact (not open-ended), and there are no cages inside other cages
*/

var hungryFoxes = function (farm) {
  farm = farm.replace(/\[([CF\.]+)\]/g, (cage) =>
    cage.includes("F") ? cage.replace(/C/g, ".") : cage
  );

  var outside = farm.replace(/\[[CF\.]+\]/g, "");
  if (outside.includes("F")) {
    farm = farm.replace(/^([CF\.]+)(?=\[)/, (s) => s.replace(/C/g, "."));
    farm = farm.replace(
      /\]([CF\.]+)(?=\[)/g,
      (s) => s[0] + s.slice(1).replace(/C/g, ".")
    );
    farm = farm.replace(
      /\]([CF\.]+)$/,
      (s) => s[0] + s.slice(1).replace(/C/g, ".")
    );
  }

  var chars = new Set(farm);
  if (chars.has("F") && !chars.has("[")) {
    farm = farm.replace(/C/g, ".");
  }

  return farm;
};
