import db from '../../models/index.js';

const AgeRange = db.ageRange;

  // get age range list
  export const getAgeRangeList = async (_, res) => {
    const ageRanges = await AgeRange.findAll({});
    res.status(200).json({
      data: ageRanges
    });
  }
  