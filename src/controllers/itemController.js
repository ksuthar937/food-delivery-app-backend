const itemService = require("../services/itemService");

const addData = async (req, res) => {
  try {
    const {
      organization_id,
      item_id,
      name,
      type,
      description,
      zone,
      base_distance_in_km,
      km_price,
      fix_price,
    } = req.body;

    const { organization, item, pricing } = await itemService.addItem(
      organization_id,
      item_id,
      name,
      type,
      description,
      zone,
      base_distance_in_km,
      km_price,
      fix_price
    );

    res.status(200).json({
      success: true,
      organization,
      item,
      pricing,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { addData };
