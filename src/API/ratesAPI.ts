import ratesAPI from "./createInstance"
import { goTo } from "route-history";

const api = {
    setRates: (currencyId, startDate, endDate) => {
        return ratesAPI.get(`rates/dynamics/${currencyId}?startDate=${startDate}&endDate=${endDate}`)
            .then((response) => response.data)
            .catch((error) => {
                goTo('/pageError')
            })
    },
}

export default api;


