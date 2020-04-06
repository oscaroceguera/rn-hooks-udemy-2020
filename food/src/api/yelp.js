import axios from 'axios'

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer N5lItSW6sikUmLzM0eP6LGWu-sNuMMcPJeQllBzmflcg7JPt0_dY9X_X-rkY86xYkF84Bd4Qyd_oBQYJ6RdnJuB4J8No8tpBIjsrTShL2Ase_zovuot1X-RVSUmKXnYx",
  },
});
