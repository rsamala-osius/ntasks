module.exports = app => {

    /*app.listen(app.get('port'), () =>{
        console.log(`NTASKS API - PORT ${app.get("port")}`);
    })*/

    app.db.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`NTASKS API - PORT ${app.get("port")}`);
        })
    });

};