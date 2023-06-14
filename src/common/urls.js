const API_BASE_URL = "213.233.177.146:8001";

const urls = {
  auth: {
    register: () => `${API_BASE_URL}/user/register/`,
    login: () => `${API_BASE_URL}/user/login/`,
    logout: () => `${API_BASE_URL}/user/logout/`,
    profile: () => `${API_BASE_URL}/user/info/`,
  },
  wallet: {
    info: () => `${API_BASE_URL}/wallet/info/`,
  },
  project: {
    create: () => `${API_BASE_URL}/project/create/`,
    getUserProjects: () => `${API_BASE_URL}/project/my/`,
    fund: (id) => `${API_BASE_URL}/project/fund/${id}/`,
    // report: () => `${API_BASE_URL}/project/report/`,
    // upload: () => `${API_BASE_URL}/project/upload/`,
    release: (id) => `${API_BASE_URL}/project/release/${id}/`,
    cancel: (id) => `${API_BASE_URL}/project/cancel/${id}/`,
    transfer: () => `${API_BASE_URL}/project/transfer/`,
  },
  auction: {
    create: () => `${API_BASE_URL}/auction/create/`,
    market: () => `${API_BASE_URL}/auction/market/`,
    bid: () => `${API_BASE_URL}/auction/bid/`,
    myBid: (id) => `${API_BASE_URL}/auction/mybid/${id}/`,
    getBids: (id) => `${API_BASE_URL}/auction/bid/all/${id}/`,
    cancelBid: (id) => `${API_BASE_URL}/auction/bid/cancel/${id}/`,
    details: (id) => `${API_BASE_URL}/auction/details/${id}/`,
    likeAuction: (id) => `${API_BASE_URL}/auction/like/${id}/`,
    endAuction: (id) => `${API_BASE_URL}/auction/end/${id}/`,
    cancelAuction: (id) => `${API_BASE_URL}/auction/cancel/${id}/`,
  },
  sale: {
    getProjects: () => `${API_BASE_URL}/user/info/`,
    getProjectById: () => `${API_BASE_URL}/sale/projects/get`,
    getProjectToken: () => `${API_BASE_URL}/sale/projects/token`,
    buyToken: () => `${API_BASE_URL}/sale/participate`,
  },
  common: {
    getMyPortfolio: () => `${API_BASE_URL}/user/portfolio`,
    joinWaitlist: () => `${API_BASE_URL}/join`,
    image: (address) => `${API_BASE_URL}/${address}`,
  },
};

export default urls;
