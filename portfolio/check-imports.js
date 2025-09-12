import fs from "fs";
import path from "path";

const projectDir = path.resolve("./src");

function checkImports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkImports(fullPath);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const importRegex = /import\s+.*?\s+from\s+["'](.*?)["']/g;
      let match;

      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];

        if (importPath.startsWith(".") || importPath.startsWith("/")) {
          let resolvedPath = path.join(path.dirname(fullPath), importPath);
          if (!path.extname(resolvedPath)) resolvedPath += ".ts"; // tenta TS
          if (!fs.existsSync(resolvedPath)) {
            if (!fs.existsSync(resolvedPath + ".tsx")) {
              console.log(`⚠️  Import não encontrado: "${importPath}" em ${fullPath}`);
            }
          }
        }
      }
    }
  });
}

checkImports(projectDir);
console.log("✅ Verificação de imports finalizada.");
