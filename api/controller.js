var authenticate = require('../services/authentication');
var thumbnail = require("../services/thumbnail");
var jPatch = require("../services/jsonPatch");

var controllers = {
    addData: function(req,res){
        authenticate.addData(req,res,function(response){
            res.send(response);
        });
    },
    validate:function(req,res){
        authenticate.validate(req,res,function(response,next){
            res.send(response);
        });
    },
    generateThumbnail:function(req,res){
        thumbnail.generateThumbnail(req,res,function(response){
            res.send(response);
        });
    },

    patch:function(req,res){
        jPatch.patchJson(req,res,function(response){
            res.send(response);
        });
    }
    
};

module.exports = controllers;