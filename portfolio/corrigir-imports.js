// corrigir-imports.js
import fs from "fs";
import path from "path";

// Pasta raiz do seu projeto
const SRC_DIR = path.resolve("./src");

function getAllFiles(dir, ext, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, ext, files);
    } else if (ext.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const importRegex = /import\s+[\s\S]+?\s+from\s+["'](.+?)["'];?/g;

  let updated = content.replace(importRegex, (match, importPath) => {
    if (importPath.startsWith(".")) {
      const resolvedPath = path.resolve(path.dirname(filePath), importPath);
      const dir = path.dirname(resolvedPath);
      const fileName = path.basename(resolvedPath);

      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        const correctFile = files.find(f => f.toLowerCase() === fileName.toLowerCase());
        if (correctFile && correctFile !== fileName) {
          const newImportPath = path.join(path.dirname(importPath), correctFile).replace(/\\/g, "/");
          return match.replace(importPath, newImportPath);
        }
      }
    }
    return match;
  });

  fs.writeFileSync(filePath, updated, "utf-8");
}

// Processa todos os arquivos TS/TSX
const allFiles = getAllFiles(SRC_DIR, [".ts", ".tsx"]);
allFiles.forEach(fixImports);

console.log("Imports corrigidos com case-sensitive!");
