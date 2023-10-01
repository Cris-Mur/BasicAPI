const crypto = require('node:crypto');
const path = require('node:path');
const fs = require('node:fs/promises');

const appName = process.env.APP_NAME || "node_express_api";
async function initLogger() {
    try {
        if (logger) {
            // Connecting root folder in environment to logger file system.
            let loggerPath = normLoggerFolderPath(process.env.LOGGER_FOLDER);
            console.log('[logger path]', loggerPath);
            loggerPath = await manageLoggerFolder(loggerPath);
            let loggerFileName = `${process.pid}_${crypto.randomUUID()}`;
            loggerPath = path.normalize(path.join(loggerPath, loggerFileName));
            console.log('[result path]', loggerPath);
            return loggerPath;
       }
    } catch (error_) {
        console.error("Error checking logger space tryng again..", error_);
        logger = false;
        return "";
    } finally {
    }
}

function normLoggerFolderPath(folder) {
    try {
        let result = path.normalize(path.join(folder, appName));
        console.debug('[Normalized Logger Folder]', result);
        return result;
    } catch (error_) {
        let message = `We canno't normalize logger folder, now the logger only use std.`;
        console.error(`[${message}]`);
        throw new Error(message);
    }
}

async function manageLoggerFolder(folder) {
    try {
        if (accessToLoggerFolder(folder)) {
            let dayLoggerFolder = `${new Date().toISOString().split("T")[0]}`;
            dayLoggerFolder = path.
                normalize(path.join(folder, dayLoggerFolder));
            accessToLoggerFolder(dayLoggerFolder);
            folder = dayLoggerFolder;
            return folder;
        }
    } catch (error_) {
        console.error('[Error managing loggger folder]', error_);
        let message = `Logger cannot administrate file system.`;
        throw new Error(message);
    }
}

async function accessToLoggerFolder(folder) {
    try {
        await fs.access(folder);
        return true;
    } catch (error_) {
        let message = `Cannot access to logger folder.`;
        if (error_.code == "ENOENT") {
            console.debug("[Logger folder doesnt exist.]");
            console.debug("[now the aplication try to creates them.]");
            try {
                await createLoggerFolder(folder);
                return true;
            } catch (error_) {
                throw new Error(message);
            }
        }
        console.error(`[${message}]`);
        throw new Error(message);
    } 
}

async function createLoggerFolder(folder) {
    try {
        await fs.mkdir(folder);
    } catch (error_) {
        let message = `Cannot create logger folder.`;
        console.error(`[${message}]`);
        throw new Error(message);
    }
}


module.exports = {
    initLogger
};
