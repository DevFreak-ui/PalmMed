"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
function validateData(schema, data) {
    for (const key in schema) {
        if (schema.hasOwnProperty(key)) {
            if (schema[key].allowNull === false && data[key] == null) {
                return false;
            }
        }
    }
    return true;
}
exports.validateData = validateData;
