---
publishDate: 2023-12-12
title: 使用 RaoPics 远程访问 Eagle App 中的素材
category: 入门
tags:
  - rao.pics
  - eagle app
  - v1.0.0-alpha.11
excerpt: 只需两步，快速远程访问 Eagle 中的素材。
metadata:
  canonical: https://rao.pics/shi3-yong4-raopics-yuan3-cheng2-fang3-wen4-eagleapp-zhong1-de-su4-cai2
---

## 第一步：下载并安装应用程序

访问 [github release](https://github.com/meetqy/rao-pics/releases/latest) 下载适用于您的操作系统的软件，包括MacOS M1、MacOS Intel和Windows 64位版本。

**Windows**

这是一个快速安装程序，只需双击下载的应用程序即可完成安装。

**MacOS**

如果在安装后无法打开应用程序，并出现不受信任的错误或移动到垃圾箱，请执行以下命令，然后重新启动：

```sh
sudo xattr -d com.apple.quarantine /Applications/Rao\ Pics.app
```

## 第二步：添加资源库并进行访问

1. **选择Eagle App资源库**

如果您无法找到资源库路径，请参考下图：

![Eagle App资源库路径](/blog/1.jpg)

添加成功后，如下图所示：

![资源库添加成功](/blog/2.jpg)

> 标记1：当前资源库的所有资源

2. **点击同步按钮，开始同步资源并建立索引**

此同步操作只是对Eagle资源库建立索引，**不会上传您的任何资源，无需担心**

3. **点击预览链接，并开始访问您的素材**

同步成功后，可以看到以下图像：

![同步成功，可以远程访问Eagle素材](/blog/3.jpg)

如果您要使用手机访问素材，请将鼠标悬停在链接上，会显示一个二维码，可以使用手机扫描二维码进行访问。
