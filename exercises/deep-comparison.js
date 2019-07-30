function deepEqual(a, b){
    if(a === b) return true;

    if(a == null || typeof a!= "object" ||
       b  == nul || typeof b!= "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.lenght != keysB.length) return false;

    for (let key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true
};