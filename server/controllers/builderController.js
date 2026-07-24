export const calculateBuild = (req, res) => {
  const { build } = req.body;
  if (!build) {
    return res.status(400).json({ message: 'Build object required' });
  }

  let totalPower = 0;
  let totalPrice = 0;

  Object.values(build).forEach(part => {
    if (part) {
      if (part.power) totalPower += part.power;
      if (part.price) totalPrice += part.price;
    }
  });

  return res.json({
    totalPower,
    totalPrice,
    recommendedPsu: Math.ceil((totalPower + 120) / 50) * 50,
    isCompatible: true
  });
};
