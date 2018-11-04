var mybuffer=new Buffer('==i1j2i3h1i3h1i23h','base64')
console.log(mybuffer)
require('fs').writeFile('logo.png',mybuffer,function(err,data){
    if(!err){
         console.log(process.argv0)
        process.stderr.write('读取错误')
        // process.stdout.write('Hello\n World')
    }else{
        process.stderr('读取错误')
    }
});