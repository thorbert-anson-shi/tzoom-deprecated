const apiService = {
    get: async (number: number) => {
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=" + number);

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    }
}

export default apiService;