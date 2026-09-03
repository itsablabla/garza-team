#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
MOD="$ROOT/backend/super-magic-module"
kubectl -n magic create configmap magic-workspace-fix \
  --from-file=WorkspaceApi.php="$MOD/src/Interfaces/SuperAgent/Facade/WorkspaceApi.php" \
  --from-file=WorkspaceAppService.php="$MOD/src/Application/SuperAgent/Service/WorkspaceAppService.php" \
  --from-file=WorkspaceDomainService.php="$MOD/src/Domain/SuperAgent/Service/WorkspaceDomainService.php" \
  --from-file=WorkspaceType.php="$MOD/src/Domain/SuperAgent/Entity/ValueObject/WorkspaceType.php" \
  --from-file=super-agent.php="$MOD/config/routes-v1/super-agent.php" \
  --dry-run=client -o yaml | kubectl -n magic apply -f -
kubectl -n magic patch deploy magic-service --patch-file "$(dirname "$0")/magic-service-patch.yaml"
kubectl -n magic rollout status deploy/magic-service
