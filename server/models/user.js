/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app, mongoose) {

    /* User Basic Schema*/
    var userSchema = new mongoose.Schema({
        userFullName: {type: String, required:true},
        userEmail: {type: String, unique:1, required:true},
        userPassword: {type: String, required:true},
     /*   userStatus: {type: String, required:true}*/
    });

    app.db.model('basicSchema', userSchema);


    var goalSchema=new mongoose.Schema({
        day:{type:String, required:true},
        userGoal:{type:String, required:true},
        userDescription:{type:String, required:true}
    })

    app.db.model('userGoalSchema',goalSchema)

}