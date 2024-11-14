## 一键部署github图床
确保已安装node环境  [Node.js](https://nodejs.org/en)

新建github仓库，

clone本项目😘
``
git clone git@github.com:Labmem-00/Git-Img.git
``

命令行输入安装依赖🤗
``
npm i
``

配置pushImage.js文件，在remoteUrl中填入你的仓库地址😀

在当前目录放入图片吧，输入推送命令😋
``
npm run pi 图片路径 推送信息(可选)
``

推送成功将自动返回一个url地址，可以直接访问你的图片啦😍

## 使用jsdelivr免费CDN加速
URL前缀https://cdn.jsdelivr.net/gh/username/repo@main/

