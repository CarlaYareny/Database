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
     ID = ?`,

addRow:`
INSERT INTO
Users (
    username,
    email,
    password,
    name,
    lastname,
    phone_number,
    role_id,
    is_active
)
VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?
)
`,
getByUsername:`
SELECT
id
FROM
Users
WHERE
Username = ?
`,
getByEmail:`
SELECT
id
FROM
Users
WHERE
email = ?
`,
};

module.exports = usersModel;