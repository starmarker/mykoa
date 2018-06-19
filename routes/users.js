const router = require("koa-router")();
const user = require('../controllers/users');
router.prefix("/users");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!1";
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});
router.all("/save",async (ctx,next)=>{
	let result=await user.list(ctx);
	//let result=await ctx.query;
	//console.log(result);
	// await next();
	//ctx.response.type="json";
	//ctx.response.body=result;
	
});
module.exports = router;
