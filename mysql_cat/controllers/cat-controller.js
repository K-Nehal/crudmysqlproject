const {check , validationResult} = require('express-validator')
const connection = require('../config/database').getConnected

let getall = (req, res)=>{
    let sql = `SELECT * FROM category`
    console.log(sql);
    connection.query(sql,(err ,result)=>{
    if (err) throw error 
    console.log("data found");
    res.send(result)
    })
    }
    

    let getbyId = (req, res)=>{
        let Cat = req.params.catId
        let sql = `SELECT * FROM category WHERE id = ${Cat}`
        console.log(sql);
        connection.query(sql,(err ,result)=>{
        if (err) throw error 
        console.log("data found");
        res.send(result)
        })
        }
 
        
        let deletebyId = (req, res)=>{
            let Cat = req.params.catId
            let sql = `DELETE FROM category WHERE id = ${Cat}`
            console.log(sql);
            connection.query(sql,(err ,result)=>{
            if (err) throw error 
            console.log(result);
            res.send(` data deleted ${result}`)
            })
            }

let addData = (req,res)=>{

    console.log(req.body);
    const error = validationResult(req)
    console.log(error)
    
    if (!error.isEmpty()) {
    console.log("error found");
    res.send(error)
    } else {
    let {category_name , category_desc} = req.body
    let sql = `INSERT INTO category (category_name , category_desc ,created ) VALUES ('${category_name}', '${category_desc}',now())`
    console.log(sql);
    connection.query(sql,(err ,result)=>{
        if (err) throw error 
        console.log(result);
        res.send(` data added success ${result}`)
        })
    
    }
    }

    let updateData = (req,res)=>{

        console.log(req.body);
        const error = validationResult(req)
        console.log(error)
        
        if (!error.isEmpty()) {
        console.log("error found");
        res.send(error)
        } else {
        let Cat = req.params.catId
        let {category_name , category_desc} = req.body
        let sql = ` UPDATE category SET category_name='${category_name}', category_desc= '${category_desc}' WHERE id = ${Cat} `
        console.log(sql);
        connection.query(sql,(err ,result)=>{
            if (err) throw error 
            console.log(result);
            res.send(` data updated success ${result}`)
            })
        
        }
        }
    

exports.getall = getall
exports.getbyId = getbyId
exports.deletebyId = deletebyId
exports.addData = addData
exports.updateData = updateData