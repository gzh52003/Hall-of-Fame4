/* 查询医生数据 */

const { Router } = require('express');  //引入框架
const router = Router();                //启动路由
const request = require('../mysql');    //引入数据库方法

//查询所有数据
router.get('/', async (req, res) => {
  try {
    const sql = `select * from doclist`;
    let data = await request(sql);
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        meg: "查询成功",
        data,
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info);
    // console.log('监听到请求')
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//根据id查询单个数据
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sql = `select * from doclist WHERE id = '${id}'`;
    let data = await request(sql);
    let info = {};
    if (data.length) {
      info = {
        code: 200,
        state: true,
        meg: "查询成功",
        data,
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info);
    // console.log('监听到请求')
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

module.exports = router;