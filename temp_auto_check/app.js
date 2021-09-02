const fs = require('fs');
const puppeteer = require('puppeteer');
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
      headless: false
    });
    for (var i = 0; i < count; i++) {
    console.log('[pending] ID:'+ data[i].id + '하는중... ' + time);
    if(data[i].body == '효민'){
      const page = await browser.newPage();
      await page.setViewport({
        width: 1366,
        height: 768
      });
      await page.goto('https://forms.gle/tcABNdyMuBHEd3Hi9'),
      await page.waitForNavigation( ),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].name),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].id),
      await page.click("#i13"),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].room),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(5) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", String(max +'.'+rand(0, 8))),
      await page.click("#i37"),
      await page.click("#i47"),
      await page.click("#i57");
      await page.click("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > span > span");  
      await page.close();
    }else if(data[i].body == '행긱'){
      const page = await browser.newPage();
      await page.setViewport({
        width: 1366,
        height: 768
      });
      await page.goto('https://forms.gle/sFG3jmhLuJggxm887'),
      await page.waitForNavigation( ),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].name),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].id),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", data[i].room),
      await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", String(max +'.'+rand(0, 8))),
      await page.click("#i21"),
      await page.click("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > span > span");  
      await page.close();
    }
      console.log('[SUCCESS] ID:'+ data[i].id + ' 정상적으로 됨... ' + time);
    }
    await browser.close();
  })();



