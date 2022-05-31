const HandleCheckout  = (req, res, db) => {
    const { vehnum} = req.body;
    db.select('*').from('users')
        .where('vehnum', '=', vehnum)
        .then(user => 
        {
            return res.json(user[0]);
        }
    ).catch(err => res.status(400).json('unable to get user'))
    }
module.exports = {
    HandleCheckout
}