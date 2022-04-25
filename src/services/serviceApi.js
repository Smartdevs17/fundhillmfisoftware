import axios from "axios";


const axiosClient = axios.create();
const isDev = process.env.NODE_ENV === "development";

class ServiceApi {
  url = "";

  // SELECT BASE URL VERSION
  service() {
    axiosClient.defaults.baseURL = isDev
      ? process.env.REACT_APP_BASE_DEV_URL
      : process.env.REACT_APP_BASE_PROD_URL;
    return this;
  }

  // APPEND URL TO API URL
  appendToURL(url) {
    return (`${this.url}${url}`);
  }

  // GET API REQUEST
  async fetch(url, resolve = false) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return !resolve 
        ? response 
        : {...response};
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(url, payload = null, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached)
      );

      return !resolve 
        ? response 
        : {...response};
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // PUT API REQUEST
  async update(url, payload = {}, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.put(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached),
      );

      return !resolve 
        ? response 
        : {...response};
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url, payload = {}, resolve = true) {
    try {
      const response = await axiosClient.delete(
        this.appendToURL(url),
        {
          data: payload,
          ...this.setupHeaders(),
        }
      );

      return !resolve 
        ? response 
        : {...response};
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
  setupHeaders(is_attached = false) {
    return is_attached
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${'token'}`
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${'token'}`
          },
        };
  }

  // HANDLE API REQUEST ERRORS
  handleErrors(err) {
    // Alert an error message
    console.error('API ERROR:', err);
    return err?.response;
  }
}

export default ServiceApi;
