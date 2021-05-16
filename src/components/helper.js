export const selectOg = ( cat, filter ) => {
    let result = [];
    let compare = filter.toLowerCase();
    cat.forEach(m => {
        if (m.name.toLowerCase().includes(compare) || m.kategria.toLowerCase().includes(compare) || m.plec.toLowerCase().includes(compare)) {
            result.push(m);
        } 
    });
    return result;
};