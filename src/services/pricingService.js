const Item = require("../Models/itemSchema");
const Organization = require("../Models/organizationSchema");
const Pricing = require("../Models/pricingSchema");

const getPricing = async (zone, organization_id) => {
  try {
    const pricing = await Pricing.findOne({ organization_id, zone });
    if (!pricing) {
      return null;
    }
    return pricing;
  } catch (error) {
    throw new Error(error);
  }
};

const getItem = async (item_type) => {
  try {
    const item = await Item.findOne({ type: item_type });
    if (!item) {
      return null;
    }
    return item;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getPricing, getItem };
