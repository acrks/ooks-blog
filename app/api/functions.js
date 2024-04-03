import { headers } from 'next/headers';

export const getDomain = () => {
    const env = process.env.NODE_ENV
    let host = "";
    if(env === 'production') {
        // Add production url when available
    } else if (env === 'development') {
        const headersList = headers();
        host = headersList.get('host');
    } else {
        return 'Unable to determine env';
    }
    const string = `http://${host}`;
    return string;
}

export const getDate = (dateToConvert) => {
    const dateObj = new Date(dateToConvert)
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    return `${month}/${date}/${year}`;
  }