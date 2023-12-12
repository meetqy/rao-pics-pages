---
publishDate: 2023-12-12
title: 使用 RaoPics 在手机上访问 Eagle App 中的素材
category: 入门
tags:
  - rao.pics
  - eagle app
  - v1.0.0-alpha.11
excerpt: 只需两步，快速远程访问 Eagle 中的素材。
metadata:
  canonical: https://rao.pics/shi3-yong4-raopics-zai4-shou3-ji1-shang4-fang3-wen4-eagleapp-zhong1-de-su4-cai2
---

## 第一步：下载应用程序并安装

访问 [github release](https://github.com/meetqy/rao-pics/releases/latest) 下载您对应系统的软件，MacOS M1、MacOS Inter、Windows 64位。

**Windows**

应用为快捷安装，双击下载好的应用即可。

**MacOS**

安装后无法打开，报错不受信任或者移到垃圾箱，可执行下面命令后，重新启动

```sh
sudo xattr -d com.apple.quarantine /Applications/Rao\ Pics.app
```

## 第二步：添加资源库并访问

1. **选择 Eagle App 资源库**

如果找不到资源库路径，可参考下图：

![Eagle App 资源库路径](/blog/1.jpg)

添加成功，如下图：

![资源库添加成功](/blog/2.jpg)

> 标记1：当前资源库所有资源

2. **点击同步按钮，开始同步资源，建立索引**

此同步只是将 eagle 资源库建立一个索引，**不会上传你任何资源，不用担心**

3. **点击预览后面的链接，开始访问你的素材吧。**

同步成功，如下图：

![同步成功，可以远程访问Eagle素材了](/blog/3.jpg)

如果手机访问，则可以将鼠标移到链接上，会显示二维码，扫描二维码即可访问。
