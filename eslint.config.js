import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["./src/*.ts"], ignores: ["**/*.min.*"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.builtin }
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];