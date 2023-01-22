export const generateOrderId = (
  length = 5,
  chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"
) => {
  let result = "";
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};