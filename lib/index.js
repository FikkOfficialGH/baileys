import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
 _____ ___ _  ___  __ ___  _____ _____ ___ ____ ___    _    _     
|  ___|_ _| |/ / |/ // _ \|  ___|  ___|_ _/ ___|_ _|  / \  | |    
| |_   | || ' /| ' /| | | | |_  | |_   | | |    | |  / _ \ | |    
|  _|  | || . \| . \| |_| |  _| |  _|  | | |___ | | / ___ \| |___ 
|_|   |___|_|\_\_|\_\\___/|_|   |_|   |___\____|___/_/   \_\_____|
`));
console.log(chalk.hex("#00c2ff")("FikkOfficial — a Baileys-based WhatsApp Web library\n"));
console.log(chalk.gray("Stay updated with the latest FikkOfficiall & Baileys news:"));
console.log(chalk.cyan("https://t.me/NullXCH\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
