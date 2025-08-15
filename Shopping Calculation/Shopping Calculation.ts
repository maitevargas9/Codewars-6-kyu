/*
Description

This kata is about shopping calculation. There are products, product's prices, customers and customer's total money.

This kata takes an input as List of string, and this list contains statements which give information about product 
name, product price, customer name and customer budget.

These statements can have 3 basic form like; (is, has, buys)
  "Apple is $5."
  "Alice has $26."
  "Alice buys 2 apples."

Your task is to write a function that calculates the result which is [(string,string,string)] and holds 
[(Customer Name, Customer Total Money, Bought Products)]
"is" statement gives info about product name and its price.
"has" statement gives info about customer name and his/her money.
"buys" statement gives info about customer name, bought product name and bought product count.
You need to split bought products by comma and space(", ") like "2 apples, 5 oranges, 1 grape"

For Example:
  input => [ "Apple is $5.",
             "Banana is $7.",
             "Orange is $2.",
             "Alice has $26.",
             "John has $41.",
             "Alice buys 2 apples.",
             "John buys 1 banana.",
             "Alice buys 5 oranges." ]
Alice has $26 and buys 2 apples, 5 oranges for $20 (2 * 5 + 5 * 2), she keeps $6.
John has $41 and buys 1 banana for $7 (1 * 7), he keeps $34.
So output => [ ("Alice", "$6", "2 apples, 5 oranges"),
               ("John", "$34", "1 banana") ]
The order of statements is not guaranteed. As an example: you could receive a buy statement before knowing the cost 
of the product.

For Example:
  input => [ "John has $41.",
             "Apple is $5.",
             "Alice buys 2 apples.",
             "Alice has $26.",
             "John buys 1 banana.",
             "Alice buys 5 oranges.",
             "Banana is $7.",
             "Orange is $2." ]

Notes:
Currency is always preceded by the $ symbol.
Output must be ordered by the placement of customers in the input list.
Products must be ordered by the order in which they were bought by that customer.
All input statements will be valid. No need to check for invalid statements.
Customers will always have enough money for their purchases. No need to validate for negative balances.
Inputs guarantee that the same customer will not perform multiple purchases for the same product.
Just use -s as plural suffix.
*/

export function shoppingCalculation(
  input: string[]
): [string, string, string][] {
  const productPrices: Record<string, number> = {};
  const customerMoney: Record<string, number> = {};
  const customerPurchases: Record<
    string,
    { product: string; count: number }[]
  > = {};
  const customerOrder: string[] = [];

  const toSingular = (word: string): string =>
    word.endsWith("s") ? word.slice(0, -1) : word;

  for (const line of input) {
    const lowerLine = line.toLowerCase();

    if (lowerLine.includes(" is $")) {
      const [productPart, pricePart] = line.split(" is $");
      const product = productPart.trim().toLowerCase();
      const price = parseInt(pricePart);
      productPrices[product] = price;
    } else if (lowerLine.includes(" has $")) {
      const [namePart, moneyPart] = line.split(" has $");
      const customer = namePart.trim();
      const money = parseInt(moneyPart);
      customerMoney[customer] = money;
      if (!customerOrder.includes(customer)) {
        customerOrder.push(customer);
      }
    } else if (lowerLine.includes(" buys ")) {
      const [namePart, buysPart] = line.split(" buys ");
      const customer = namePart.trim();
      const items = buysPart
        .replace(".", "")
        .split(", ")
        .map((item) => {
          const [countStr, ...productWords] = item.trim().split(" ");
          return {
            count: parseInt(countStr),
            product: productWords.join(" ").toLowerCase()
          };
        });

      if (!customerPurchases[customer]) {
        customerPurchases[customer] = [];
      }
      customerPurchases[customer].push(...items);
      if (!customerOrder.includes(customer)) {
        customerOrder.push(customer);
      }
    }
  }

  const result: [string, string, string][] = [];

  for (const customer of customerOrder) {
    let totalCost = 0;
    const purchases = customerPurchases[customer] || [];

    const productDescriptions = purchases.map(({ product, count }) => {
      const singularProduct = toSingular(product);
      const price = productPrices[singularProduct];
      totalCost += price * count;
      return `${count} ${product}`;
    });

    const remaining = customerMoney[customer] - totalCost;
    result.push([customer, `$${remaining}`, productDescriptions.join(", ")]);
  }

  return result;
}
