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
	// let result=await ctx.query;
	console.log("获取成功");
	
	
	//ctx.response.type="json";
	// ctx.body=result;
	// ctx.body='结果';
	await next();
	
});
module.exports = router;
