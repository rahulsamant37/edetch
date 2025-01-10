const mongoose=require('mongoose')

const careerVideoSchema=new mongoose.Schema({
    parentONetCode:{
        type:String,
        required:true,
        unique:true,
    },

    occupationTitle:{
        type:String,
        required:true,
    },

    careerOneStopVideoPage:{
        type:String,
        required:true,
    },

    youtubeVideoPage:{
        type:String,
        required:true,
    },

    youtubeEmbedCode:{
        type:String,
        required:true,
    },

    parentVideo:{
        type:String,
        required:false,
    }
})

const careerVideo=mongoose.model("CareerVideo",careerVideoSchema)

module.exports=careerVideo;