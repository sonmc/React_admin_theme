export const StatusCode = {
    NotFound: 404,
    Forbidden: 403,
    BadRequest: 400,
    ServerError: 500,
    UnAuthorized: 401,
    Success: 200,
    Error: 'error'
};

export const API_TIMEOUT = 100000;

export const baseURL = process.env.REACT_APP_BASE_URL;

export const END_POINT_API = {
    AUTH: '/auth'
};
