---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# 添加语言自动检测脚本
head:
  - - script
    - {}
    - |
      // 检测浏览器语言并重定向
      (function() {
        var userLang = navigator.language || navigator.userLanguage;
        var path = userLang.startsWith('zh') ? '/zh/' : '/en/';
        // 仅在根路径时进行重定向，避免重复重定向
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
          window.location.href = path;
        }
      })();

hero:
  name: "Garza OS"
  text: "Open-source enterprise AI agent platform"
  tagline: Build powerful AI applications with confidence
  actions:
    - theme: brand
      text: Tutorial
      link: /en/tutorial/quick-start/quick-introduction.md
    - theme: alt
      text: Development Guide
      link: /en/development/quick-start/quick-introduction.md

---

## Branding and compatibility

Garza OS is the public-facing brand across this repository and docs site. Existing technical identifiers still appear in the current product stack, including the `magicrew` CLI, `MAGICREW_*` environment variables, `magic-web` package names, and `super-magic` API or route segments.

Current URLs such as `getmagicrew.sh`, `magicrew.ai`, and `letsmagic.cn` are still referenced where Garza OS replacement infrastructure has not yet been rolled out.

# features:
#   - icon: 🚀
#     title: Fast & Efficient 
#     details: Built with performance in mind, Garza OS Docs provides lightning-fast documentation sites.
#   - icon: 🎨
#     title: Beautiful Design
#     details: Modern and clean design that works well on all devices.
#   - icon: 🔧
#     title: Easy to Use
#     details: Simple configuration and powerful features make it easy to create professional documentation.
# --- 