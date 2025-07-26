import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ["@syncfusion/ej2-base", "@syncfusion/ej2-react-buttons", "@syncfusion/ej2-react-charts", "@syncfusion/ej2-react-dropdowns", "@syncfusion/ej2-react-grids", "@syncfusion/ej2-react-maps", "@syncfusion/ej2-react-navigations", "@syncfusion/ej2-react-splitbuttons", "@syncfusion/ej2-react-dropdowns"],
  }
});
