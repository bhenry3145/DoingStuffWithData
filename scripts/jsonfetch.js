const getData = async () => {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    return data.People;
}

export { getData };