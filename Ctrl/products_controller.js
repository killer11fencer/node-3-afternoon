module.exports = {
    create (req, res)  {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body
        db.create_product([name, description, price, image_url]).then(result => res.status(200).send(result)).catch(err => res.status(500))
    },
    getOne (req, res)  {
        const db = req.app.get('db')
        const { id } = req.params
        db.read_product(id).then(result => res.status(200).send(result)).catch(err => res.status(500))
    },
    getAll (req, res) {
        const db = req.app.get('db')
        db.read_products().then(result => res.status(200).send(result)).catch(err => res.status(500))
    },
    update (req, res) {
        const db = req.app.get('db')
        const { id } = req.params
        const { desc } = req.query
        db.update_product([id, desc]).then(result => res.status(200).send(result)).catch(err => res.status(500))
    },
    deleteProduct (req, res)  {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then(result => res.status(200).send(result)).catch(err => res.status(500))
    }
}