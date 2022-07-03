import OpenAPIClientAxios, {OpenAPIV3} from 'openapi-client-axios';
import spec from './openapi.json'
import {Client, Components} from "./client";

const api = new OpenAPIClientAxios({definition: spec as OpenAPIV3.Document});
export const client = api.initSync<Client>();


