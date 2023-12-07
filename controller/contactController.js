
const getContacts = (req, res ) => {
    res.send({ message : 'get contactss' });
};


const createContact = (req, res ) => {
    // res.status(404).json({message:"create contacts"});
    const {name, email, address} = req.body;
    if (!name || !email || !address) {
        res.status(400);
        throw new Error("Invalid contact") 
    }
    res.status(200).json("contact created");
};

const getContactByID = (req, res ) => {
    res.status(404).json({message:`get contact for ${req.params.id}`})
};

const updateContact = (req, res ) => {
    res.status(404).json({message:`Update contact ${req.params.id}`}) 
};

const deleteContact = (req, res ) => {
    res.status(404).json({message:`delete contacts : ${req.params.id}`})    
};
module.exports = {getContacts,getContactByID, updateContact, createContact, deleteContact, };