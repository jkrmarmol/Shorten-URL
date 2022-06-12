const shortenUrl = async () => {
    const data = JSON.stringify({"destination": "https://google.com"})
    try {
        const response = await fetch('https://api.rebrandly.com/v1/links', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'apikey': '7aa68aa76fde459c913ac9cefb51a6ad'
            },
            body: data
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const removeQuote = JSON.stringify(jsonResponse.shortUrl).replace(/(^"|"$)/g, '')
            document.getElementById('responseField').innerHTML = removeQuote;
        }
    } catch (err) {
        console.log(err)
    }
}