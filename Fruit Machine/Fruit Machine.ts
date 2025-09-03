/*
Description

Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots 
(Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or 
simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. 
Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the 
machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and 
impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your 
job is to return the score of the resulted reels.

Rules
1. There are always exactly three reels
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different
6. Three of the same is worth more than two of the same
7. Two of the same plus one "Wild" is double the score.
8. No matching items returns 0.

Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild

Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
spin = [5,5,5]
result = fruit([reel1,reel2,reel3],spin)
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"
Cherry + Cherry + Cherry == 50
Return
result == 50
*/

export function fruit(reels: string[][], spins: number[]): number {
  const scores: Record<string, [number, number]> = {
    Wild: [100, 10],
    Star: [90, 9],
    Bell: [80, 8],
    Shell: [70, 7],
    Seven: [60, 6],
    Cherry: [50, 5],
    Bar: [40, 4],
    King: [30, 3],
    Queen: [20, 2],
    Jack: [10, 1]
  };

  const results = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];

  const counts: Record<string, number> = {};
  for (let r of results) {
    counts[r] = (counts[r] || 0) + 1;
  }

  for (let symbol in counts) {
    if (counts[symbol] === 3) {
      return scores[symbol][0];
    }
  }

  for (let symbol in counts) {
    if (counts[symbol] === 2) {
      const other = results.find((r) => r !== symbol)!;
      if (other === "Wild") {
        return scores[symbol][1] * 2;
      }
      return scores[symbol][1];
    }
  }

  return 0;
}
