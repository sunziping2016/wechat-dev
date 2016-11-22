var express = require('express');
var logger = require('morgan');
var wechat = require('wechat');
var config = require('./config');

var app = express();

app.use(logger('dev'));
app.use(express.query());

app.use('/', wechat(config, function (req, res, next) {
    res.reply('你好！我们已经记录您的反馈！谢谢！');
}));

app.listen(25066);
