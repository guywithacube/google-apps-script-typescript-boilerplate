import {doGet, doPost} from './http-handlers';

(global as any).helloWorld = () => {
  console.log('Hello world!');
  return 'Hello world!';
};

// Deploy the script as web app to utilize doGet and doPost
// https://developers.google.com/apps-script/guides/web
(global as any).doGet = doGet;
(global as any).doPost = doPost;
