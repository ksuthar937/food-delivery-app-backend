const pricingService = require("../services/pricingService");

const deliveryCost = async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const price = await pricingService.getPricing(zone, organization_id);

    const item = await pricingService.getItem(item_type);
    if (!price || !item) {
      res.status(500).json({
        message: "Pricing or item not found",
      });
    }

    let total_price = price.fix_price;

    if (total_distance > price.base_distance_in_km) {
      total_price =
        total_price +
        (total_distance - price.base_distance_in_km) * price.km_price;
    }

    res.status(200).json({
      success: true,
      total_price,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { deliveryCost };
