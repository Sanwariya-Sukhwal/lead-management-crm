const pool = require("../config/db");

// Create Lead
const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, company, status, notes } = req.body;

    const result = await pool.query(
      `INSERT INTO leads
      (name,email,phone,company,status,notes)
      VALUES($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [name, email, phone, company, status, notes]
    );

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Get All Leads + Search + Filter + Sort + Pagination
const getAllLeads = async (req, res, next) => {
  try {
    let {
      page = 1,
      limit = 10,
      status,
      search,
      sort = "id"
    } = req.query;

    const offset = (page - 1) * limit;

    let query = `SELECT * FROM leads WHERE 1=1`;
    let countQuery = `SELECT COUNT(*) FROM leads WHERE 1=1`;

    const values = [];
    let index = 1;

    // Search
    if (search) {
      query += ` AND (name ILIKE $${index}
                OR email ILIKE $${index}
                OR company ILIKE $${index})`;

      countQuery += ` AND (name ILIKE $${index}
                     OR email ILIKE $${index}
                     OR company ILIKE $${index})`;

      values.push(`%${search}%`);
      index++;
    }

    // Filter
    if (status) {
      query += ` AND status=$${index}`;
      countQuery += ` AND status=$${index}`;

      values.push(status);
      index++;
    }

    // Sorting
    const allowedSort = [
      "id",
      "name",
      "status",
      "created_date"
    ];

    if (allowedSort.includes(sort)) {
      query += ` ORDER BY ${sort} ASC`;
    } else {
      query += ` ORDER BY id DESC`;
    }

    query += ` LIMIT $${index} OFFSET $${index + 1}`;

    values.push(limit);
    values.push(offset);

    const result = await pool.query(query, values);

    const countValues = values.slice(0, values.length - 2);

    const totalResult = await pool.query(
      countQuery,
      countValues
    );

    const total = Number(totalResult.rows[0].count);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: result.rows
    });
  } catch (error) {
    next(error);
  }
};

// Get Lead By ID
const getLeadById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM leads WHERE id=$1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Lead not found"
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Update Lead
const updateLead = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, email, phone, company, status, notes } = req.body;

    const result = await pool.query(
      `UPDATE leads
       SET
       name=$1,
       email=$2,
       phone=$3,
       company=$4,
       status=$5,
       notes=$6
       WHERE id=$7
       RETURNING *`,
      [name, email, phone, company, status, notes, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Lead not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Delete Lead
const deleteLead = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM leads WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Lead not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Search API
const searchLeads = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await pool.query(
      `SELECT * FROM leads
       WHERE name ILIKE $1
       OR email ILIKE $1
       OR company ILIKE $1`,
      [`%${q}%`]
    );

    res.status(200).json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    next(error);
  }
};

// Statistics
const getLeadStats = async (req, res, next) => {
  try {
    const total = await pool.query(
      "SELECT COUNT(*) FROM leads"
    );

    const stats = await pool.query(`
      SELECT status, COUNT(*) AS count
      FROM leads
      GROUP BY status
    `);

    res.status(200).json({
      success: true,
      totalLeads: Number(total.rows[0].count),
      statusStats: stats.rows
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  searchLeads,
  getLeadStats
};