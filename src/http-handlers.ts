// Deploy the script as web app to utilize doGet and doPost
// https://developers.google.com/apps-script/guides/web

interface WebAppRequest {
  queryString: string | null;
  parameter: { [key: string]: string };
  parameters: { [key: string]: string[] };
  contentLength: number;
  postData: {
    length: number,
    type: string,
    contents: string,
    name: string,
  } | null;
}

/**
 * Web app HTTP GET handler
 * @param {WebAppRequest} e - The event object of the GET request
 * @return {GoogleAppsScript.Content.TextOutput} Text output response object
 */
export function doGet(e: WebAppRequest): GoogleAppsScript.Content.TextOutput {
  const response = ContentService.createTextOutput();
  response.setContent(JSON.stringify(e, null, 2));
  response.setMimeType(ContentService.MimeType.JSON);

  return response;
}

/**
 * Web app HTTP POST handler
 * @param {WebAppRequest} e - The event object of the POST request
 * @return {GoogleAppsScript.Content.TextOutput} Text output response object
 */
export function doPost(e: WebAppRequest): GoogleAppsScript.Content.TextOutput {
  const response = ContentService.createTextOutput();
  response.setContent(JSON.stringify(e, null, 2));
  response.setMimeType(ContentService.MimeType.JSON);

  return response;
}
