/**
 * 从后端接口获取：/api/system/menus/permissions
 * @description 权限列表, 仅供开发时提供 ts 类型提示，无实际作用
 */
const _permissions = [
  'system:role:list',
  'system:role:create',
  'system:role:read',
  'system:role:update',
  'system:role:delete',
  'system:menu:list',
  'system:menu:create',
  'system:menu:read',
  'system:menu:update',
  'system:menu:delete',
  'system:param-config:list',
  'system:param-config:create',
  'system:param-config:read',
  'system:param-config:update',
  'system:param-config:delete',
  'system:user:list',
  'system:user:create',
  'system:user:read',
  'system:user:update',
  'system:user:delete',
  'system:user:password:update',
  'system:user:pass:reset',
  'system:log:task:list',
  'system:log:login:list',
  'system:log:captcha:list',
  'app:health:network',
  'app:health:database',
  'app:health:memory-heap',
  'app:health:memory-rss',
  'app:health:disk',
  'netdisk:manage:list',
  'netdisk:manage:create',
  'netdisk:manage:info',
  'netdisk:manage:update',
  'netdisk:manage:delete',
  'netdisk:manage:mkdir',
  'netdisk:manage:token',
  'netdisk:manage:mark',
  'netdisk:manage:download',
  'netdisk:manage:rename',
  'netdisk:manage:cut',
  'netdisk:manage:copy',
  'system:dept:list',
  'system:dept:create',
  'system:dept:read',
  'system:dept:update',
  'system:dept:delete',
  'system:dict-item:list',
  'system:dict-item:create',
  'system:dict-item:read',
  'system:dict-item:update',
  'system:dict-item:delete',
  'system:dict-type:list',
  'system:dict-type:create',
  'system:dict-type:read',
  'system:dict-type:update',
  'system:dict-type:delete',
  'system:online:list',
  'system:online:kick',
  'system:task:list',
  'system:task:create',
  'system:task:read',
  'system:task:update',
  'system:task:delete',
  'system:task:once',
  'system:task:start',
  'system:task:stop',
  'todo:list',
  'todo:create',
  'todo:read',
  'todo:update',
  'todo:delete',
  'tool:storage:list',
  'tool:storage:delete',
  'upload:upload',
] as const;

export type PermissionType = (typeof _permissions)[number];

// console.log('permissions', permissions);
