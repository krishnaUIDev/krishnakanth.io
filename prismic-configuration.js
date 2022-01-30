import Link from "next/link";
import * as prismic from "@prismicio/client";

import smConfig from "./sm.json";

export const apiEndpoint = smConfig.apiEndpoint;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "4e65fe36c8c9bfa3848e957a9d087dc7";

const endpoint = prismic.getEndpoint(apiEndpoint);
// export const client = prismic.createClient(endpoint);

export const Client = (req = null, options = {}) =>
  prismic.createClient(endpoint, Object.assign(options, { accessToken }));
