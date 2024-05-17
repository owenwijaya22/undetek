export async function getPass(req, res) {
    try {
        const url = `${process.env.API_URL}?_=${new Date().getTime()}`;

        const options = {
            method: "GET",
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
                "sec-ch-ua":
                    '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                "sec-ch-ua-arch": '"x86"',
                "sec-ch-ua-bitness": '"64"',
                "sec-ch-ua-full-version": '"124.0.6367.158"',
                "sec-ch-ua-full-version-list":
                    '"Chromium";v="124.0.6367.158", "Google Chrome";v="124.0.6367.158", "Not-A.Brand";v="99.0.0.0"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": '""',
                "sec-ch-ua-platform": '"Windows"',
                "sec-ch-ua-platform-version": '"15.0.0"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                Referer: "https://darkaim.com/free-cs2-cheats/",
                "Referrer-Policy": "no-referrer-when-downgrade",
            },
        };
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Internal Server Error.` });
    }
}
