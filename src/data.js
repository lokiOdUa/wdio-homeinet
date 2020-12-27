let d = new Object();

d.baseUrl       = "http://192.168.92.1/";
d.adminLogin    = "admin";
d.adminPassword = "NykeSh1773";

d.loginUsernameSelector    = "input[id=\"userName\"]";
d.passwordUsernameSelector = "input[id=\"pcPassword\"]";
d.loginButtonSelector      = "label[id=\"loginBtn\"]";
d.restartButtonSelector    = "input[id=\"button_reboot\"]";
d.enableParConSelector     = "input[id=\"ParentCtr_en\"]";
d.enableParConSaveSelector = "input[id=\"saveClkBtn\"]";

d.mainFrameSelector = "frame[id=\"frame2\"]";
d.menuFrameSelector = "frame[id=\"frame1\"]";
d.topFrameSelector = "frame[name=\"topFrame\"]";

d.menuLogoutSelector  = "a[id=\"menu_logout\"]";
d.menuPcSelector      = "a[id=\"menu_pc\"]";
d.menuRestartSelector = "a[id=\"menu_restart\"]";
d.menuToolsSelector   = "a[id=\"menu_tools\"]";

d.defaultWaitTime = 1000

module.exports = { d }
