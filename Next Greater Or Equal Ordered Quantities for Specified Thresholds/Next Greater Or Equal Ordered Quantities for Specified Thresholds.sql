-- Description
-- The sales and order processing department is interested in monitoring quantities of products that have been ordered. This is crucial for 
-- understanding customer preferences and for future procurement decisions. The department has established certain threshold quantities for 
-- various orders (in inventory_thresholds table). Your task is to identify the next greater or equal ordered quantity (next_ge_quantity) for 
-- each of these threshold values and to provide the corresponding product name (product_name).
-- product_orders:
-- order_id (integer) - The identifier for the order.
-- quantity (integer) - The quantity of the product ordered.
-- product_name (string) - The name of the product.
-- inventory_thresholds:
-- order_id (integer) - The identifier for the order, corresponding to order_id in product_orders.
-- threshold_quantity (integer) - The quantity threshold for which inventory levels are being monitored.
-- The SQL query should produce the following columns:
-- order_id - from inventory_thresholds
-- threshold_quantity - from inventory_thresholds
-- next_ge_quantity - The next greater or equal quantity from product_orders for the corresponding order_id.
-- product_name - The product_name corresponding to next_ge_quantity from product_orders.
-- Notes:
-- The query should handle scenarios where the next_ge_quantity and product_name do not exist, and in such cases, return NULL.
-- The result should be ordered by order_id (ascending) from inventory_thresholds table and then by threshold_quantity from the same table 
-- also in ascending order
-- In the product_orders and inventory_thresholds tables, it is guaranteed that the combination of order_id and quantity is unique. Duplicates 
-- are not possible.
-- Desired Output
-- The desired output should look like this:
-- order_id	threshold_quantity	next_ge_quantity	product_name
-- 1	      11	                20	              val02
-- 1	      28	                30	              val03
-- 2	      9	                  10	              val06
-- 2	      50	                50	              val10
-- 2	      51	                                 
-- 4	      11	                                
-- 5	      1	                  100	              val14
-- 5	      150	                150	              val15
-- 5	      151	                1000	            val16
SELECT
  t.order_id,
  t.threshold_quantity,
  po_next.quantity AS next_ge_quantity,
  po_next.product_name
FROM
  inventory_thresholds t
  LEFT JOIN LATERAL (
    SELECT
      po.quantity,
      po.product_name
    FROM
      product_orders po
    WHERE
      po.order_id = t.order_id
      AND po.quantity >= t.threshold_quantity
    ORDER BY
      po.quantity ASC
    LIMIT
      1
  ) po_next ON TRUE
ORDER BY
  t.order_id ASC,
  t.threshold_quantity ASC;