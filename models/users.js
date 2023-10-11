const usersModel = {
    getAll: `
    SELECT
        *
    FROM
       Users
    
    `,
    getByID:`
    SELECT
        *
    FROM
    Users
    WHERE
     ID = ?`
};

module.exports = usersModel;