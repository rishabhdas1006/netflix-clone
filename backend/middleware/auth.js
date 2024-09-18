import jwt from "jsonwebtoken";

export const jwtParse = (req, res, next) => {
	const authHeader = req.headers.token;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.sendStatus(401);
	}

	try {
		const token = authHeader.split(" ")[1];

		jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
			if (err) res.status(403).json("Token is not valid!");
			req.user = user;
			next();
		});
	} catch {
		return res.status(401).json("You are not authenticated!");
	}
};
