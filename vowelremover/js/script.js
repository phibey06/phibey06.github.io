for(i = 0; i <= 1; i++) {

    const str = prompt("skriv her")
    const noVowels = str.replace(/[aeiouy]/gi, '');
    console.log(noVowels);
}