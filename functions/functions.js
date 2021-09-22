
exports.users = async (admin, client, livreur, vendeur, customer, email) => {
    return (
        await admin.findOne({ email }) ||
        await client.findOne({ email }) ||
        await livreur.findOne({ email }) ||
        await vendeur.findOne({ email }) ||
        await customer.findOne({ email })
    )
}







