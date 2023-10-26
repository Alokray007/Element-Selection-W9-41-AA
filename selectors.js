const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seeded = document.getElementsByClassName("seed");
    for (const seed of seeded) {
        console.log(seed.innerHTML);
    }

    // 2. Get all seedless fruit elements
    const seedless = document.getElementsByClassName("seedless");
    for (const elem of seedless) {
        console.log(elem.innerHTML);
    }

    // 3. Get first seedless fruit element
    const firstSeedless = document.querySelector(".seedless");
    console.log(firstSeedless.innerHTML);

    /* Section 2 */
    // 4. Get inner span with text "you"
    const elem = document.getElementById("wrapper");
    const innerSpan = elem.querySelector("span");
    console.log(innerSpan.innerHTML);


    // 5. Get all children of element "wrapper"
    const childs = document.getElementById("wrapper");
    const children = Array.from(childs.children);
    console.log(children);

    // 6. Get all odd number list items in the list
    const oddNum = document.querySelectorAll(".odd");
    oddNum.forEach(num => console.log(num.innerHTML))

    // 7. Get all even number list items in the list
    const even = document.getElementById("two");
    const elemOne = even.querySelectorAll("li");
    const evenNum = Array.from(elemOne).filter((item, index) => index % 2 === 1);
    evenNum.forEach(item => console.log(item.innerHTML));

    /* Section 3 */
    // 8. Get all tech companies without a class name
    const elemTwo = document.getElementById("three");
    const withoutClass = Array.from(elemTwo.querySelectorAll('a:not([class])'));
    withoutClass.forEach(elem => console.log(elem.innerHTML));
    // 9. Get "Amazon" list element
    const amazonlist = document.querySelectorAll(".shopping");
    console.log(amazonlist);

    // 10. Get all unicorn list elements (not the image element)
    const allList = document.querySelectorAll(".unicorn");
    console.log(allList);
}

window.onload = select;
