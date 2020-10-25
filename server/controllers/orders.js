const dbConn = require('../connection');

exports.getOrders = (req, res) => {
    const sql = `CALL pGetOrders(); `;
    dbConn.query(sql, (err, rows) => {
        if (err) throw err;
        const result = JSON.parse(JSON.stringify(rows[0]));
        res.json({
            result,
            error: res.error
        });
    });
};
exports.addOrder = (req, res) => {
    let orderId = null;

    const sql = `CALL pInsertOrder(?,?,?,?,@output); select  @output as orderId;`;
    dbConn.query(sql, [req.body.first_name, req.body.last_name,
        req.body.scheduled_date, JSON.stringify(req.body)], (err, rows) => {
        if (err) throw err;
        orderId = rows[1][0]['orderId'];
        res.json({
            message: orderId,
            error: res.error
        });
    });

}

exports.updateOrders = (req, res) => {

    const sql = `CALL pUpdateOrder(?,?);`;
    dbConn.query(sql, [req.body.id, req.body.status_id], (err, rows) => {
        if (err) throw err;
        res.json({
            message: 'updated',
            error: res.error
        });
    });

}
exports.deleteOrder = (req, res) => {
    const sql = `CALL pDeleteOrder(?);`;
    dbConn.query(sql, req.body.id, (err, rows) => {
        if (err) throw err;
        res.json({
            message: 'removed',
            error: res.error
        });
    });
}
