import mysql from "mysql"

export const getArticle = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aurora"
    })
    
    const sql = `SELECT * FROM ${req.params.obj} WHERE id=?`
    con.query(sql, [req.params.id], (err, data) => {
        if (err)
            return res.status(500).send(err)

        return res.json(data[0])
    })

    con.end()
}

export const getArticles = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aurora"
    })
    
    const sql = `SELECT * FROM ${req.params.obj}`
    con.query(sql, (err, data) => {
        if (err)
            return res.status(500).send(err)

        return res.json(data)
    })

    con.end()
}

export const updateArticle = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aurora"
    })

    const sql = `UPDATE ${req.params.obj} SET title=?, contents=?, updated=NOW() WHERE id=?`
    con.query(sql, [req.body.title, req.body.contents, req.params.id], (err) => {
        if (err)
            return res.status(500).send(err)

        return res.json("OK")
    })

    con.end()
}

export const createArticle = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aurora"
    })

    const sql = `INSERT INTO ${req.params.obj} (title, contents) VALUES (?, ?)`
    con.query(sql, [req.body.title, req.body.contents], (err) => {
        if (err)
            return res.status(500).send(err)

        return res.json("OK")
    })

    con.end()
}

export const deleteArticle = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aurora"
    })

    const sql = `DELETE FROM ${req.params.obj} WHERE id=?`
    con.query(sql, [req.params.id], (err) => {
        if (err)
            return res.status(500).send(err)

        return res.json("OK")
    })

    con.end()
}