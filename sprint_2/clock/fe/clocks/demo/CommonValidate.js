const express = require('express');
const app = express();

// Common validate: Kiểm tra xem tham số trong yêu cầu có được cung cấp hay không
const commonValidate = (req, res, next) => {
    const { param } = req.query;
    if (!param) {
        return res.status(400).json({ error: 'Tham số bị thiếu' });
    }
    next();
};

// Custom validate: Kiểm tra xem tham số trong yêu cầu có phải là số hay không
const customValidate = (req, res, next) => {
    const { param } = req.query;
    if (isNaN(param)) {
        return res.status(400).json({ error: 'Tham số không phải là số' });
    }
    next();
};

// Route yêu cầu cả common validate và custom validate
app.get('/route', commonValidate, customValidate, (req, res) => {
    // Xử lý yêu cầu đã được validate
    const { param } = req.query;
    res.json({ message: `Tham số: ${param}` });
});

// Khởi động máy chủ
app.listen(3000, () => {
    console.log('Máy chủ đang chạy trên cổng 3000');
});