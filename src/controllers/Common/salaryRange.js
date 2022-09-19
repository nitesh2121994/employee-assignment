import db from '../../models/index.js';

const SalaryRange = db.salaryRange;

  // get salary range list
  export const getSalaryRangeList = async (_, res) => {
    const salaryRanges = await SalaryRange.findAll({});
    res.status(200).json({
      data: salaryRanges
    });
  }
  