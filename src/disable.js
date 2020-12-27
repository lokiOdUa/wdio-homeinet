const { remote } = require('webdriverio');
const { d } = require('./data');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url(d.baseUrl);

    await (await browser.$(d.loginUsernameSelector)).setValue(d.adminLogin);
    await (await browser.$(d.passwordUsernameSelector)).setValue(d.adminPassword);
    await (await browser.$(d.loginButtonSelector)).click();

    // go to Parental Controls
    await clickMenuItem(browser, d.menuPcSelector);
    await sleep(2000);

    // get state of "Enable Parental Controls" and set it to enabled if needed
    await browser.switchToFrame(await browser.$(d.mainFrameSelector));
    let pcs = browser.$(d.enableParConSelector);
    if ( pcs.isSelected === true ) {
        throw ("Enable Parental Controls should not be selected at this moment!");
    }
    await browser.switchToFrame(null);
    await clickMainItem(browser, d.enableParConSelector);
    await sleep(2000);
    await clickMainItem(browser, d.enableParConSaveSelector);
    await sleep(2000);

    // go to System Tools -> Reboot
    await clickMenuItem(browser, d.menuToolsSelector);
    await clickMenuItem(browser, d.menuRestartSelector);

    // logout (for enable internet only)
    await clickMenuItem(browser, d.menuRestartSelector);
    await sleep(1000);
    await clickMainItem(browser, d.restartButtonSelector);
    await sleep(1000);
    try {
        await browser.acceptAlert();
    } catch (e) {
        throw e;
    }

    await browser.deleteSession()
})().catch((e) => console.error(e))

async function clickMenuItem(browser, item) {
    await browser.switchToFrame(await browser.$(d.menuFrameSelector));
    console.log("Going to click Menu " + item)
    await clickItem(browser, item);
    await browser.switchToFrame(null);
}

async function clickMainItem(browser, item) {
    await browser.switchToFrame(await browser.$(d.mainFrameSelector));
    console.log("Going to click Main " + item)
    await clickItem(browser, item);
    await browser.switchToFrame(null);
}

async function clickItem(browser,item) {
    await sleep(d.defaultWaitTime);
    await (await browser.$(item)).click();
    await sleep(d.defaultWaitTime);
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
