module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { 'title': 'Buy books' ,'location' :'Book house' },
                { 'title': 'Bring fruits' ,'location' : 'Market' }
            ]);
        }

    }
};