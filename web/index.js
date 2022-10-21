const express = require("express")
const app = express()
const path = require("path")


const index = require('./routes/index')
const input = require('./routes/input')
const board = require('./routes/board')
const alert = require('./routes/alert')


// View Engine Setup
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('web'))

app.use('/', index)
app.get('/input', input)
app.get('/board', board)
app.get('/alert', alert)

const example = [{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220801',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '20220807',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220803',
    사건종류 : '민사',
    유사도 : '98%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '20220808',
    사건종류 : '형사',
    유사도 : '70%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '20220805',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220802',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208021',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208022',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208024',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "1",
    판례제목 : '테스트1',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "2",
    판례제목 : '테스트2',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "3",
    판례제목 : '테스트3',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "4",
    판례제목 : '테스트4',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "5",
    판례제목 : '테스트5',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "6",
    판례제목 : '테스트6',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "7",
    판례제목 : '테스트7',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "8",
    판례제목 : '테스트8',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "9",
    판례제목 : '테스트9',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "10",
    판례제목 : '테스트10',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},
{
    번호 : "11",
    판례제목 : '테스트11',
    사건번호 : '20220807',
    선고날짜 : '20220807',
    사건종류 : '민사',
    유사도 : '100%',
    다운로드 : '다운로드'
},
{
    번호 : "12",
    판례제목 : '테스트12',
    사건번호 : '202208073',
    선고날짜 : '202208074',
    사건종류 : '형사',
    유사도 : '99%',
    다운로드 : '다운로드'
},]; // 예시 데이터

app.get("/users", (request, response) => {
    response.send(example);
})

app.listen(8080,function(error) {
	if(error) throw error
		console.log("Server created Successfully on PORT 8080")
})