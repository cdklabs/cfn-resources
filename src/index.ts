import { readFileSync } from 'fs';

/**
 * Returns a list of resource types and logical IDs from a CloudFormation
 * template (sorted by type).
 *
 * @param template The template JSON
 */
export function getResources(template: Template) {
  const types = new Array<[string, string]>();
  let width = 0;
  for (const [logical, resource] of Object.entries(template.Resources ?? {})) {
    const type = resource.Type;
    types.push([type, logical]);
    if (type.length > width) {
      width = type.length;
    }
  }
  const lines = new Array<string>();
  const sorted = types.sort((l, r) => l[0].localeCompare(r[0]));
  for (const [type, logical] of sorted) {
    lines.push(`${type.padEnd(width)} ${logical}`);
  }
  return lines;
}

/**
 * Returns a list of resource types and logical IDs from a CloudFormation
 * template (sorted by type).
 *
 * @param templateFile The file path
 */
export function getResourcesFromFile(templateFile: string) {
  return getResources(JSON.parse(readFileSync(templateFile, 'utf-8')));
}

export interface Resource {
  readonly Type: string;
  readonly Properties?: { [name: string]: any };
}

export interface Template {
  readonly Resources?: { [logical: string]: Resource };
}
