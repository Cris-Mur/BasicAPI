console.log('[Loading locals]');

let locals_ojb = {};

Object.keys(process.env).forEach(
    env_var => {
        const rex = /locals/i
        if (rex.test(env_var)) {
            console.log(env_var);
            if (env_var === 'LOCALS' && process.env[env_var].length > 1) {
                let locals_arr = process.env[env_var].split(';');
                locals_arr.forEach(
                    locals_var => {
                        let [key, value] = locals_var.split(':');
                        if (key.length > 1 && value !== undefined)
                            locals_ojb[key] = value;
                    }
                )

            } else {
                let key_ = env_var.split('LOCALS_')[1];
                locals_ojb[key_] = process.env[env_var].split('LOCALS_')[1];
            }
        }
    }
)

console.log('[obj]', locals_ojb);

module.exports = {
    locals : locals_ojb
}