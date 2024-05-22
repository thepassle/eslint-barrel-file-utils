import { 
  countModuleGraphSizeRs as count_module_graph_size_rs, 
  isBarrelFileRs as is_barrel_file, 
  resolveRs as resolve_rs
} from './rs.cjs';
import { builtinModules } from "module";

/**
 * @param {string} importer - the file that is importing the module
 * @param {string} importee - the module being imported
 * @param {{
 *  mainFields?: string[],
 *  exportConditions?: string[],
 * }} [options]
 * @returns {string} the resolved path to the module
 */
export function resolve(importer, importee, options) {
  const mainFields = options?.mainFields || ["module", "browser", "main"];
  const exportConditions = options?.exportConditions || ["node", "import"];

  return resolve_rs(importer, importee, exportConditions, mainFields);
}

/**
 * @param {string[]} entrypoints 
 * @param {{
 *  basePath?: string,
 *  exportConditions?: string[],
 *  mainFields?: string[],
 * }} [options]
 * @returns {number}
 */
export function count_module_graph_size(entrypoints, options = {}) {
  const {
    basePath = process.cwd(),
    exportConditions = ["node", "import"],
    mainFields = ["module", "browser", "main"],
  } = options;

  const processedEntrypoints = (typeof entrypoints === "string" ? [entrypoints] : entrypoints);
  const result = count_module_graph_size_rs(
    processedEntrypoints, 
    basePath, 
    exportConditions, 
    mainFields,
    builtinModules
  );
  return result;
}

export { is_barrel_file };
