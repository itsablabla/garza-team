# Kind deploy overlay for Garza OS (itsablabla/garza-team)

Live host: `http://83.136.219.25:38080`

## What this overlay records

Fixes applied on the Kind cluster that are not in the upstream MagiCrew image:

1. Official Digital Crew avatars under `frontend/magic-web/public/official-crews/`
2. Super Magic image API URLs (the chart left them unexpanded as `http://magic-gateway/TEXT_TO_IMAGE_API_BASE_URL`)
3. Chat workspace API (`GET /api/v1/super-agent/workspaces/app/chat`) by mounting current `super-magic-module` workspace files over the older vendor copy
4. `magic-web` `defaultLanguage: en_US` and `timezone: America/Chicago`
5. `magic-service` raised to 6Gi / 4 CPU

## Apply workspace-fix

```bash
kubectl -n magic apply -f magic-workspace-fix.yaml
```

Then mount the ConfigMap files onto `deploy/magic-service` as in `magic-service-patch.json`.

## Super Magic ConfigMap keys to set

```
TEXT_TO_IMAGE_API_BASE_URL=http://magic-gateway/v1
IMAGE_GENERATOR_API_URL=http://magic-gateway/v1
TEXT_TO_IMAGE_MODEL=gpt-image-1
OPENAI_API_BASE_URL=http://magic-gateway/v1
MAGIC_API_BASE_URL=http://magic-gateway/v1
MAGIC_API_SERVICE_BASE_URL=http://magic-gateway/v1
```

Image generation still requires `gpt-image-1` (or another image model) on the custom OpenAI-compatible provider.
