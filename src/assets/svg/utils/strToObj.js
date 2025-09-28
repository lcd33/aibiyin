function styleToObject(styleStr) {
  const styleObj = {};
  styleStr.split(";").forEach(item => {
    if (!item.trim()) return;
    let [key, value] = item.split(":");
    if (key && value) {
      key = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // 转 camelCase
      styleObj[key] = value.trim();
    }
  });
  return styleObj;
}

export default styleToObject