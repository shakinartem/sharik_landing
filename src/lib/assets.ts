const encodePath = (path: string) =>
  path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export function assetUrl(path: string, basePath = import.meta.env.BASE_URL) {
  const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  return `${normalizedBase}${encodePath(path.replace(/^\/+/, ""))}`;
}

export function createCaseLogoSources(basePath: string, caseId: string, customPath?: string) {
  return [
    customPath,
    assetUrl(`assets/cases/${caseId}/logo.png`, basePath),
    assetUrl(`assets/cases/${caseId}/logo.jpg`, basePath),
    assetUrl(`assets/cases/${caseId}/logo.jpeg`, basePath),
    assetUrl(`assets/cases/${caseId}/logo.svg`, basePath),
    assetUrl(`assets/cases/${caseId}/logo.webp`, basePath),
  ].filter(Boolean) as string[];
}

export function createCaseReviewSources(basePath: string, caseId: string, customPath?: string) {
  return [
    customPath,
    assetUrl(`assets/cases/${caseId}/review.png`, basePath),
    assetUrl(`assets/cases/${caseId}/review.jpg`, basePath),
    assetUrl(`assets/cases/${caseId}/review.jpeg`, basePath),
    assetUrl(`assets/cases/${caseId}/review.webp`, basePath),
  ].filter(Boolean) as string[];
}

export function createBrandLogoSources(basePath: string) {
  return [
    assetUrl("assets/brand/logo-main.png", basePath),
    assetUrl("assets/brand/logo-main.svg", basePath),
    assetUrl("assets/brand/logo-main.webp", basePath),
  ];
}

export function createFaviconSources(basePath: string) {
  return [
    assetUrl("favicon.png", basePath),
    assetUrl("favicon-32.png", basePath),
    assetUrl("favicon.svg", basePath),
  ];
}
