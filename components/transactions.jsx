import axios from "axios";

const fetchData = async () => {
    const config = {
        headers: {
            "x-hasura-admin-secret": "zx3hIgVhT3hiXeGTd5N17yeq1Tz9P3gsr2sWrewie7bPlnADM80JCBg10QV6wmek",
        },
    };

    const response = await axios.get("https://zed-kirran-test.hasura.app/api/rest/transactions", config);
    return response.data;
};

export default fetchData;

