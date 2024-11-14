const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const process = require('process');

const git = simpleGit(path.resolve(__dirname, './')); 

const remoteUrl = 'https://github.com/username/yourRepo';  // 替换为你的仓库地址

async function pushImage(imagePath, commitMessage = 'Add new image') {
  try {
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image file does not exist at path: ${imagePath}`);
    }

    const imageName = path.basename(imagePath);
    await git.add(imagePath);
    console.log(`Added ${imageName} to git`);

    await git.commit(commitMessage);
    console.log(`Committed ${imageName}`);

    await git.push('origin', 'main');  
    console.log(`Pushed ${imageName} to GitHub`);

    // 返回图片的 GitHub 地址,默认为jsdeliver进行免费CDN加速
    const imageUrl = `https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/${imageName}`;
    return imageUrl;

  } catch (error) {
    console.error('Error pushing image:', error);
  }
}

const args = process.argv.slice(2);
const imagePath = args[0]; 
const commitMessage = args[1] || 'Add new image';  // 第二个参数为提交信息（可选）

if (imagePath) {
  pushImage(imagePath, commitMessage)
    .then((imageUrl) => {
      console.log('New image URL:', imageUrl);
    })
    .catch((err) => {
      console.error('Error:', err);
    });
} else {
  console.log('Please provide an image path as the first argument.');
}
