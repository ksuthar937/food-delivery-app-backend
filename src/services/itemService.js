const Item = require("../Models/itemSchema");
const Organization = require("../Models/organizationSchema");
const Pricing = require("../Models/pricingSchema");

const addItem = async (
  organization_id,
  item_id,
  name,
  type,
  description,
  zone,
  base_distance_in_km,
  km_price,
  fix_price
) => {
  try {
    const isOrganization = await Organization.findOne({
      id: organization_id,
      name,
    });

    if (!isOrganization) {
      var organization = await Organization.create({
        id: organization_id,
        name,
      });
    }

    const item = await Item.create({ id: item_id, type, description });

    const pricing = await Pricing.create({
      organization_id: !isOrganization ? organization.id : isOrganization.id,
      item_id: item.id,
      zone,
      base_distance_in_km,
      km_price: item.type === "perishable" ? 1.5 : 1,
      fix_price,
    });

    return { organization, item, pricing };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { addItem };
