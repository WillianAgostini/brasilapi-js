"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByV1 = void 0;
exports.getByV2 = void 0;
const api_service_1 = require("../service/api.service");
const format_1 = require("../utils/format");
const endpointV1 = "/cep/v1/";
const endpointV2 = "/cep/v2/";
const getByV1 = (cep) => {
    return (0, api_service_1.get)(endpointV1 + (0, format_1.onlyNumbers)(cep));
};
const getByV2 = (cep) => {
    return (0, api_service_1.get)(endpointV2 + (0, format_1.onlyNumbers)(cep));
};
exports.getByV1 = getByV1;
exports.getByV2 = getByV2;
