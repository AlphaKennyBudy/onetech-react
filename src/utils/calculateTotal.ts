export const calculateTotal = (
  orders: { price: number; quantity: number }[]
) => {
  let total = orders.reduce((prev, cur) => {
    return prev + cur.quantity * cur.price;
  }, 0);
  return total ? total.toFixed(2) : 0;
};
