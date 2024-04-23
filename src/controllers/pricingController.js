const pricingService = require("../services/pricingService");

const deliveryCost = async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    const total_price = await pricingService.getTotalCost(
      zone,
      organization_id,
      total_distance,
      item_type
    );
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
