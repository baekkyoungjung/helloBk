// 책의 내용과는 많은 부분이 다름
// 그 이유는 책에 나온 문법중 상당히 많은 부분이 nodejs, express등 외부모듈 버전이 올라감에 따라 파기된 문법이나
// 변형된 문법이 많음

var fs = require('fs');//FileSystem 추출 페이지를 불러올때 씀
var ejs = require('ejs');//ejs추출 (ejs는 마치 JSP에 스크립틀릿같이 html코드 내부에 값을 전달하기위해 php에 echo같은 역할?)
var http = require('http');//기본적인 nodejs를 구성하기위한 기본요소 (하지만 구식 방식)
var mysql = require('mysql');//mysql db와 연동
var express = require('express');//express없이도 웹서버를 구축할 수 있지만 더 빠르고 간편하고 더 많은 모듈을 내장하고있는 express모듈을 이용
require('date-utils');
//디비와 연동
var client = mysql.createConnection({
	host: 'localhost',
	user:'root',
	password:'p',
	database : 'thinking',
	multipleStatements: true

});
// client.query('USE company'); 이것도 따로 넣을 필요없이 client에서 처리 가능

//express모듈을 실행
var app = express();
// var cookieParser = require('cookie-parser'); 쿠키를 이용할 일은 없으니깐

// 이거 왜 안됨 스크립트, css연결이 안됨
// app.use('/assets/js/', express.static(__dirname + '/assets/js/'));

//req.body를 사용 하려면 이게 필요 함
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//서버를 생성, 서버를 실행
app.listen(8080, function(){
	console.log('Server On port:8080')
});


var nowDate = Date.today();

//이건 옛날방식 위 방식처럼 훨씬 간소화 시킬 수 있음 (http모듈을 부를 필요가 없음)
// http.createServer(app).listen(3000, function(){
// 	console.log('on!');
// })

//라우트를 수행 (각각의 기능들을 정의 예를들면 insert글쓰기따로 뭐 따로 이렇게)
//여기선 라우트 필요없음 (사실 라우트가 뭔지 잘 모름)

// app.use('/js', express.static(__dirname+'/assets/js'));//js로드
// app.use('/css', express.static(__dirname+'/assets/css'));//css로드



//----------------------------------------------------------------------------------------------------
app.get('/', function(req, res){

	//list.html파일을 읽음
	fs.readFile('test.html', 'utf8', function(error, data){
		//쿼리문을 던짐, 쿼리문으로 나온 결과는 results에 저장
		// client.query('SELECT * FROM container_list group by container_category', function(error, results){
		// list.html에다가 data라는곳에다가 결과를 넣고 응답을 함 
				res.send(ejs.render(data));

	});		
});