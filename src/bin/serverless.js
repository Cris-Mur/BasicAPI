console.log(`
██████ ▓█████  ██▀███   ██▒   █▓▓█████  ██▀███   ██▓    ▓█████   ██████   ██████ 
▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒▓██▒    ▓█   ▀ ▒██    ▒ ▒██    ▒ 
░ ▓██▄   ▒███   ▓██ ░▄█ ▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒▒██░    ▒███   ░ ▓██▄   ░ ▓██▄   
  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄    ▒██ █░░▒▓█  ▄ ▒██▀▀█▄  ▒██░    ▒▓█  ▄   ▒   ██▒  ▒   ██▒
▒██████▒▒░▒████▒░██▓ ▒██▒   ▒▀█░  ░▒████▒░██▓ ▒██▒░██████▒░▒████▒▒██████▒▒▒██████▒▒
▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░   ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░▓  ░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░
░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░   ░ ░░   ░ ░  ░  ░▒ ░ ▒░░ ░ ▒  ░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░
░  ░  ░     ░     ░░   ░      ░░     ░     ░░   ░   ░ ░      ░   ░  ░  ░  ░  ░  ░  
      ░     ░  ░   ░           ░     ░  ░   ░         ░  ░   ░  ░      ░        ░  
                              ░                                                    
`)
const application = require('../application');
console.time("Startup")
console.debug("StartUp Application");

/// #############################################################

const mainApplication = new application();

/// #############################################################

console.debug(`[End of StartUp application ready]`)
console.timeEnd("Startup")

module.exports = mainApplication.express;