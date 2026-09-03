# 🎩 Garza OS - 下一代企业级 AI 应用创新引擎

<div align="center">

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
<!-- [![Docker Pulls](https://img.shields.io/docker/pulls/itsablabla/garza-team.svg)](https://hub.docker.com/r/itsablabla/garza-team)
[![GitHub stars](https://img.shields.io/github/stars/itsablabla/garza-team.svg?style=social&label=Star)](https://github.com/itsablabla/garza-team) -->

</div>

Garza OS 是强大的企业级 AI 应用创新引擎，旨在帮助开发者快速构建与部署 AI 应用。它提供完整的开发框架、丰富的工具链与最佳实践，让 AI 应用开发更简单、高效。

![flow](https://cdn.letsmagic.cn/static/img/showmagic.jpg)

## ✨ 特性

- 🚀 **高性能架构**：基于 PHP + Swow + Hyperf 构建，具备出色的性能与可扩展性
- 🧩 **模块化设计**：灵活的插件体系，支持快速扩展与定制
- 🔌 **多模型支持**：无缝接入 GPT、Claude、Gemini 等主流 AI 模型
- 🛠️ **开发工具链**：覆盖开发、测试与部署的完整工具链
- 🔒 **企业级安全**：完善的安全机制，支持组织架构与权限管理

## 🚀 快速开始

### 系统要求

- Linux 内核 3.2 及以上 / macOS 12 Monterey 及以上（用于运行 Garza OS CLI）
- 已安装并正常运行的 [Docker](https://www.docker.com/)
- curl（用于获取一键部署脚本）

Windows 即将支持。

### 使用一键脚本安装 Garza OS

#### macOS/Linux

```bash
curl -fsSL https://getmagicrew.sh | bash
```

这个脚本也可从 `https://dtyq.github.io/artifacts/bootstrap/latest/install.sh` 获取。

脚本会拉取 [Garza OS CLI](https://github.com/itsablabla/garza-team/tree/main/cli) 的最新发布版本，并用它部署 Garza OS。

请等待安装完成。根据网络情况，这可能需要很长时间。

安装完成后，安装程序会展示如下信息：

```bash
[2026-03-24 01:46:39.285][I][deploy] [print summary]...

✓ Deployment complete!
  Access magic-web: http://localhost:38080
  To access from another machine, set MAGIC_WEB_BASE_URL, e.g. export MAGIC_WEB_BASE_URL=http://your-server:38080

To remove the cluster, run: magicrew teardown
```

安装完成后，可以在 `http://localhost:38080` 访问 Garza OS。

#### Windows

即将支持。

## 📚 文档

详细文档请访问 [Garza OS 文档中心](http://docs.letsmagic.cn/)。

## 🤝 贡献

欢迎以多种形式参与贡献，包括但不限于：

- 提交问题与建议
- 完善文档
- 提交代码修复
- 贡献新功能

## 📞 联系我们

- 邮箱：bd@dtyq.com
- 网站：https://www.letsmagic.cn

## 🙏 致谢

感谢所有为 Garza OS 做出贡献的开发者！
