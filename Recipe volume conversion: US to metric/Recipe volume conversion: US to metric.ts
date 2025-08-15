/*
Description

You have a recipe in United States customary units (cups, teapoons, etc) and need to convert it to metric (milliliters).

You will receive a string representing a single line in a recipe. You must return the ingredient name as well as the 
number of milliliters required.

About ingredient names:
Do not return the ingredient name with any trailing whitespace
Return ingredient names with the same case as in the original input
Ingredient names may contain whitespace ("vanilla extract", "apple cider vinegar")
Ingredient names will never contain numeric characters, but may contain symbols ("Dutch-processed cocoa")

About numbers and units:
Number may be an integer, float, or improper fraction
Improper fractions are repesented by "x n/d" (ie, "2 1/4" means "two and one-quarter")
Unit names are not case-sensitive; unit abbreviations are case-sensitive
Unit names may be pluralized, unit abbreviations will never be pluralized
Unit abbreviations may be followed by a period . (eg, oz. or t.)
Since conversions are always approximate, tests use a range of ± 0.005

About their arrangement:
The ingredient name will not always come before the measurements, but will never be in between the numeric value and 
the unit (so "1 cup milk" and "milk 1 cup" are valid, but "1 milk cup" and "cup 1 milk" will not be tested)
There will always be exactly one space between the numeric value and the unit
The numeric value will always appear directly before the unit

Examples:
"Sugar 1 t" => ["Sugar", 4.9289];
"Olive oil 3 Tbsp" => ["Olive oil", 44.3603]
"1 1/4 cup milk" => ["milk", 295.7353]
"2.5 ounces vanilla extract" => ["vanilla extract", 73.9338]

Here is a table of conversions and abbreviations used:
Unit name	 Abbreviations	mL	Notes
teaspoon(s)	t,  tsp	4.928922	
tablespoon(s) T, Tbsp, tbsp	14.78677	3 tsp
ounce(s)	    oz	29.57353	2 Tbsp
cup(s)	c	236.5882	16 tablespoons, 8 oz
pint(s)	p, pt	473.1765	2 cups

Footnotes:
In traditional imperial units, the conversion depends on whether the ingredient is dry or liquid; these are different 
sizes. That is, one dry ounce is not equal to one fluid ounce. However, in US cooking specifically, this distinction 
is ignored. US units are also slightly different from standard imperial units. In this kata, we are using US cooking 
volumes, which ignore the distinction between liquid and dry. If only we could all be so lucky as to live in a country 
that uses sensible and reasonable units!
*/

export function convertVolume(line: string): [string, number] {
  const conversions: { [key: string]: number } = {
    t: 4.928922,
    tsp: 4.928922,
    T: 14.78677,
    Tbsp: 14.78677,
    tbsp: 14.78677,
    oz: 29.57353,
    c: 236.5882,
    p: 473.1765,
    pt: 473.1765,
    teaspoon: 4.928922,
    teaspoons: 4.928922,
    tablespoon: 14.78677,
    tablespoons: 14.78677,
    ounce: 29.57353,
    ounces: 29.57353,
    cup: 236.5882,
    cups: 236.5882,
    pint: 473.1765,
    pints: 473.1765
  };

  function parseFraction(fraction: string): number {
    if (fraction.includes("/")) {
      const [whole, frac] = fraction.split(" ").map((s) => s.trim());
      const [num, denom] = (frac || whole).split("/").map(Number);
      return whole && frac ? Number(whole) + num / denom : num / denom;
    }
    return parseFloat(fraction);
  }

  const regex =
    /(?:(\d+(?:\.\d+)?(?: \d+\/\d+)?)\s+([a-zA-Z.]+)\s*(.*)|(.+?)\s+(\d+(?:\.\d+)?(?: \d+\/\d+)?)\s+([a-zA-Z.]+))/;
  const match = line.match(regex);

  if (!match) {
    return [line.trim(), 0];
  }

  let quantity: string, unit: string, ingredient: string;
  if (match[1]) {
    quantity = match[1];
    unit = match[2];
    ingredient = match[3];
  } else {
    ingredient = match[4];
    quantity = match[5];
    unit = match[6];
  }

  const amount = parseFraction(quantity);
  let unitKey = unit.replace(/\.$/, "").toLowerCase();

  if (unit === "T" || unit === "T.") {
    unitKey = "Tbsp";
  }

  if (!(unitKey in conversions)) {
    return [ingredient.trim(), 0];
  }

  return [ingredient.trim(), amount * conversions[unitKey]];
}
