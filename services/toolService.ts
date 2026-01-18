
import { Tool, ToolCategory } from '../types';
import { TOOLS as STATIC_TOOLS } from '../constants';

/**
 * Since the user doesn't have a formal API, we'll try to fetch a static 
 * 'tools.json' file from the website. 
 * If you upload a file named 'tools.json' to your website root with the 
 * list of tools, this app will sync automatically.
 */
const TOOLS_JSON_URL = 'https://www.toolsbd.top/tools.json';

export const fetchToolsFromWebsite = async (): Promise<Tool[]> => {
  try {
    const response = await fetch(TOOLS_JSON_URL);
    if (!response.ok) throw new Error('No tools.json found on site');
    const data = await response.json();
    return data as Tool[];
  } catch (error) {
    console.log("Using built-in tools list. To sync, add 'tools.json' to your website.");
    // Return our local list which mirrors the website's structure
    return new Promise((resolve) => {
      setTimeout(() => resolve(STATIC_TOOLS), 500);
    });
  }
};
