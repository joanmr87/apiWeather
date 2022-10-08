const controller = {
	main: (req, res) => {
		console.log("LLEGO AL CONTROLLER")
		res.send("ESTAMOS EN LA RUTA PRICNIPAL")
	},
};

module.exports = controller;