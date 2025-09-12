import fs from "fs";
import path from "path";

const projectDir = path.resolve("./src");

// Função para padronizar nomes de arquivos (case-sensitive)
function fixImports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixImports(fullPath);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      const importRegex = /import\s+.*?\s+from\s+["'](.*?)["']/g;
      let modified = false;

      let match;
      while ((match = importRegex.exec(content)) !== null) {
        let importPath = match[1];

        // Só corrige imports relativos
        if (importPath.startsWith(".") || importPath.startsWith("/")) {
          let resolvedPath = path.join(path.dirname(fullPath), importPath);

          // Tenta com .ts e .tsx
          let correctPath = "";
          if (fs.existsSync(resolvedPath + ".ts")) correctPath = resolvedPath + ".ts";
          else if (fs.existsSync(resolvedPath + ".tsx")) correctPath = resolvedPath + ".tsx";

          if (correctPath) {
            // Corrige case no import
            const actualFileName = path.basename(correctPath);
            const importParts = importPath.split("/");
            if (importParts[importParts.length - 1] !== actualFileName.replace(/\.(ts|tsx)$/, "")) {
              importParts[importParts.length - 1] = actualFileName.replace(/\.(ts|tsx)$/, "");
              const newImport = importParts.join("/");
              content = content.replace(importPath, newImport);
              modified = true;
              console.log(`🔧 Corrigido import: ${importPath} → ${newImport} em ${fullPath}`);
            }
          }
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, "utf-8");
      }
    }
  });
}

fixImports(projectDir);
console.log("✅ Todos os imports corrigidos!");
