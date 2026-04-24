/**
 * Penalty testing module — Static analysis TypeScript (Oxlint).
 *
 * Base score: 100 pts (zero violations with -D all rules).
 *
 * Instructions:
 *   1. Run the analysis on this file as-is to get score 100.
 *   2. Uncomment ONE block at a time.
 *   3. Re-run and observe the penalty in the score.
 *   4. Re-comment before testing the next block.
 */

import { existsSync } from 'node:fs';

const VERSION = '1.0';

/**
 * Returns the sum of two numbers.
 */
export const calculateSum = (
  firstValue: number,
  secondValue: number,
): number => firstValue + secondValue;

/**
 * Returns the application version string.
 */
export const getVersion = (): string => VERSION;

/**
 * Checks whether a file exists at the given path.
 */
export const fileExists = (filePath: string): boolean =>
  existsSync(filePath);

// =============================================================================
// TIPO 1 | PARSEO / SINTAXIS | Regla: no-debugger | Penalización: -5 pts c/u
// Descripción: Sentencia debugger encontrada en código de producción.
//              Oxlint la marca como error de corrección crítica.
// Acción   : Descomentar el bloque de código entre los marcadores.
// Esperado : 100 - 5 = 95 pts  (1 violación × -5 pts)
// =============================================================================
/* eslint-disable capitalized-comments */
 export const debugExample = (): void => {
   debugger;
 };
/* eslint-enable capitalized-comments */

// =============================================================================
// TIPO 2 | TIPADO INSEGURO | Regla: no-explicit-any | Penalización: -2 pts c/u
// Descripción: Uso explícito del tipo 'any' en parámetro y retorno.
// Acción   : Descomentar la línea de código entre los marcadores.
// Esperado : 100 - 4 = 96 pts  (2 violaciones × -2 pts)
// =============================================================================
/* eslint-disable capitalized-comments */
 export const processAny = (inputValue: any): any => inputValue;
/* eslint-enable capitalized-comments */

// =============================================================================
// TIPO 3 | LÓGICA / VARIABLES | Regla: no-unused-vars | Penalización: -2 pts c/u
// Descripción: Variable local declarada pero cuyo valor nunca se utiliza.
// Acción   : Descomentar el bloque de código entre los marcadores.
// Esperado : 100 - 2 = 98 pts  (1 violación × -2 pts)
// =============================================================================
/* eslint-disable capitalized-comments */
// export const unusedVarDemo = (): string => {
//   const deadLabel = getVersion();
//   return VERSION;
// };
/* eslint-enable capitalized-comments */

// =============================================================================
// TIPO 4 | ESTILO / FORMATO | Regla: no-magic-numbers | Penalización: -0.5 pts c/u
// Descripción: Literales numéricos sin constante nombrada (números mágicos).
// Acción   : Descomentar el bloque de código entre los marcadores.
// Esperado : 100 - 1.5 = 98.5 pts  (3 violaciones × -0.5 pts: 100, 50, 2)
// =============================================================================
/* eslint-disable capitalized-comments */
// export const magicNumbersDemo = (value: number): number =>
//   value > 100 ? value + 50 : value * 2;
/* eslint-enable capitalized-comments */

export { VERSION };
