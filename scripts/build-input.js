
const fs = require("fs");
const path = require("path");

const contractsDir = path.join(__dirname, "..", "contracts");
const buildDir = path.join(__dirname, "..", "build");
const inputFile = path.join(buildDir, "input.json");

function collectSolidityFiles(directory) {
    let files = [];

    for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
        const fullPath = path.join(directory, item.name);

        if (item.isDirectory()) {
            files = files.concat(collectSolidityFiles(fullPath));
        } else if (item.isFile() && item.name.endsWith(".sol")) {
            files.push(fullPath);
        }
    }

    return files;
}

if (!fs.existsSync(contractsDir)) {
    throw new Error("contracts folder not found");
}

fs.mkdirSync(buildDir, { recursive: true });

const solidityFiles = collectSolidityFiles(contractsDir);
const sources = {};

for (const file of solidityFiles) {
    const relativePath = path.relative(
        path.join(__dirname, ".."),
        file
    ).replace(/\\/g, "/");

    sources[relativePath] = {
        content: fs.readFileSync(file, "utf8")
    };
}

if (solidityFiles.length === 0) {
    throw new Error("No Solidity files found in contracts folder");
}

const input = {
    language: "Solidity",
    sources,
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        },
        outputSelection: {
            "*": {
                "*": [
                    "abi",
                    "evm.bytecode.object",
                    "evm.deployedBytecode.object"
                ]
            }
        }
    }
};

fs.writeFileSync(inputFile, JSON.stringify(input, null, 2));

console.log(`Generated ${inputFile}`);
console.log(`Solidity files included: ${solidityFiles.length}`);
