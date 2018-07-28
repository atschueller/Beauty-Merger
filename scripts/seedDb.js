const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/beautymerger"
);

const productSeed = [
	{
		name: "Straight Blow Dry",
        brand: "Bumble and Bumble",
        url: "https://www.bumbleandbumble.com/product/19057/19664/style/cremes/bbstraight-blow-dry#/sku/39141",
		review: "Awesome blow dry product for curly coarse hair!"
	},
	{
		name: "Does It All",
        brand: "Bumble and Bumble",
        url: "https://www.bumbleandbumble.com/product/19063/193/style/hairsprays/does-it-all#/sku/225",
		review: "Great for blocking out humidity and leaving a touchable feel to the hair"
    },
    {
		name: "Revive Shampoo",
        brand: "Kenra",
        url: "http://www.kenraprofessional.com/platinum/revive-shampoo#sm.001r7tbuq1ayjdf9vyg2eqjphjwxk",
		review: "Smells great and Leaves hair strong and soft, sulfate-free so Keratin treatment friendly."
    },
    {
		name: "Radiant Creamy Concealer Caramel",
        brand: "NARS",
        url: "https://www.narscosmetics.com/USA/radiant-creamy-concealer/999NACRCC0001.html?dwvar_999NACRCC0001_color=7845012344&cgid=concealers",
		review: "Good buildable coverage and lots of shades to choose from"
    },
    {
		name: "Bronzing Powder Casino",
        brand: "NARS",
        url: "https://www.narscosmetics.com/USA/casino-bronzing-powder/0607845051022.html?cgid=bronzer",
		review: "Natural matte finish and good for a medium/warm skin tone"
    },
    {
		name: "Lip Gloss Dolce Vita",
        brand: "NARS",
        url: "https://www.narscosmetics.com/USA/dolce-vita-lip-gloss/0607845016762.html?cgid=lip-gloss",
		review: "Natural matte finish and good for a medium/warm skin tone"
    },
];
db.Product
	.remove({})
	.then(() => db.Product.collection.insertMany(productSeed))
	.then(data => {
		console.log(data.insertedIds.length + " products inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
