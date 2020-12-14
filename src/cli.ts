#!/usr/bin/env node
import { getResourcesFromFile } from '.';
const templateFile = process.argv[2] ?? '/dev/stdin';
getResourcesFromFile(templateFile).forEach(line => console.log(line));
