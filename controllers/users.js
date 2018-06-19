const Monk = require("monk");
const config= require("../config/config");
const db = new Monk(config.DATABASE_URL+':'+config.DATABASE_PORT+'/'+config.DATABASE_NAME);
const User=db.get('user');

const userController={
	async register(ctx){
		let {user_name,user_password,user_nickname}=ctx.request.body;
		console.log({user_name,user_password,user_nickname});
		if(user_name===""){
			ctx.throw(400,'用户名不能为空');
		}
		if(user_password===""){
			ctx.throw(400,'用户密码不能为空');
		}
		if(user_nickname===""){
			ctx.throw(400,'用户昵称不能为空');
		}
		let count=await User.count({user_name});
		if(count>0){
			ctx.throw(400,'用户已存在');
		}else{
			await User.insert({user_name,user_password,user_nickname}).then(()=>{
				//ctx.response.type = "application/json";
				//ctx.response.status=200
				console.log('success')
				ctx.body={
					success:true,
					message:'注册成功'
				};
			}).catch(()=>{
				ctx.throw(500,'服务器内部错误');
			})
		}
//	let result={user_name:ctx.request.body.user_name||'lizhao',user_password:ctx.request.body.user_password||'123123',user_nickname:ctx.request.body.user_nickname||'haha'};
// 	let list=await User.find({});
// 	ctx.body=list;
	},
	async list(ctx){
		await User.find().then(res=>{
			console.log(res);
			ctx.body=res;
		}).catch(()=>{
			ctx.body=[];
		})
	}
}
module.exports=userController;