import fs from 'fs';

export function readData(pathFile) {
    try {
        const dataList = fs.readFileSync(pathFile, 'utf-8');
        if (!dataList) return [];
        return JSON.parse(dataList);
    } catch (err) {
        return [];
    }
};

export function writeData(pathFile, data) {
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
}