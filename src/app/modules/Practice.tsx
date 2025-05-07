const Practice = () => {
    // init obj
    const checkObjItem = {
        name: "Practice",
        year: 2025,
        "has-name": 'Hello'
    }

    // rename crazy obj
    const {
        "has-name": hasNameValue,
        name: Name
    } = checkObjItem;

    // debug
    console.log(Name, hasNameValue, '==hasNameValue=Name==');

    // 1 check item in obj has or not
    const hasName = checkObjItem.hasOwnProperty("name"); // true
    const hasYear = checkObjItem.hasOwnProperty("year"); // true

    // 2
    const hasName2 = ("name") in checkObjItem; // true
    const hasYear2 = ("year") in checkObjItem; // true

    // 3
    const hasName3 = checkObjItem.name !== undefined; // true
    const hasYear3 = checkObjItem.year !== undefined; // true

    // debug
    console.log(hasName3, '====');



    // how to create obj in js



    return <div className="h-screen w-full justify-center text-center py-20">
        <h1 className="text-2xl">Check Item in Obj</h1>
        #1
        {hasName ? <p>Name existing.</p> : <p>Name is not existing!</p> }
        {hasYear ? <p>Year existing.</p> : <p>Year is not existing!</p> }

        #2
        {hasName2 ? <p>Name existing.</p> : <p>Name is not existing!</p> }
        {hasYear2 ? <p>Year existing.</p> : <p>Year is not existing!</p> }

        #3
        {hasName3 ? <p>Name existing.</p> : <p>Name is not existing!</p> }
        {hasYear3 ? <p>Year existing.</p> : <p>Year is not existing!</p> }
    </div>
}

export default Practice;