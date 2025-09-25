import fs from 'fs';

export function readData<T extends any[]>(pathFile: string): T {
    try {
        const dataList = fs.readFileSync(pathFile, 'utf-8');
        if (!dataList) return [] as T;
        return JSON.parse(dataList) as T;
    } catch (err) {
        return [] as T;
    }
};

export function writeData<T>(pathFile: string, data: T) {
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
}