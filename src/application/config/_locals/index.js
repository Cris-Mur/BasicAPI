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
                handleLocalVar(env_var);
            }
        }
    }
)

function handleLocalVar(key) {
    let result = {};
    const rex = /locals/i
    let split_name = key.split('LOCALS_')[1];
    let raw_value = process.env[key];
    if (rex.test(raw_value)) {
        raw_value = raw_value.split('LOCALS_')[1];
    }
    result[split_name] = raw_value;
    return result;
}

function splitLocals (locals) {
    let local_ = {};
    let splited_locals = locals.split(';');
    for (let local of splited_locals) {
        let [key, value] = local.split(':');
        if (key.length > 1 && value.length > 1) {
            local_[key] = value;
        }
    }
    return local_;
}

console.log('[obj]', locals_ojb);

module.exports = {
    locals : locals_ojb
}