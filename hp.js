const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const isPkg = typeof process.pkg !== 'undefined';
console.log('현재 프로그램 실행중인 OS: ' + process.platform)

//check win32
if (process.platform == 'win32') {
  chromiumExecutablePath = (isPkg ?
    puppeteer.executablePath().replace(
      /^.*?\\node_modules\\puppeteer\\\.local-chromium/,
      path.join(path.dirname(process.execPath), 'chromium')
    ) :
    puppeteer.executablePath()
  );
}

var dataFile;
try {
     dataFile = fs.readFileSync('Scret.json'); 
} catch (error) {
    console.log('err=', err);
}
const data = JSON.parse(dataFile);
const count = Object.keys(data).length
const time = new Date();
const max = 36
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('------------------------------------');
console.log('기숙사 자동 발열체크 프로그램 v0.0.1');
console.log('------------------------------------');
console.log('json 분석결과 ' + count + '명을 발견했습니다. ' + time);

(async() => {
    const browser = await puppeteer.launch({
      executablePath: chromiumExecutablePath,headless: false ,
    });
    for (var i = 0; i < count; i++) {
    console.log('[pending] ID:'+ data[i].id + '하는중... ' + time);
    if(data[i].body == '행긱'){
      const page = await browser.newPage();
      await page.setViewport({
        width: 1366,
        height: 768
      });
      await page.goto('https://forms.gle/sFG3jmhLuJggxm887'),
      await page.waitForNavigation( ),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].name),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].id),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(3) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].room),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", String(max +'.'+rand(0, 8))),
      await page.click("#i21");
      try {
        await page.screenshot({               
          path: './screenshot/' + data[i].id +'_'+ moment().format("MM-DD-YYYY") +'.png',            
          fullPage: true                      
          });
      } catch (error) {
        console.log("오류가 발생했습니다 screenshot 파일이 제대로 있는지 확인을 해주십시오.");
        console.log('종료할려면 아무키나 눌려주세요.');
        return
      }
      console.log('[log] 성공적으로 저장됨. 파일이름:'+ data[i].id +'_'+ moment().format() +'.png');
      await page.click("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > span > span"); 
      console.log('[SUCCESS] ID:'+ data[i].id + ' 정상적으로 됨... ' + moment().format());
    }else{
      console.log('[Fail] ID:'+ data[i].id + ' 다른 기숙사입니다. ' + moment().format());
    }
    }
    console.log('성공적으로 작업을 전부 완료 했습니다!');
    console.log('종료할려면 아무키나 눌려주세요.');
  })();
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));