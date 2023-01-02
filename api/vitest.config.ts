import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    include: ['./src/modules/**/__test__/*.{js,ts}']
  },
});
