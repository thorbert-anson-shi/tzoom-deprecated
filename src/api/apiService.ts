const apiService = {
    get: async (number: number) => {
        let res = await fetch("https://random-word-api.herokuapp.com/word?number=" + number);
        return await res.json();
    }
}

export default apiService;