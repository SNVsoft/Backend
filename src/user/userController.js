


var getDataControllerfn = async (res,req)=>{

    var userDetails = await userService.getDataFromDBService();
    res.send({"status":true,"data":userDetails})
}