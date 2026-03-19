export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
};

export const lerpVector3 = (vecRef, targetX, targetY, targetZ, amt = 0.05) => {
  vecRef.x = lerp(vecRef.x, targetX, amt);
  vecRef.y = lerp(vecRef.y, targetY, amt);
  vecRef.z = lerp(vecRef.z, targetZ, amt);
};
