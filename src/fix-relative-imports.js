const fs = require('fs');
const path = require('path');

// Walk directory recursively
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const pathMap = {
  'utils/api': 'src/shared/utils/api',
  'utils/api.js': 'src/shared/utils/api',
  'utils/auth': 'src/shared/utils/auth',
  'utils/auth.js': 'src/shared/utils/auth',
  'config/api.config': 'src/shared/constants/api.config',
  'config/api.config.js': 'src/shared/constants/api.config',
  'services/emailService': 'src/shared/services/emailService',
  'services/emailService.js': 'src/shared/services/emailService',
  'Layout/Breadcrump': 'src/shared/components/Breadcrump',
  'Layout/Breadcrump.jsx': 'src/shared/components/Breadcrump',
  'recruiterDashboard/RecruiterDashboardLayout': 'src/app/layouts/RecruiterDashboardLayout',
  'recruiterDashboard/RecruiterDashboardLayout.jsx': 'src/app/layouts/RecruiterDashboardLayout',
  'components/Settings': 'src/shared/components/Settings',
  'components/Settings.jsx': 'src/shared/components/Settings',
  'components/ChatBot': 'src/shared/components/ChatBot',
  'components/ChatBot.jsx': 'src/shared/components/ChatBot',
  'common/DashboardLayoutBase': 'src/shared/components/DashboardLayoutBase',
  'common/DashboardLayoutBase.jsx': 'src/shared/components/DashboardLayoutBase'
};

walkDir('src', (filePath) => {
  if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileDir = path.dirname(filePath);
  
  // Regex to match imports, from, and require
  let regex = /(from|import|require\()\s*['"]([^'"]+)['"]/g;
  
  content = content.replace(regex, (match, prefix, importPath) => {
    // Check if the import path matches any of our keys
    for (const [key, dest] of Object.entries(pathMap)) {
      if (importPath === key || importPath.endsWith('/' + key)) {
        // Compute correct relative path from fileDir to dest
        let relativePath = path.relative(fileDir, dest);
        relativePath = relativePath.replace(/\\/g, '/');
        
        if (!relativePath.startsWith('.')) {
          relativePath = './' + relativePath;
        }
        
        if (prefix === 'require(') {
          return `require('${relativePath}')`;
        } else {
          return `${prefix} "${relativePath}"`;
        }
      }
    }
    return match; // Return unchanged if no match
  });

  // Specific fix for AptitudeTest in App.jsx
  if (filePath.endsWith('App.jsx')) {
    content = content.replace(
      /from ["']\.\/modules\/ai-recruitment\/assessments\/AptitudeTest["']/g,
      'from "./modules/ai-recruitment/assessments/aptitude/AptitudeTest"'
    );
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in: ${filePath}`);
  }
});

console.log('Relative imports check complete.');
