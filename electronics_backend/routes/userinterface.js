var express = require('express')
const upload = require('./multer')
var router = express.Router()
var pool=require("./pool")

router.get('/fetch_all_banner', function (req, res, next) {
    try {
        pool.query("select * from banner", function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error , Please Contact Database Admin' })
            }
            else {
                res.status(200).json({ data: result, status: true, message: 'success' })
            }
        })
    }
    catch (e) {
        res.status(200).json({ message: 'Server Error', status: false })
    }
})

router.get('/display_all_category',function(req,res,next){
    try{
      pool.query('select * from category',function(error,result){
        if(error)
        {
        res.status(200).json({status:false,message:'Database error,pls contact database admin'})
  
        }
        else
        {
          res.status(200).json({data:result,status:true,message:'Success'})
        }
  
  
      })
  }
  catch(e)
  {
  
      res.status(200).json({status:false,message:'Server Error....'})
  }
    
  
  })
  
  router.post('/display_all_products_by_status', function (req, res) {
    try {
        pool.query('select P.*, (select C.categoryname from category C where C.categoryid = P.categoryid) as categoryname, (select B.brandname from brands B where B.brandid = P.brandid) as brandname, (select Pr.productname from products Pr where Pr.productid = P.productid) as productname,(select Pr.picture from products Pr where Pr.productid = P.productid) as productpicture from productdetails P where P.status=?',[req.body.status], function (error, result) {
            if (error) {
                console.log(error)
                res.json({ status: false, message: 'Database Error!' })
            }
            else {
                console.log(result)
                res.json({ status: true, data: result })
            }
        })
    }
    catch (e) {
        res.json({ status: false, message: 'Server Error!' })
    }
})

router.post('/display_all_products_for_menu', function (req, res, next) {
    try {
        pool.query("select products.*,category.categoryname,brands.brandname from products,category,brands where products.categoryid=category.categoryid and products.brandid=brands.brandid and products.categoryid=?",[req.body.categoryid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, data: 'Database Error , Please Contact Database Admin' })
            }
            else {
                res.status(200).json({ status: true, data: result })
            }
        })
    } catch (e) {
        res.status(200).json({ status: false, data: 'server Error...' })
    }
})

router.get('/display_all_brands',function(req,res,next){
    try{
      pool.query('select * from brands group by brandname',function(error,result){
        if(error)
        {
        res.status(200).json({status:false,message:'Database error,pls contact database admin'})
  
        }
        else
        {
          res.status(200).json({data:result,status:true,message:'Success'})
        }
  
  
      })
  }
  catch(e)
  {
  
      res.status(200).json({status:false,message:'Server Error....'})
  }
    
  
  })
  
  router.post('/fetch_product_details_by_productid', function (req, res) {
    try {
        pool.query('select P.*, (select C.categoryname from category C where C.categoryid = P.categoryid) as categoryname, (select B.brandname from brands B where B.brandid = P.brandid) as brandname, (select Pr.productname from products Pr where Pr.productid = P.productid) as productname from productdetails P where P.productid=?',[req.body.productid], function (error, result) {
            if (error) {
                res.json({ status: false, message: 'Database Error!' })
            }
            else {
                res.json({ status: true, data: result })
            }
        })
    }
    catch (e) {
        res.json({ status: false, message: 'Server Error!' })
    }
})

router.post('/display_productdetails_by_id', function (req, res) {
    try {
        pool.query('select P.*, (select C.categoryname from category C where C.categoryid = P.categoryid) as categoryname, (select B.brandname from brands B where B.brandid = P.brandid) as brandname, (select Pr.productname from products Pr where Pr.productid = P.productid) as productname,(select Pr.picture from products Pr where Pr.productid = P.productid) as productpicture from productdetails P where P.productdetailsid=?',[req.body.productdetailsid], function (error, result) {
            if (error) {
                console.log(error)
                res.json({ status: false, message: 'Database Error!' })
            }
            else {
                console.log(result)
                res.json({ status: true, data: result })
            }
        })
    }
    catch (e) {
        res.json({ status: false, message: 'Server Error!' })
    }
})

module.exports = router