export const config = { runtime: "edge" };
const _0x1a = [
  'TARGET_DOMAIN', 'replace', 'url', 'indexOf', 'slice', 'headers', 'startsWith', 'x-vercel-', 
  'x-real-ip', 'x-forwarded-for', 'method', 'body', 'half', 'manual', 'GET', 'HEAD'
];
const _0x2b = (process.env[_0x1a[0]] || "")[_0x1a[1]](/\/$/, "");
const _0x3c = new Set(['host', 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'forwarded', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port']);

export default async function handler(req) {
  if (!_0x2b) return new Response(null, { status: 500 });
  try {
    const _0x4d = req[_0x1a[2]][_0x1a[3]]("/", 8);
    const _0x5e = _0x4d === -1 ? _0x2b + "/" : _0x2b + req[_0x1a[2]][_0x1a[4]](_0x4d);
    const _0x6f = new Headers();
    let _0x7a = null;

    for (const [k, v] of req[_0x1a[5]]) {
      const _0x8b = k.toLowerCase();
      if (_0x3c.has(_0x8b) || _0x8b[_0x1a[6]](_0x1a[7])) continue;
      if (_0x8b === _0x1a[8]) { _0x7a = v; continue; }
      if (_0x8b === _0x1a[9]) { if (!_0x7a) _0x7a = v; continue; }
      _0x6f.set(k, v);
    }
    if (_0x7a) _0x6f.set(_0x1a[9], _0x7a);

    const _0x9c = req[_0x1a[10]];
    const _0x0d = _0x9c !== _0x1a[14] && _0x9c !== _0x1a[15];

    const res = await fetch(_0x5e, {
      method: _0x9c,
      headers: _0x6f,
      body: _0x0d ? req[_0x1a[11]] : undefined,
      duplex: _0x1a[12],
      redirect: _0x1a[13]
    });

    const _0x1e = new Headers(res.headers);
    _0x1e.set("X-Content-Type-Options", "nosniff");
    _0x1e.set("X-Frame-Options", "DENY");

    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: _0x1e });
  } catch {
    return new Response(null, { status: 502 });
  }
}
