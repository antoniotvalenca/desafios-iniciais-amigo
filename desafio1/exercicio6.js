function page(totalItems, itemsEachPage){
    const pagesSize = Math.ceil(totalItems/itemsEachPage);

    let pages = '';

    for(let i = 1; i <= pagesSize; i++){
        pages += `<li>Página ${i}</li>`;
    }

    return pages;
}

function page2(totalItems, itemsEachPage){
    const pagesSize = Math.ceil(totalItems/itemsEachPage);
    const pages = [];

    for(let i = 0; i<=pagesSize; i++){
        pages[i] = `<li>Página ${i}</li>`;
    }

    for(let i = 0; i<pages.length; i++){
        console.log(pages[i]);
    }
}

console.log(page(15, 2)) // retorna as páginas (em uma linha só)
page2(15, 2) // printa as páginas (uma por linha)