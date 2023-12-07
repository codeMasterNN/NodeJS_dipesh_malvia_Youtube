const express = require('express');
const router = express.Router();
const controller = require('../controller/contactController');

// router.route("/").get((req, res) => {
//     res.status(404).json({message:"get all contacts"})    
// });

router.route("/").get(controller.getContacts);

// router.route("/").post((req, res) => {
//     res.status(404).json({message:"create contacts"})    
// });
router.route("/").post(controller.createContact);

// router.route("/:id").get((req, res) => {
//     res.status(404).json({message:`get contact for ${req.params.id}`})    
// });
router.route("/:id").get(controller.getContactByID);

// router.route("/:id").put((req, res) => {
//     res.status(404).json({message:`Update contact ${req.params.id}`})    
// });
router.route("/:id").put(controller.updateContact);

// router.route("/:id").delete((req, res) => {
//     res.status(404).json({message:`delete contacts : ${req.params.id}`})    
// });
router.route("/:id").delete(controller.deleteContact);


module.exports = router;