export default function replaceRegistry(params: {
  lockfileContent: string;
  registry: string;
}) {
  const { lockfileContent, registry } = params;

  // npm resolved and yarn resolved
  let newLockfileContent = lockfileContent.replace(
    /("?resolved"?:? ")(https?:\/\/.*?\/)/g,
    function (match, p1) {
      const newUrl = `${p1}${registry}`;
      return newUrl;
    }
  );

  // pnpm registry
  newLockfileContent = newLockfileContent.replace(
    /(registry: )(https?:\/\/.*?\/)/g,
    function (match, p1) {
      const newUrl = `${p1}${registry}`;
      return newUrl;
    }
  );

  // pnpm tarball
  newLockfileContent = newLockfileContent.replace(
    /(tarball: )(https?:\/\/.*?\/)/g,
    function (match, p1) {
      const newUrl = `${p1}${registry}`;
      return newUrl;
    }
  );

  return newLockfileContent;
}
