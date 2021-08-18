const puppeteer = require('puppeteer');
//할 인원
const menber = 1;
//이름
const name = ["0"];
//학번
const number = ["0"];
//호실
const room = ["0"];
(async() => {
  const browser = await puppeteer.launch({
    headless: false
  });

  for (var i = 0; i < menber; i++) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1366,
      height: 768
    });
    await page.goto('https://forms.gle/tcABNdyMuBHEd3Hi9'),
    await page.waitForNavigation( ),
    await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", name[i]),
    await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", number[i]),
    await page.click("#i13"),
    await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", room[i]),
    await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(5) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", "36.1"),
    await page.click("#i37"),
    await page.click("#i47"),
    await page.click("#i57");
    await page.click("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > span > span");  
    await page.close();
  }
  await browser.close();
})();

