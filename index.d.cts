export function resolve(
  importer: string,
  importee: string,
  options?: Partial<{
    mainFields: string[];
    exportConditions: string[];
    extensions: string[];
  }>
): string;
export function count_module_graph_size(
  entryPoints: string[] | string,
  options?: Partial<{
    basePath: string;
    exportConditions: string[];
    mainFields: string[];
    extensions: string[];
    alias?: Array<[string, string | null | undefined]> | Record<string, Array<string | null | undefined>>;
  }>
): number;
export function is_barrel_file(
  source: string,
  amountOfExportsToConsiderModuleAsBarrel: number
): boolean
